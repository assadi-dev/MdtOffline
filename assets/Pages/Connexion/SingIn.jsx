import React, { useState } from "react";
import { ButtonStyled } from "../../components/Shared/Buttons/Button.styled";
import {
  LockIconOutLined,
  UserIconOutLined,
} from "../../components/SVG/Connexion.svg";
import {
  CardFooterConnexion,
  InputAnimation,
  Loadericon,
  TextError,
} from "./Connexion.styled";
import InputConnexion from "./InputConnexion";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { connect } from "../../service/UserConnect";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { BarLoading } from "../../components/SVG/Loader.svg";
import AlertError from "../../components/Shared/Alert/AlertError";
import { sleep } from "../../utils/timer";
import {
  REFRESH_TOKEN_STORAGE_NAME,
  TOKEN_STORAGE_NAME,
  USER_DATA_STORAGE,
} from "../../constants/localStorage";
import Cookies from "js-cookie";
import AlertSuccess from "../../components/Shared/Alert/AlertSuccess";
import { useerLogged } from "../../features/Authenticate/Authenticate.slice";

const SingIn = ({ processStep, dispatchStep }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      const { username, password } = values;
      dispatchStep({ type: "LOADING" });

      sleep(1000).then(() => {
        connect(username, password)
          .then((res) => {
            const token = res.token;
            Cookies.set(TOKEN_STORAGE_NAME, token, {
              path: "/",
              sameSite: "Lax",
              secure: true,
            });

            const decode = jwt_decode(token);
            const id = decode.id;
            const role = decode.roles.join("-");
            dispatch(useerLogged({ id, role }));
            dispatchStep({
              type: "FINISH",
              payload: "Authentification reussi !",
            });
            sleep(3000).then(() => navigate("/", { replace: true }));
          })
          .catch((error) => {
            dispatchStep({
              type: "ERROR",
              payload: { message: "Identifiants incorrect", code: "" },
            });
          });
      });
    },
  });

  return (
    <>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <InputAnimation className="form-control mb-signIn" delay={"50ms"}>
            <InputConnexion>
              <span>
                <UserIconOutLined />
              </span>
              <input
                name="username"
                type="text"
                placeholder="Prénom Nom"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </InputConnexion>
            <TextError>{/* <p>dfer"</p> */}</TextError>
          </InputAnimation>
          <InputAnimation className="form-control mb-signIn" delay={"150ms"}>
            <InputConnexion>
              <span>
                <LockIconOutLined />
              </span>
              <input
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </InputConnexion>
          </InputAnimation>
        </div>
        <CardFooterConnexion>
          <div className="action-row">
            {" "}
            {processStep.step != "loading" && processStep.step != "finish" && (
              <ButtonStyled type="submit" className="btn">
                CONNECTER
              </ButtonStyled>
            )}
          </div>
          <div className="action-row">
            {processStep.step == "loading" && (
              <div>
                <Loadericon>
                  <BarLoading />
                </Loadericon>
              </div>
            )}

            {processStep.step == "finish" && (
              <AlertSuccess message={processStep.message} />
            )}

            {processStep.step == "error" && (
              <AlertError
                code={processStep.code}
                message={processStep.message}
              />
            )}
          </div>
        </CardFooterConnexion>
      </form>
    </>
  );
};

export default SingIn;

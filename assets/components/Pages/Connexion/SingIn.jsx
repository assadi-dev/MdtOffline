import React, { useState } from "react";
import { ButtonStyled } from "../../Shared/Buttons/Button.styled";
import { LockIconOutLined, UserIconOutLined } from "../../SVG/Connexion.svg";
import { CardFooterConnexion, TextError } from "./Connexion.styled";
import InputConnexion from "./InputConnexion";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { connect } from "../../../service/UserConnect";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { userLoged } from "../../../redux/actions/Authentication.action";

const SingIn = () => {
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
      connect(username, password)
        .then((res) => {
          setError("");
          const token = res.token;
          localStorage.setItem("mdtOfflineToken-999", token);
          const decode = jwt_decode(token);

          const id = decode.id;
          const role = decode.roles.join("-");
          dispatch(userLoged(id, role));
          navigate("/");
        })
        .catch((e) => {
          setError("Indentifiant Incorrect");
        });
    },
  });

  return (
    <>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control mb-signIn ">
          <InputConnexion>
            <span>
              <UserIconOutLined />
            </span>
            <input
              name="username"
              type="text"
              placeholder="Nom Prénom"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </InputConnexion>
          <TextError>{/* <p>dfer"</p> */}</TextError>
        </div>
        <div className="form-control mb-signIn">
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
          {error && <TextError>{/* <p>dfer"</p> */ error}</TextError>}
        </div>

        <CardFooterConnexion>
          <div className="action-row">
            {" "}
            <ButtonStyled type="submit" className="btn">
              CONNECTER
            </ButtonStyled>
          </div>
        </CardFooterConnexion>
      </form>
    </>
  );
};

export default SingIn;

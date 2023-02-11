import React, { useState } from "react";
import { ButtonStyled } from "../../components/Shared/Buttons/Button.styled";
import {
  LockIconOutLined,
  TelephoneIcon,
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
import { connect, userRegister } from "../../service/UserConnect";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { userLoged } from "../../redux/actions/Authentication.action";
import { sleep } from "../../utils/timer";
import { BarLoading } from "../../components/SVG/Loader.svg";
import AlertError from "../../components/Shared/Alert/AlertError";
import AlertSuccess from "../../components/Shared/Alert/AlertSuccess";

const Register = ({ processStep, dispatchStep }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Le Prénom et Nom est obligatoire";
    }

    if (values.username) {
      let username = values.username.split(" ");
      if (username.length <= 1) errors.username = "Format incorrect";
      if (username.length > 1 && username[1] == "")
        errors.username = "Format incorrect";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      telephone: "",
    },
    validate,
    onSubmit: (values) => {
      const { username, password, telephone } = values;

      dispatchStep({
        type: "LOADING",
        payload: "Compte en cour d'enregistremnt",
      });

      sleep(3000).then(() => {
        userRegister(username, password, telephone)
          .then(() => {
            dispatchStep({
              type: "FINISH",
              payload: "Compte crée avec succès !",
            });
          })
          .catch((error) => {
            let errorMessage =
              "Une erreur survenue lors de la création de votre compte veuillez reessayer";
            errorMessage = error.message;
            if (error.data) {
              errorMessage = error.data.message;
            }

            console.log(error);
            dispatchStep({
              type: "ERROR",
              payload: {
                message: errorMessage,
                code: 500,
              },
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
                onBlur={formik.handleBlur}
              />
            </InputConnexion>
            <TextError>
              {formik.touched.username && formik.errors.username ? (
                <p>{formik.errors.username}</p>
              ) : (
                ""
              )}
            </TextError>
          </InputAnimation>
          <InputAnimation className="form-control mb-signIn" delay={"100ms"}>
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
                onBlur={formik.handleBlur}
              />
            </InputConnexion>

            <TextError>
              {error && <p>{error}</p>}
              {/* <p>dfer"</p> */}
            </TextError>
          </InputAnimation>

          <InputAnimation className="form-control" delay="150ms">
            <InputConnexion>
              <span>
                <TelephoneIcon />
              </span>
              <input
                name="telephone"
                type="text"
                placeholder="Téléphone"
                onChange={formik.handleChange}
                value={formik.values.telephone}
                onBlur={formik.handleBlur}
              />
            </InputConnexion>

            <TextError>
              {error && <p>{error}</p>}
              {/* <p>dfer"</p> */}
            </TextError>
          </InputAnimation>
        </div>
        <CardFooterConnexion>
          <div className="action-row">
            {" "}
            {processStep.step == "" && (
              <ButtonStyled type="submit" className="btn">
                S'INSCRIRE
              </ButtonStyled>
            )}
            {processStep.step == "error" && (
              <ButtonStyled type="submit" className="btn">
                S'INSCRIRE{" "}
              </ButtonStyled>
            )}
          </div>

          <div className="action-row">
            {processStep.step == "loading" && (
              <div>
                <Loadericon>
                  <BarLoading />
                </Loadericon>
                <p>{processStep.message}</p>
              </div>
            )}

            {processStep.step == "error" && (
              <AlertError
                code={processStep.code}
                message={processStep.message}
              />
            )}
            {processStep.step == "finish" && (
              <AlertSuccess message={processStep.message} />
            )}
          </div>
        </CardFooterConnexion>
      </form>
    </>
  );
};

export default Register;

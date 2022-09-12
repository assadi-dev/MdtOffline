import React, { useState } from "react";
import { ButtonStyled } from "../../Shared/Buttons/Button.styled";
import {
  LockIconOutLined,
  TelephoneIcon,
  UserIconOutLined,
} from "../../SVG/Connexion.svg";
import {
  CardFooterConnexion,
  InputAnimation,
  TextError,
} from "./Connexion.styled";
import InputConnexion from "./InputConnexion";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { connect } from "../../../service/UserConnect";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { userLoged } from "../../../redux/actions/Authentication.action";

const Register = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      telephone: "",
    },

    onSubmit: (values) => {
      const { username, password, telephone } = values;
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
                placeholder="Nom Prénom"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </InputConnexion>
            <TextError>{/* <p>dfer"</p> */}</TextError>
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
              />
            </InputConnexion>

            <TextError>
              {error && <p>{error}</p>}
              {/* <p>dfer"</p> */}
            </TextError>
          </InputAnimation>

          <InputAnimation className="form-control mb-signIn" delay="150ms">
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
            <ButtonStyled type="submit" className="btn">
              S'INSCRIRE
            </ButtonStyled>
          </div>
        </CardFooterConnexion>
      </form>
    </>
  );
};

export default Register;

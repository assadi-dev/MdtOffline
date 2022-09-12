import React, { useState } from "react";
import Input from "../../Shared/Input";
import { LockIconOutLined, UserIconOutLined } from "../../SVG/Connexion.svg";
import {
  CardConnexion,
  CardConnexionBody,
  CardConnexionHeader,
  CardFooterConnexion,
  FooterConnexion,
  TextError,
  Wrapper,
} from "./Connexion.styled";
import InputConnexion from "./InputConnexion";
import Register from "./Register";
import SingIn from "./SingIn";

const Connexion = () => {
  const [loginPage, setLoginPage] = useState(false);
  const togglePage = () => {
    setLoginPage(!loginPage);
  };

  return (
    <Wrapper>
      <div>
        <CardConnexion>
          <CardConnexionHeader>
            {loginPage ? (
              <h2 className="title">CONNEXION</h2>
            ) : (
              <h2 className="title">CREER UN COMPTE</h2>
            )}
          </CardConnexionHeader>
          <CardConnexionBody>
            {loginPage ? <SingIn /> : <Register />}
          </CardConnexionBody>
        </CardConnexion>
        <FooterConnexion className="mb-signIn">
          <div className="row-center">
            {loginPage ? (
              <p>
                Vous n'avez pas de compte ?{" "}
                <span className="clikable" onClick={togglePage}>
                  Créer un compte
                </span>
              </p>
            ) : (
              <p>
                Vous avez un compte ?{" "}
                <span className="clikable" onClick={togglePage}>
                  se connecter
                </span>
              </p>
            )}
          </div>
        </FooterConnexion>
      </div>
    </Wrapper>
  );
};

export default Connexion;

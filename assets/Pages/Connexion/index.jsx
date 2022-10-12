import Cookies from "js-cookie";
import React, { useState, useReducer } from "react";
import { useEffect } from "react";
import Input from "../../components/Shared/Input";
import {
  LockIconOutLined,
  UserIconOutLined,
} from "../../components/SVG/Connexion.svg";
import { TOKEN_STORAGE_NAME } from "../../constants/localStorage";
import { deconnect } from "../../service/UserConnect";
import {
  CardConnexion,
  CardConnexionBody,
  CardConnexionHeader,
  CardFooterConnexion,
  FooterConnexion,
  Slogan,
  SloganContainer,
  TextError,
  Wrapper,
} from "./Connexion.styled";
import InputConnexion from "./InputConnexion";
import { processReducer } from "./reducer";
import Register from "./Register";
import SingIn from "./SingIn";

const Connexion = () => {
  const [loginPage, setLoginPage] = useState(true);

  const [process, dispatchProcess] = useReducer(processReducer, {
    step: "",
    message: "",
  });

  const togglePage = () => {
    setLoginPage(!loginPage);
    dispatchProcess({ type: "START" });
  };

  useEffect(() => {
    let storage = Cookies.get(TOKEN_STORAGE_NAME);

    if (storage) {
      deconnect();
    }
  }, []);

  return (
    <Wrapper>
      <CardConnexion>
        <CardConnexionHeader>
          {loginPage ? (
            <h2 className="title">CONNEXION</h2>
          ) : (
            <h2 className="title">CREER UN COMPTE</h2>
          )}
        </CardConnexionHeader>
        <CardConnexionBody>
          {loginPage ? (
            <SingIn processStep={process} dispatchStep={dispatchProcess} />
          ) : (
            <Register processStep={process} dispatchStep={dispatchProcess} />
          )}
        </CardConnexionBody>
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
      </CardConnexion>

      <SloganContainer>
        <Slogan>
          To Protect And To Serve <br /> Obey And Survive
        </Slogan>
      </SloganContainer>
    </Wrapper>
  );
};

export default Connexion;

import React from "react";
import Input from "../../Shared/Input";
import { LockIconOutLined, UserIconOutLined } from "../../SVG/Connexion.svg";
import {
  CardConnexion,
  CardConnexionBody,
  CardConnexionHeader,
  TextError,
  Wrapper,
} from "./Connexion.styled";
import InputConnexion from "./InputConnexion";

const Connexion = () => {
  const OnSubmitConnexion = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <CardConnexion>
        <CardConnexionHeader>
          <h2 className="title">CONNEXION</h2>
        </CardConnexionHeader>
        <CardConnexionBody>
          <form onSubmit={OnSubmitConnexion}>
            <div className="form-control mb-signIn ">
              <InputConnexion>
                <span>
                  <UserIconOutLined />
                </span>
                <input name="username" type="text" placeholder="Nom Prénom" />
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
                />
              </InputConnexion>
              <TextError>{/* <p>dfer"</p> */}</TextError>
            </div>
          </form>
        </CardConnexionBody>
      </CardConnexion>
    </Wrapper>
  );
};

export default Connexion;

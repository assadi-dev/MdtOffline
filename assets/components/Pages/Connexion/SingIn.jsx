import React from "react";
import { LockIconOutLined, UserIconOutLined } from "../../SVG/Connexion.svg";
import { CardFooterConnexion, TextError } from "./Connexion.styled";
import InputConnexion from "./InputConnexion";

const SingIn = () => {
  const OnSubmitConnexion = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {" "}
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
            <input name="password" type="password" placeholder="Mot de passe" />
          </InputConnexion>
          <TextError>{/* <p>dfer"</p> */}</TextError>
        </div>
        <CardFooterConnexion></CardFooterConnexion>
      </form>
    </>
  );
};

export default SingIn;

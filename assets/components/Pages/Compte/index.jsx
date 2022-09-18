import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_owner } from "../../../redux/actions/Authentication.action";
import Input from "../../Shared/Input";
import {
  BodyCompte,
  Container,
  HeaderContainer,
  InfoAgent,
  Photo,
} from "./Compte.styled";
import FormUser from "./FormUser";

const Compte = () => {
  const User = useSelector((state) => state.AuthenticateReducer);

  return (
    <Container>
      <HeaderContainer>
        <Photo htmlFor="photo" img={User.photo}>
          <input id="photo" type="file" name="photo" accept="image/*" />
        </Photo>
        <InfoAgent>
          <p className="username">{User.username}</p>
          {User.matricule && (
            <p className="grade">{`${User.matricule}-${User.grade}`}</p>
          )}
        </InfoAgent>
      </HeaderContainer>
      {User.isLoggedIn && (
        <BodyCompte>
          <FormUser
            idUser={User.id}
            idAgent={User.idAgent}
            username={User.username}
            matricule={User.matricule}
            telephone={User.telephone}
            token={User.token}
          />
        </BodyCompte>
      )}
    </Container>
  );
};

export default Compte;

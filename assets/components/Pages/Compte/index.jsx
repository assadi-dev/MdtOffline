import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_owner,
  UploadPhotoOwner,
} from "../../../redux/actions/Authentication.action";
import Input from "../../Shared/Input";
import {
  BodyCompte,
  Container,
  HeaderContainer,
  InfoAgent,
  Photo,
  PhotoContainer,
  PhotoValidateBtn,
} from "./Compte.styled";
import FormUser from "./FormUser";

const Compte = () => {
  const User = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const [file, setFile] = useState({
    file: null,
    type: "",
    size: 0,
    preview: "",
  });

  const handleChangePhoto = (e) => {
    let file = e.target.files[0];
    let blob = URL.createObjectURL(file);
    setFile((prevState) => ({
      ...prevState,
      file: file,
      type: file.type,
      size: file.size,
      preview: blob,
    }));
  };

  const uploadPhotoAgent = () => {
    let formData = new FormData();
    formData.append("photo", file.file);
    file.preview &&
      dispatch(UploadPhotoOwner(User.idAgent, formData, User.token)).then(
        () => {
          setFile((prevState) => ({
            ...prevState,
            file: "",
            type: "",
            size: "",
            preview: "",
          }));
        }
      );
  };

  return (
    <Container>
      <HeaderContainer>
        <PhotoContainer>
          <Photo htmlFor="photo" img={file.preview ? file.preview : User.photo}>
            {
              <input
                id="photo"
                type="file"
                name="photo"
                accept=".jpeg,.jpg,.png"
                onChange={handleChangePhoto}
              />
            }
          </Photo>
          {file.preview && (
            <PhotoValidateBtn onClick={uploadPhotoAgent}>
              VALIDER
            </PhotoValidateBtn>
          )}
        </PhotoContainer>

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

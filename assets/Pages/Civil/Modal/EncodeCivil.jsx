import React, { useState } from "react";
import { ButtonStyled } from "../../../components/Shared/Buttons/Button.styled";
import Input from "../../../components/Shared/Input";
import Modal from "../../../components/Shared/Modal";
import Select from "../../../components/Shared/Select";
import {
  CloseModal,
  FormContainer,
  HeaderModal,
  InputContainer,
  InputPhoto,
  LabelStyled,
  ModalFooter,
  PreView,
  PrewiewPhoto,
  RowModal,
} from "./EncodeCivile.styled";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ucFirst } from "../../../utils/textFormat";
import {
  addCivilAsync,
  uploadPhotoCivilAsync,
} from "../../../features/Civil/CivilAsyncApi";
import { uploadPhotoCivil } from "../../../features/Civil/CivilApi";
const EncodeCivil = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState({
    file: null,
    preview: "",
    size: 0,
    type: "",
  });
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthenticateReducer.token);

  const formik = useFormik({
    initialValues: {
      photo: "",
      nom: "",
      prenom: "",
      identification: "",
      birthday: "",
      telephone: "",
      nationalite: "",
      affiliation: "",
      emploie: "",
      adresse: "",
      hairColor: "",
      ethnie: "caucasien",
      permis: "non-valide",
      sexe: "homme",
    },
    onSubmit: (values) => {
      let data = {
        ...values,
        nom: ucFirst(values.nom),
        prenom: ucFirst(values.prenom),
        emploie: ucFirst(values.emploie),
        nationalite: ucFirst(values.nationalite),
      };

      const payload = { data };
      console.log("dispatch");
      dispatch(addCivilAsync(payload))
        .unwrap()
        .then((res) => {
          if (file.file) {
            let id = res.id;

            dispatch(uploadPhotoCivilAsync({ id, photo: file.file }));
          }
          formik.resetForm();
          onClose();
        });
    },
  });

  const handlePreview = (e) => {
    let file = e.target.files[0];
    let src = URL.createObjectURL(file);
    setFile((prevState) => ({
      ...prevState,
      file: file,
      preview: src,
      size: file.size,
      type: file.type,
    }));
  };
  const removePhoto = () => {
    setFile((prevState) => ({
      ...prevState,
      file: null,
      preview: "",
      size: 0,
      type: "",
    }));
  };

  const previewStyle = {
    backgroundImage: `url(${file.preview})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <FormContainer onSubmit={formik.handleSubmit}>
          <HeaderModal>
            <h2 className="formTitle">Encoder un civil</h2>

            <CloseModal onClick={() => onClose()} />
          </HeaderModal>
          <InputContainer>
            <RowModal>
              <div className="col">
                <div className="form-control">
                  <Input
                    inputName={"nom"}
                    placeholder="Nom"
                    autoFocus={true}
                    onChange={formik.handleChange}
                    value={formik.values.nom}
                    required={true}
                  />
                </div>
                <div className="form-control">
                  <Input
                    inputName={"prenom"}
                    placeholder="Prénom"
                    onChange={formik.handleChange}
                    value={formik.values.prenom}
                    required={true}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"birthday"}
                    placeholder="JJ-MM-AAAA"
                    onChange={formik.handleChange}
                    value={formik.values.birthday}
                    required={true}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"adresse"}
                    placeholder="Adresse"
                    onChange={formik.handleChange}
                    value={formik.values.adresse}
                    required={true}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"telephone"}
                    placeholder="numero de téléphone"
                    onChange={formik.handleChange}
                    value={formik.values.telephone}
                    type="tel"
                    required={true}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"nationalite"}
                    placeholder="Nationalité"
                    onChange={formik.handleChange}
                    value={formik.values.nationalite}
                    required={true}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"affiliation"}
                    placeholder="Affiliation"
                    onChange={formik.handleChange}
                    value={formik.values.affiliation}
                    required={true}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"emploie"}
                    placeholder="Emploie"
                    onChange={formik.handleChange}
                    value={formik.values.emploie}
                    required={true}
                  />
                </div>
              </div>
              <div className="col">
                <PreView>
                  {" "}
                  <PrewiewPhoto style={previewStyle}>
                    {file.file ? (
                      <span onClick={removePhoto} className="remove">
                        X
                      </span>
                    ) : null}
                    <LabelStyled htmlFor="photo">
                      {!file.file ? <p>Photo d'identité</p> : null}
                    </LabelStyled>
                  </PrewiewPhoto>{" "}
                  <InputPhoto
                    key={file.file && file.file.name}
                    type="file"
                    accept="image/*"
                    name="file"
                    id="photo"
                    onChange={handlePreview}
                    onBlur={formik.handleBlur}
                  />
                </PreView>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"hairColor"}
                    placeholder="Couleur des cheveux"
                    onChange={formik.handleChange}
                    value={formik.values.hairColor}
                    required={true}
                  />
                </div>
                <div className="form-control">
                  <Select
                    inputName={"ethnie"}
                    placeholder="Ethnie"
                    onChange={formik.handleChange}
                    value={formik.values.ethnie}
                    required={true}
                  >
                    <option value="Caucasien">Caucasien</option>
                    <option value="Afro-Americain">Afro-Americain</option>
                    <option value="Hispanique">Hispanique</option>
                    <option value="Asiatique">Asiatique</option>
                    <option value="Métis">Métis</option>
                    <option value="Amérindien">Amérindien</option>
                  </Select>
                </div>
                <div className="form-control">
                  {" "}
                  <Select
                    inputName={"permis"}
                    placeholder="Permis"
                    onChange={formik.handleChange}
                    value={formik.values.permis}
                    required={true}
                  >
                    <option value="non-valide">Non Valide</option>
                    <option value="valide">Valide</option>
                    <option value="suspendue">Suspendu</option>
                  </Select>
                </div>
                <div className="form-control">
                  <Select
                    inputName={"sexe"}
                    placeholder="Genre"
                    onChange={formik.handleChange}
                    value={formik.values.sexe}
                    required={true}
                  >
                    <option value="homme">Homme</option>
                    <option value="Femme">Femme</option>
                  </Select>
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"identification"}
                    placeholder="Numéro d'identification"
                    onChange={formik.handleChange}
                    value={formik.values.identification}
                    required={true}
                  />
                </div>
              </div>
            </RowModal>
            <ModalFooter>
              <div className="form-control">
                <p></p>
              </div>
              <div className="form-control">
                <ButtonStyled type="submit" className="btn">
                  Envoyer
                </ButtonStyled>
              </div>
            </ModalFooter>
          </InputContainer>
        </FormContainer>
      </Modal>
    </div>
  );
};

export default EncodeCivil;

import React, { useState } from "react";
import { ButtonStyled } from "../../../Shared/Buttons/Button.styled";
import Input from "../../../Shared/Input";
import Modal from "../../../Shared/Modal";
import Select from "../../../Shared/select";
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

const EncodeCivil = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      identification: "",
      birthday: "",
      telephone: "",
      nationalite: "",
      affiliation: "",
      emploie: "",
      adresse: "",
      photo: "",
      haireColor: "",
      ethnie: "caucasien",
      permis: "non-valide",
      sexe: "homme",
      file: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handlePreview = (e) => {
    let file = e.target.files[0];
    let src = URL.createObjectURL(file);
    formik.setFieldValue("file", file);
    formik.setFieldValue("photo", src);
  };
  const removePhoto = () => {
    formik.setFieldValue("file", null);
    formik.setFieldValue("photo", "");
  };

  const previewStyle = {
    backgroundImage: `url(${formik.values.photo})`,
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
                  />
                </div>
                <div className="form-control">
                  <Input
                    inputName={"prenom"}
                    placeholder="Prénom"
                    onChange={formik.handleChange}
                    value={formik.values.prenom}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"birthday"}
                    placeholder="JJ-MM-AAAA"
                    onChange={formik.handleChange}
                    value={formik.values.birthday}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"adresse"}
                    placeholder="Adresse"
                    onChange={formik.handleChange}
                    value={formik.values.adresse}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"telephone"}
                    placeholder="numero de téléphone"
                    onChange={formik.handleChange}
                    value={formik.values.telephone}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"nationalite"}
                    placeholder="Nationalité"
                    onChange={formik.handleChange}
                    value={formik.values.nationalite}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"affiliation"}
                    placeholder="Affiliation"
                    onChange={formik.handleChange}
                    value={formik.values.affiliation}
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"emploie"}
                    placeholder="Emploie"
                    onChange={formik.handleChange}
                    value={formik.values.emploie}
                  />
                </div>
              </div>
              <div className="col">
                <PreView>
                  {" "}
                  <PrewiewPhoto style={previewStyle}>
                    {formik.values.file ? (
                      <span onClick={removePhoto} className="remove">
                        X
                      </span>
                    ) : null}
                    <LabelStyled htmlFor="photo">
                      {!formik.values.file ? <p>Photo d'identité</p> : null}
                    </LabelStyled>
                  </PrewiewPhoto>{" "}
                  <InputPhoto
                    key={formik.values.file && formik.values.file.name}
                    type="file"
                    accept="image/*"
                    name="photo"
                    id="photo"
                    onChange={handlePreview}
                    onBlur={formik.handleBlur}
                  />
                </PreView>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"haireColor"}
                    placeholder="Couleur des cheveux"
                    onChange={formik.handleChange}
                    value={formik.values.haireColor}
                  />
                </div>
                <div className="form-control">
                  <Select
                    inputName={"ethnie"}
                    placeholder="Ethnie"
                    onChange={formik.handleChange}
                    value={formik.values.ethnie}
                  >
                    <option value="caucasien">Caucasien</option>
                    <option value="afro-Americain">Afro-Americain</option>
                    <option value="hispanique">Hispanique</option>
                    <option value="asiatique">Asiatique</option>
                    <option value="metis">Métis</option>
                    <option value="amerindien">Amérindien</option>
                  </Select>
                </div>
                <div className="form-control">
                  {" "}
                  <Select
                    inputName={"permis"}
                    placeholder="Permis"
                    onChange={formik.handleChange}
                    value={formik.values.permis}
                  >
                    <option value="non-valide">Non Valide</option>
                    <option value="valide">Valide</option>
                    <option value="suspendue">Suspendu</option>
                  </Select>
                </div>
                <div className="form-control">
                  <Select
                    inputName={"sexe"}
                    placeholder="Sexe"
                    onChange={formik.handleChange}
                    value={formik.values.sexe}
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
                  />
                </div>
              </div>
            </RowModal>
            <ModalFooter>
              <div className="form-control">
                <p></p>
              </div>
              <div className="form-control">
                <ButtonStyled className="btn">Envoyer</ButtonStyled>
              </div>
            </ModalFooter>
          </InputContainer>
        </FormContainer>
      </Modal>
    </div>
  );
};

export default EncodeCivil;

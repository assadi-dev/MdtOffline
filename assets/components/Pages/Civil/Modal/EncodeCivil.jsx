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

const EncodeCivil = ({ isOpen, onClose }) => {
  const [civil, setCivil] = useState({
    nom: "",
    prenom: "",
    photo: "",
  });

  const handlePreview = (e) => {
    let file = e.target.files[0];
    let src = URL.createObjectURL(file);
    setCivil((prevState) => ({ ...prevState, photo: src }));
  };
  const removePhoto = () => {
    setCivil((prevState) => ({ ...prevState, photo: "" }));
  };

  const previewStyle = {
    backgroundImage: `url(${civil.photo})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <FormContainer>
          <HeaderModal>
            <h2 className="formTitle">Encoder un civil</h2>

            <CloseModal onClick={() => onClose()} />
          </HeaderModal>
          <InputContainer>
            <RowModal>
              <div className="col">
                <div className="form-control">
                  <Input inputName={"nom"} placeholder="Nom" autoFocus={true} />
                </div>
                <div className="form-control">
                  <Input inputName={"prénom"} placeholder="Prénom" />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"date-naissance"}
                    placeholder="JJ-MM-AAAA"
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input inputName={"adresse"} placeholder="Adresse" />
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"telephone"}
                    placeholder="numero de téléphone"
                  />
                </div>
                <div className="form-control">
                  {" "}
                  <Input inputName={"nationalité"} placeholder="Nationalité" />
                </div>
                <div className="form-control">
                  {" "}
                  <Input inputName={"affiliation"} placeholder="Affiliation" />
                </div>
                <div className="form-control">
                  {" "}
                  <Input inputName={"emploie"} placeholder="Emploie" />
                </div>
              </div>
              <div className="col">
                <PreView>
                  {" "}
                  <PrewiewPhoto style={previewStyle}>
                    {civil.photo ? (
                      <span onClick={removePhoto} className="remove">
                        X
                      </span>
                    ) : null}
                    <LabelStyled htmlFor="photoidentite">
                      {!civil.photo ? <p>Photo d'identité</p> : null}
                    </LabelStyled>
                  </PrewiewPhoto>{" "}
                  <InputPhoto
                    type="file"
                    accept="image/*"
                    name="photoidentite"
                    id="photoidentite"
                    onChange={handlePreview}
                  />
                </PreView>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"haireColor"}
                    placeholder="Couleur des cheveux"
                  />
                </div>
                <div className="form-control">
                  <Select inputName={"ethnie"} placeholder="Ethnie">
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
                  <Select inputName={"permis"} placeholder="Permis">
                    <option value="non-valide">Non Valide</option>
                    <option value="valide">Valide</option>
                    <option value="suspendue">Suspendu</option>
                  </Select>
                </div>
                <div className="form-control">
                  <Select inputName={"sexe"} placeholder="Sexe">
                    <option value="homme">Homme</option>
                    <option value="Femme">Femme</option>
                  </Select>
                </div>
                <div className="form-control">
                  {" "}
                  <Input
                    inputName={"numeroIdentification"}
                    placeholder="Numéro d'identification"
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

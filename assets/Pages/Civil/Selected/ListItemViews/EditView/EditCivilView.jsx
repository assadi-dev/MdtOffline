import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../../../../components/Shared/Input";
import Select from "../../../../../components/Shared/Select";
import {
  CloseModal,
  ColEnd,
  ColStart,
  EditCivilWrapper,
  ErrorCustomAlert,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  HeaderModal,
  ModalViewContainer,
  PhotoAgent,
  PhotoAgentContainer,
  PhotoCivil,
  PhotoCivilContainer,
  RowInput,
  RowInputHeader,
  SubmitButton,
} from "./EditCivil.styled";

const EditCivilView = ({ onClose }) => {
  const dispatch = useDispatch();
  const civilSelectore = useSelector((state) => state.CivilReducer);
  const civilData = civilSelectore.selected;
  let data = {
    nom: civilData.nom,
    prenom: civilData.prenom,
    birthday: civilData.birthday,
    telephone: civilData.telephone,
    nationalite: civilData.nationalite,
    affiliation: civilData.affiliation,
    permis: civilData.permis,
    sexe: civilData.sexe,
    identification: civilData.identification,
  };

  return (
    <>
      <ModalViewContainer>
        <HeaderModal>
          <h2 className="formTitle">
            {`${civilData.prenom} ${civilData.nom}`}
          </h2>
          <CloseModal onClick={() => onClose()} />
        </HeaderModal>

        <FormBodyContainer>
          <RowInputHeader>
            <ColStart>
              <RowInput style={{ alignItems: "start", marginBottom: 0 }}>
                <FormControl>
                  <FormLabel>Prénom</FormLabel>
                  <Input inputName={"name"} placeholder="Prénom" />
                </FormControl>
                <FormControl>
                  <FormLabel>Nom</FormLabel>
                  <Input inputName={"name"} placeholder="Nom" />
                </FormControl>
              </RowInput>
              <FormControl>
                <FormLabel>Date de naissance</FormLabel>
                <Input inputName={"name"} placeholder="JJ-MM-AAAA" />
              </FormControl>
              <FormControl>
                <FormLabel>Genre</FormLabel>
                <Input inputName={"name"} placeholder="Sexe" />
              </FormControl>
              <FormControl>
                <FormLabel>Adresse</FormLabel>
                <Input inputName={"name"} placeholder="Adresse" />
              </FormControl>
            </ColStart>
            <ColEnd>
              <PhotoCivilContainer>
                <PhotoCivil src={""} />
              </PhotoCivilContainer>
            </ColEnd>
          </RowInputHeader>
          <FormControl>
            <FormLabel>Nationalité</FormLabel>
            <Input inputName={"name"} placeholder="Nationalité" />
          </FormControl>
          <FormControl>
            <FormLabel>Ethnie</FormLabel>
            <Select inputName={"ethnie"} placeholder="Ethnie">
              <option value="caucasien">Caucasien</option>
              <option value="afro-Americain">Afro-Americain</option>
              <option value="hispanique">Hispanique</option>
              <option value="asiatique">Asiatique</option>
              <option value="metis">Métis</option>
              <option value="amerindien">Amérindien</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Couleur des cheuveux</FormLabel>
            <Input inputName={"name"} placeholder="Ethnie" />
          </FormControl>

          <FormControl>
            <FormLabel>Permis</FormLabel>
            <Select inputName={"permis"} placeholder="Permis">
              <option value="non-valide">Non Valide</option>
              <option value="valide">Valide</option>
              <option value="suspendue">Suspendu</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Emploie</FormLabel>
            <Input inputName={"name"} placeholder="Emploie" />
          </FormControl>
          <FormControl>
            <FormLabel>Numéro d'identification</FormLabel>
            <Input inputName={"name"} placeholder="Numéro d'identification" />
          </FormControl>
          <FormBottomRow>
            <FormControl style={{ height: 10 }}>
              {/* <ErrorCustomAlert message={""} /> */}
            </FormControl>
            <FormControl>
              <SubmitButton>Mettre à jour</SubmitButton>
            </FormControl>
          </FormBottomRow>
        </FormBodyContainer>
      </ModalViewContainer>
    </>
  );
};

export default EditCivilView;

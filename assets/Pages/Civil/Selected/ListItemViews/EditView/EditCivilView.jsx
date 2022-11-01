import React, { useEffect } from "react";
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
import { useFormik } from "formik";
import { editCivil } from "../../../../../redux/actions/Civil.action";
import { ucFirst } from "../../../../../utils/textFormat";

const EditCivilView = ({ idCivil, onClose }) => {
  const dispatch = useDispatch();
  const civilSelectore = useSelector((state) => state.CivilReducer);
  const civilData = civilSelectore.selected;

  const formik = useFormik({
    initialValues: {
      photo: civilData.photo,
      nom: civilData.nom,
      prenom: civilData.prenom,
      birthday: civilData.birthday,
      adresse: civilData.adresse,
      telephone: civilData.telephone,
      nationalite: civilData.nationalite,
      ethnie: civilData.ethnie,
      hairColor: civilData.hairColor,
      affiliation: civilData.affiliation,
      permis: civilData.permis,
      sexe: civilData.sexe,
      identification: civilData.identification,
      emploie: civilData.emploie,
    },
    onSubmit: (values) => {
      console.log(values);
      let data = {
        ...values,
        id: idCivil,
        nom: ucFirst(values.nom),
        prenom: ucFirst(values.prenom),
        emploie: ucFirst(values.emploie),
        nationalite: ucFirst(values.nationalite),
      };
      dispatch(editCivil(idCivil, data)).then((res) => {
        onClose();
      });
    },
  });

  return (
    <>
      <ModalViewContainer onSubmit={formik.handleSubmit}>
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
                  <Input
                    inputName={"prenom"}
                    placeholder="Prénom"
                    value={formik.values.prenom}
                    onChange={formik.handleChange}
                    required={true}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Nom</FormLabel>
                  <Input
                    inputName={"nom"}
                    placeholder="Nom"
                    value={formik.values.nom}
                    onChange={formik.handleChange}
                    required={true}
                  />
                </FormControl>
              </RowInput>
              <FormControl>
                <FormLabel>Date de naissance</FormLabel>
                <Input
                  inputName={"birthday"}
                  placeholder="JJ-MM-AAAA"
                  onChange={formik.handleChange}
                  value={formik.values.birthday}
                  required={true}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Genre</FormLabel>
                <Select
                  inputName={"sexe"}
                  placeholder="Genre"
                  onChange={formik.handleChange}
                  value={formik.values.sexe}
                  required={true}
                >
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Adresse</FormLabel>
                <Input
                  inputName={"adresse"}
                  placeholder="Adresse"
                  onChange={formik.handleChange}
                  value={formik.values.adresse}
                  required={true}
                />
              </FormControl>
            </ColStart>
            <ColEnd>
              <PhotoCivilContainer>
                <PhotoCivil src={civilData.photo} />
              </PhotoCivilContainer>
            </ColEnd>
          </RowInputHeader>
          <FormControl>
            <FormLabel>Nationalité</FormLabel>
            <Input
              inputName={"nationalite"}
              placeholder="Nationalité"
              onChange={formik.handleChange}
              value={formik.values.nationalite}
              required={true}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Ethnie</FormLabel>
            <Select
              inputName={"ethnie"}
              placeholder="Ethnie"
              onChange={formik.handleChange}
              value={formik.values.ethnie}
            >
              <option value="Caucasien">Caucasien</option>
              <option value="Afro-Americain">Afro-Americain</option>
              <option value="Hispanique">Hispanique</option>
              <option value="Asiatique">Asiatique</option>
              <option value="Métis">Métis</option>
              <option value="Amérindien">Amérindien</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Couleur des cheuveux</FormLabel>
            <Input
              inputName={"hairColor"}
              placeholder="Blonds,Noirs..."
              onChange={formik.handleChange}
              value={formik.values.hairColor}
              required={true}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Permis</FormLabel>
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
          </FormControl>
          <FormControl>
            <FormLabel>Emploie</FormLabel>
            <Input
              inputName={"emploie"}
              placeholder="Emploie"
              onChange={formik.handleChange}
              value={formik.values.emploie}
              required={true}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Affiliation</FormLabel>
            <Input
              inputName={"affiliation"}
              placeholder="Numéro d'identification"
              onChange={formik.handleChange}
              value={formik.values.affiliation}
              required={true}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Numéro d'identification</FormLabel>
            <Input
              inputName={"identification"}
              placeholder="Numéro d'identification"
              onChange={formik.handleChange}
              value={formik.values.identification}
              required={true}
            />
          </FormControl>
          <FormBottomRow>
            <FormControl style={{ height: 10 }}>
              {/* <ErrorCustomAlert message={""} /> */}
            </FormControl>
            <FormControl>
              <SubmitButton type="submit">Mettre à jour</SubmitButton>
            </FormControl>
          </FormBottomRow>
        </FormBodyContainer>
      </ModalViewContainer>
    </>
  );
};

export default EditCivilView;

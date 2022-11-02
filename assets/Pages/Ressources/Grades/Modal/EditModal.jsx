import React from "react";
import Input from "../../../../components/Shared/Input";
import {
  CloseModal,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  HeaderModal,
  ModalViewContainer,
  SubmitButton,
} from "../Grade.styled";
import { useFormik } from "formik";

const EditModal = ({ gradeData, onClose }) => {
  const { id, nom, rang, categorie } = gradeData;

  const formik = useFormik({
    initialValues: {
      id: id,
      nom: nom,
      categorie: categorie,
      rang: rang,
    },
    onSubmit: (values) => {
      console.log(values);
      let data = {
        ...values,
        id: id,
        nom: nom,
        categorie: categorie,
        rang: rang,
      };

      onClose();
    },
  });

  return (
    <>
      <ModalViewContainer>
        <HeaderModal>
          {" "}
          <h2 className="formTitle">{`${nom}`}</h2>
          <CloseModal onClick={() => onClose()} />
        </HeaderModal>

        <FormBodyContainer>
          <FormControl>
            <Input
              required
              inputName={"nom"}
              onChange={formik.handleChange}
              values={formik.values.nom}
              placeholder="Nom"
            />
          </FormControl>
          <FormControl>
            <Input
              required
              inputName={"categorie"}
              onChange={formik.handleChange}
              values={formik.values.categorie}
              placeholder="Categorie"
            />
          </FormControl>
          <FormControl>
            <Input
              required
              inputName={"rang"}
              onChange={formik.handleChange}
              values={formik.values.rang}
              placeholder="Nom"
            />
          </FormControl>
        </FormBodyContainer>
        <FormBottomRow>
          <SubmitButton>Mettre à jour</SubmitButton>
        </FormBottomRow>
      </ModalViewContainer>
    </>
  );
};

export default EditModal;

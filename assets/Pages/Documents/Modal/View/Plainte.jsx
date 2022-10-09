import { useFormik } from "formik";
import React from "react";
import {
  CloseModal,
  FormBodyContainer,
  FormBottomRow,
  FormContainer,
  FormControl,
  FormLabel,
  HeaderModal,
  InputDateTime,
  SubmitButton,
} from "../../Document.styled";
import Input from "../../../../components/Shared/Input";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import { useDispatch, useSelector } from "react-redux";

const PlainteView = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      formik.resetForm();
      onClose();
    },
  });

  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit}>
        <HeaderModal>
          <h2 className="formTitle">Plainte</h2>

          <CloseModal onClick={() => onClose()} />
        </HeaderModal>

        <FormBodyContainer>
          <FormControl>
            <FormLabel>Dépositaire: </FormLabel>
            <Input
              inputName={"typePatrouille"}
              placeholder="Prénom Nom"
              onChange={formik.handleChange}
              value={formik.values.depositaire}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Numéro du dépositaire</FormLabel>
            <InputDateTime
              inputName={"numeroDepositaire"}
              placeholder="555-XXXX"
              onChange={formik.handleChange}
              value={formik.values.numeroDepositaire}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Incriminé: </FormLabel>
            <Input
              inputName={"typePatrouille"}
              placeholder="Prénom Nom"
              onChange={formik.handleChange}
              value={formik.values.depositaire}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Numéro du Incriminé</FormLabel>
            <InputDateTime
              inputName={"numeroIncrimine"}
              placeholder="555-XXXX"
              onChange={formik.handleChange}
              value={formik.values.numeroIncrimine}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Raison du dépot</FormLabel>
            <InputTextArea
              rows={3}
              placeholder=""
              name="raisonPlainte"
              value={formik.values.raisonPlainte}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Corps de la plainte</FormLabel>
            <InputTextArea
              rows={3}
              placeholder=""
              name="corpsPlainte"
              value={formik.values.corpsPlainte}
              onChange={formik.handleChange}
            />
          </FormControl>

          <FormBottomRow>
            <SubmitButton>Envoyer</SubmitButton>
          </FormBottomRow>
        </FormBodyContainer>
      </FormContainer>
    </>
  );
};

export default PlainteView;

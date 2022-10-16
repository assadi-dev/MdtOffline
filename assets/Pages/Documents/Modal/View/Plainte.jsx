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
import { add_plainte } from "../../../../redux/actions/Plainte.action";

const PlainteView = ({ onClose }) => {
  const agent = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nomDepositaire: "",
      telephoneDepositaire: "",
      nomIncrimine: "",
      telephoneIncrimine: "",
      raisonDepot: "",
      corpsPlainte: "",
      idAgent: agent.idAgent,
    },
    onSubmit: (values) => {
      let plainteData = { ...values, idAgent: agent.idAgent };

      dispatch(add_plainte(plainteData)).then(() => {
        formik.resetForm();
        onClose();
      });
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
              inputName={"nomDepositaire"}
              placeholder="Prénom Nom"
              onChange={formik.handleChange}
              value={formik.values.nomDepositaire}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Numéro du dépositaire</FormLabel>
            <InputDateTime
              inputName={"telephoneDepositaire"}
              placeholder="555-XXXX"
              onChange={formik.handleChange}
              value={formik.values.telephoneDepositaire}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Incriminé: </FormLabel>
            <Input
              inputName={"nomIncrimine"}
              placeholder="Prénom Nom"
              onChange={formik.handleChange}
              value={formik.values.nomIncrimine}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Numéro du Incriminé</FormLabel>
            <InputDateTime
              inputName={"telephoneIncrimine"}
              placeholder="555-XXXX"
              onChange={formik.handleChange}
              value={formik.values.telephoneIncrimine}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Raison du dépot</FormLabel>
            <InputTextArea
              rows={3}
              placeholder=""
              name="raisonDepot"
              value={formik.values.raisonDepot}
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

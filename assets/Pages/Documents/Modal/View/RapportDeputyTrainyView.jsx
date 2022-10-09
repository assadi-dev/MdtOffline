import { useFormik } from "formik";
import React, { useMemo } from "react";
import Input from "../../../../components/Shared/Input";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import Select from "../../../../components/Shared/Select";
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
import { useDispatch, useSelector } from "react-redux";

const RapportDeputyTrainyView = ({ onClose }) => {
  const { isReady, collection } = useSelector((state) => state.AgentsReducer);
  const listOfRookies = useMemo(() => {
    if (isReady) {
      return collection;
    }
    return [];
  }, [isReady]);

  const formik = useFormik({
    initialValues: {
      deputyTrainyAgent: "",
      datePatrouille: "",
      typePatrouille: "",
      rapport: "",
    },
    onSubmit: (values) => {
      //formik.resetForm();
      // onClose();
    },
  });

  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit}>
        <HeaderModal>
          <h2 className="formTitle">Creer un Rapport Deputy Trainy</h2>

          <CloseModal onClick={() => onClose()} />
        </HeaderModal>

        <FormBodyContainer>
          <FormControl>
            <FormLabel>Deputy Trainy concerné</FormLabel>
            <Select
              inputName={"deputyTrainyAgent"}
              placeholder="Deputy Trainy Concerné"
              onChange={formik.handleChange}
              value={formik.values.deputyTrainyAgent}
            >
              <option></option>
              {listOfRookies.length > 0 &&
                listOfRookies.map((agent) => (
                  <option value={agent.id} key={agent.id}>
                    {agent.name}
                  </option>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Date de patrouille</FormLabel>
            <InputDateTime
              inputName={"datePatrouille"}
              placeholder="Date de patrouille"
              onChange={formik.handleChange}
              value={formik.values.datePatrouille}
              type={"datetime-local"}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Type de patrouille</FormLabel>
            <Input
              inputName={"typePatrouille"}
              placeholder="Ex:Patrouille classique"
              onChange={formik.handleChange}
              value={formik.values.typePatrouille}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Rapport</FormLabel>
            <InputTextArea
              rows={3}
              placeholder="Ecrivez le rapport"
              name="rapport"
              value={formik.values.rapport}
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

RapportDeputyTrainyView.defaultProps = {
  listOfRookies: [],
};

export default RapportDeputyTrainyView;

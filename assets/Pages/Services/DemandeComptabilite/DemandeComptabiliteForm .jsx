import React, { useState } from "react";
import { DemandeComptabiliteFormContent } from "./DemandeComptabilite.styled";
import { FormControl, FormLabel, SubmitButton } from "../Service.styled";
import Input from "../../../components/Shared/Input";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { dateNowFrenchFormat } from "../../../utils/dateFormat";
import InputTextArea from "../../../components/Shared/InputTextArea";
import AlertError from "../../../components/Shared/Alert/AlertError";
import AlertSuccess from "../../../components/Shared/Alert/AlertSuccess";
import { sleep } from "../../../utils/timer";

const DemandeComptabiliteForm = () => {
  const agent = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const [alertState, setAlertState] = useState({
    success: "",
    error: "",
    show: false,
  });

  const initialValues = {
    agent: `${agent.matricule}-${agent.username}`,
    date: dateNowFrenchFormat(),
    montant: "0$",
    raison: "",
  };

  const resetState = () => {
    setAlertState((current) => ({
      ...current,
      error: "",
      success: "",
      show: false,
    }));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      resetState();
      if (values.montant && values.raison) {
        setAlertState((current) => ({
          ...current,
          success: "votre demande à bien été reçus",
          show: true,
        }));
        formik.handleReset();
        sleep(5000).then(() => {
          resetState();
        });
      } else {
        setAlertState((current) => ({
          ...current,
          error: "Tout les champs doivent etre remplis",
          show: true,
        }));
      }
    },
  });

  return (
    <DemandeComptabiliteFormContent onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>Agent:</FormLabel>
        <Input
          inputName={"agent"}
          placeholder="Ex: 00-Jhon Doe"
          onChange={formik.handleChange}
          value={formik.values.agent}
          readOnly={true}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Date et heure:</FormLabel>
        <Input
          inputName={"date"}
          placeholder="Ex: 00-Jhon Doe"
          onChange={formik.handleChange}
          value={formik.values.date}
          readOnly={true}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Montant:</FormLabel>
        <Input
          inputName={"montant"}
          placeholder="10 000$"
          onChange={formik.handleChange}
          value={formik.values.montant}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Raison:</FormLabel>
        <InputTextArea
          inputName={"raison"}
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.raison}
          rows={4}
        />
      </FormControl>
      <FormControl>
        {alertState.show && alertState.error && (
          <AlertError message={alertState.error} />
        )}
        {alertState.show && alertState.success && (
          <AlertSuccess message={alertState.success} />
        )}
      </FormControl>
      <FormControl>
        <SubmitButton>Envoyer</SubmitButton>
      </FormControl>
    </DemandeComptabiliteFormContent>
  );
};

export default DemandeComptabiliteForm;

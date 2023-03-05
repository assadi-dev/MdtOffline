import { useFormik } from "formik";
import React, { useState } from "react";

import {
  dateNowFrenchFormat,
  inputDateTimeFormat,
} from "../../../../utils/dateFormat";
import { useSelector, useDispatch } from "react-redux";
import { editSaisiesAsync } from "../../../../features/Saisie/SaisieAsyncApi";
import useListAgent from "../../../../hooks/useListAgent";
import { getAgentNameById } from "../../../../utils/userData";
import {
  FormBodyContainer,
  FormControl,
  FormLabel,
  SubmitButton,
} from "../Comptabilite.styled";
import Input from "../../../../components/Shared/Input";
import { editDemandeComptabiliteAsync } from "../../../../features/DemandeComptabilite/DemandeComptabiliteAsyncApi";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import AlertError from "../../../../components/Shared/Alert/AlertError";
import AlertSuccess from "../../../../components/Shared/Alert/AlertSuccess";

const EditFormView = ({ demandeData, onClose }) => {
  const dispatch = useDispatch();
  const listAgent = useListAgent();

  const { id, idAgent, raison, montant, date } = demandeData;

  const [alertState, setAlertState] = useState({
    success: "",
    error: "",
    show: false,
  });

  const initialValues = {
    agent: idAgent ? getAgentNameById(listAgent, idAgent) : "",
    date: date ? inputDateTimeFormat(date) : "",
    montant: montant ? montant : "",
    raison: raison ? raison : "",
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
      resetState();
      if (values.montant && values.raison) {
        const payload = {
          id: id,
          data: {
            montant: values.montant,
            raison: values.raison,
          },
        };

        dispatch(editDemandeComptabiliteAsync(payload))
          .unwrap()
          .then(() => {
            setAlertState((current) => ({
              ...current,
              success: "votre demande à bien été mise à jour",
              show: true,
            }));
            formik.handleReset();
            sleep(1000).then(() => {
              resetState();
              onClose();
            });
          })
          .catch((error) => {
            setAlertState((current) => ({
              ...current,
              error: error.message,
              show: true,
            }));
          });
      } else {
        setAlertState((current) => ({
          ...current,
          error: "Tout les champs doivent être remplie",
          show: true,
        }));
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBodyContainer>
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
          <SubmitButton>Mettre à jour</SubmitButton>
        </FormControl>
      </FormBodyContainer>
    </form>
  );
};

export default EditFormView;

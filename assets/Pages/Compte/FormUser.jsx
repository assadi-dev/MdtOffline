import { Formik, useFormik } from "formik";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { editAccount } from "../../redux/actions/Authentication.action";
import { sleep } from "../../utils/timer";
import AlertSuccess from "../../components/Shared/Alert/AlertSuccess";
import Input from "../../components/Shared/Input";
import { CrossIcon } from "../../components/SVG";
import {
  BodyCompte,
  Container,
  CustomAlertError,
  CustomAlertSuccess,
  FormContainer,
  FormMatricule,
  FormRow,
  HeaderContainer,
  InfoAgent,
  Photo,
  ResultMessage,
  SubmitButton,
} from "./Compte.styled";
import Loading from "./Loading";

const FormUser = ({
  idUser,
  idAgent,
  token,
  username,
  matricule,
  telephone,
}) => {
  const dispatch = useDispatch();

  const [step, stepDispatch] = useReducer(stepReducer, {
    status: "",
    message: "",
    error: false,
  });

  const closeAlert = () => {
    return stepDispatch({ type: IDLE, payload: null });
  };

  const formik = useFormik({
    initialValues: {
      username: username,
      matricule: matricule ? matricule : "N/A",
      telephone: telephone,
    },
    onSubmit: (values) => {
      stepDispatch({
        type: SEND,
        payload: { message: "Enregistrement en cours" },
      });
      let data = {
        id: idUser,
        idAgent: idAgent,
        username: values.username,
        matricule: values.matricule,
        telephone: values.telephone,
      };
      dispatch(editAccount(idUser, token, data))
        .then((res) => {
          sleep(3000).then(() => {
            stepDispatch({
              type: FINISH,
              payload: { message: "Modification validé" },
            });
          });
        })
        .catch((err) => {
          let violations = err.response.data.violations;
          let details = err.response.data.detail;

          if (violations) {
            stepDispatch({
              type: FINISH,
              payload: { message: violations[0].message, error: true },
            });
          } else {
            stepDispatch({
              type: FINISH,
              payload: { message: details, error: true },
            });
          }
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormRow>
        {" "}
        <FormContainer>
          <label htmlFor="username">Prénom Nom: </label>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="PRENOM NOM"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </FormContainer>{" "}
        <FormMatricule>
          <label htmlFor="matricule">N° MATRICULE: </label>
          <Input
            id="matricule"
            name="matricule"
            placeholder="N° matricule"
            type="text"
            value={formik.values.matricule}
            onChange={formik.handleChange}
          />
        </FormMatricule>{" "}
      </FormRow>
      <FormRow>
        {" "}
        <FormContainer>
          <label htmlFor="telephone">TELEPHONE: </label>
          <Input
            id="telephone"
            name="telephone"
            placeholder="TELEPHONE"
            type="text"
            value={formik.values.telephone}
            onChange={formik.handleChange}
          />
        </FormContainer>{" "}
        <FormMatricule></FormMatricule>{" "}
      </FormRow>
      {step.status != "sending" && (
        <SubmitButton type="submit">VALIDER</SubmitButton>
      )}
      {step.status == "finish" && (
        <ResultMessage>
          <span
            className={step.error ? "closeError" : "close"}
            onClick={closeAlert}
          >
            <CrossIcon />
          </span>

          {step.error && <CustomAlertError message={step.message} />}
          {!step.error && <CustomAlertSuccess message={step.message} />}
        </ResultMessage>
      )}

      {step.status == "sending" && <Loading message={step.message} />}
    </form>
  );
};

const IDLE = "IDLE";
const SEND = "SEND";
const FINISH = "FINISH ";
const ERROR = "ERROR";

const stepReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case IDLE:
      return { ...state, status: "", error: false, message: "" };
    case SEND:
      return {
        ...state,
        status: "sending",
        message: payload.message,
        error: false,
      };
    case FINISH:
      return {
        ...state,
        status: "finish",
        message: payload.message,
        error: payload.error,
      };
    case ERROR:
      return {
        ...state,
        status: "error",
        message: payload.message,
        error: payload.error,
      };

    default:
      return state;
      break;
  }
};

export default FormUser;

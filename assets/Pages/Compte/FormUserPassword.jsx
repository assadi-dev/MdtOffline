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

const FormUserPassword = ({ idUser }) => {
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
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      stepDispatch({
        type: SEND,
        payload: { message: "Enregistrement en cours" },
      });
      let data = {
        id: idUser,
        password: values.password,
        confirm: values.confirm,
      };
      console.log(data);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormRow>
        {" "}
        <FormContainer>
          <label htmlFor="password">Nouveau mot de passe </label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Nouveau mot de passe "
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </FormContainer>{" "}
      </FormRow>
      <FormRow>
        <FormMatricule>
          <label htmlFor="matricule">Confirmer votre mot de passe: </label>
          <Input
            id="confirm"
            name="confirm"
            placeholder="Confirmer votre mot de passe"
            type="password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
          />
        </FormMatricule>{" "}
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

export default FormUserPassword;

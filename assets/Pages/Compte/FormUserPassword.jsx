import { Formik, useFormik } from "formik";
import React, { useReducer, useRef } from "react";
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
  InputPasswordContainer,
  Photo,
  ResultMessage,
  ShowpasswordToggle,
  SubmitButton,
} from "./Compte.styled";
import Loading from "./Loading";
import { updatePassword } from "./function";
import { useEffect } from "react";

const FormUserPassword = ({ idUser }) => {
  const dispatch = useDispatch();

  const [step, stepDispatch] = useReducer(stepReducer, {
    status: "",
    message: "",
    error: false,
  });

  const inputPassRef = useRef(null);
  const inputConfirmPassRef = useRef(null);

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
      updatePassword(data)
        .then((res) => {
          sleep(1000).then(() => {
            stepDispatch({
              type: FINISH,
              payload: { message: res.message },
            });
          });
        })
        .catch((err) => {
          console.log(err);
          stepDispatch({
            type: FINISH,
            payload: { message: err.message, error: true },
          });
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormRow>
        {" "}
        <FormContainer>
          <label htmlFor="password">Nouveau mot de passe </label>
          <InputPasswordContainer>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Nouveau mot de passe "
              value={formik.values.password}
              onChange={formik.handleChange}
              inputRef={inputPassRef}
            />
            <ShowpasswordToggle
              className="password-icon"
              inputRefElement={inputPassRef}
            />
          </InputPasswordContainer>
        </FormContainer>{" "}
      </FormRow>
      <FormRow>
        <FormMatricule>
          <label htmlFor="matricule">Confirmer votre mot de passe: </label>
          <InputPasswordContainer>
            <Input
              id="confirm"
              name="confirm"
              placeholder="Confirmer votre mot de passe"
              type="password"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              inputRef={inputConfirmPassRef}
            />
            <ShowpasswordToggle
              className="password-icon"
              inputRefElement={inputConfirmPassRef}
            />
          </InputPasswordContainer>
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

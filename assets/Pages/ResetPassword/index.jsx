import React, { useState } from "react";
import {
  ActionResult,
  ErrorSection,
  FormBottomRow,
  FormContainer,
  FormControl,
  FormLabel,
  HeaderTitle,
  IconResult,
  LoaderContainer,
  ResetPasswordBody,
  ResetPasswordContainer,
  ResultSection,
  Spinner,
  SubmitButton,
} from "./ResetPassword.styled";
import { useFormik } from "formik";
import Input from "../../components/Shared/Input";
import { resetpassword } from "./Request";
import { Link, useParams } from "react-router-dom";
import { sleep } from "../../utils/timer";
import {
  CkeckErrorIconOutline,
  CkeckValidateIconOutline,
} from "../../components/SVG/Loader.svg";

const ResetPassword = () => {
  const [state, setState] = useState({
    loading: false,
    result: "",
    step: "form",
    status: "",
  });

  const { token } = useParams();

  const validate = (values) => {
    const errors = {};
    let password = values.password;
    let confirmPassword = values.confirmPassword;
    if (!password) {
      errors.password = "le mot de passe ne doit pas etre vide";
    }
    if (!password) {
      errors.password = "le mot de passe de confirmation ne doit pas etre vide";
    }

    if (password && confirmPassword) {
      if (password != confirmPassword) {
        errors.confirmPassword =
          "le mot de passe est different du mot de passe de confirmation";
      }
    }

    return errors;
  };

  const handleSubmitRequest = async (password) => {
    try {
      const res = await resetpassword(token, password);
      const data = res.data;

      setState((prevState) => ({
        ...prevState,
        loading: false,
        step: "result",
        result: data.message,
        status: "success",
      }));
    } catch (error) {
      let message = error.message;

      if (error.response) {
        message = error.response.data.message;
      }
      setState((prevState) => ({
        ...prevState,
        loading: false,
        step: "result",
        result: message,
        status: "error",
      }));
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      const password = values.password;
      setState((prevState) => ({ ...prevState, loading: true }));
      sleep(3000).then(() => handleSubmitRequest(password));
    },
  });

  return (
    <ResetPasswordContainer>
      <HeaderTitle>
        <p className="title">Réinitialiser mon mot de passe</p>
      </HeaderTitle>
      <ResetPasswordBody>
        {state.loading && (
          <LoaderContainer>
            <Spinner className="circle-loader"></Spinner>
            <p>Traitement en cours</p>
          </LoaderContainer>
        )}
        {!state.loading && state.step == "form" && (
          <FormContainer onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Nouveau mot de passe</FormLabel>
              <Input
                placeholder="Nouveau mot de passe"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                inputBlur={formik.handleBlur}
                type="password"
              />
              <ErrorSection>
                {formik.errors.password && formik.touched.password && (
                  <p className="error">{formik.errors.password}</p>
                )}
              </ErrorSection>
            </FormControl>

            <FormControl>
              <FormLabel>Confirmer votre mot de passe</FormLabel>
              <Input
                placeholder="Confirmer mot de passe"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                inputBlur={formik.handleBlur}
                type="password"
              />
              <ErrorSection>
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <p className="error">{formik.errors.confirmPassword}</p>
                  )}
              </ErrorSection>
            </FormControl>

            <FormBottomRow>
              <SubmitButton type="submit">Valider</SubmitButton>
            </FormBottomRow>
          </FormContainer>
        )}
        {!state.loading && state.step == "result" && (
          <ResultSection>
            <IconResult className="animate-check">
              {state.status == "success" ? (
                <CkeckValidateIconOutline />
              ) : (
                <CkeckErrorIconOutline />
              )}
            </IconResult>

            <p>{state.result}</p>
            <ActionResult>
              <Link to={"/connexion"}>
                <small>Retour à la page de connexion</small>
              </Link>
            </ActionResult>
          </ResultSection>
        )}
      </ResetPasswordBody>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;

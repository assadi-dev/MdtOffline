import React, { useState } from "react";
import {
  ErrorSection,
  FormBottomRow,
  FormContainer,
  FormControl,
  FormLabel,
  HeaderTitle,
  LoaderContainer,
  ResetPasswordBody,
  ResetPasswordContainer,
  Spinner,
  SubmitButton,
} from "./ResetPassword.styled";
import { useFormik } from "formik";
import Input from "../../components/Shared/Input";

const ResetPassword = () => {
  const [state, setState] = useState({
    loading: false,
    result: "",
    step: "form",
  });

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

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
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
          <ResultSection>{state.result}</ResultSection>
        )}
      </ResetPasswordBody>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;

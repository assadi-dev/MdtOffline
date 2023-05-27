import React from "react";
import {
  CloseModal,
  ErrorMessage,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  SubmitButton,
} from "../Connexion.styled";
import { useFormik } from "formik";
import Input from "../../../components/Shared/Input";

const SendUsernameForm = ({ dispatchStep }) => {
  const validate = (values) => {
    const errors = {};
    const username = values.username;

    if (!username) {
      errors.username = "Le Prenom et le nom est obligatoire !";
    }
    if (username) {
      let format = username.split(" ");
      if (format.length <= 1 || format[1] == "") {
        errors.username =
          "Format incorrect veuillez entrer votre Prénom et Nom";
      }
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate,
    onSubmit: (values) => {
      let payload = { username: values.username };
      dispatchStep({ type: "loading-forgotten", payload });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBodyContainer>
        <FormControl>
          <Input
            placeholder="Prénom Nom"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <ErrorMessage>
          {formik.errors && formik.touched.username && (
            <p>{formik.errors.username}</p>
          )}
        </ErrorMessage>
        <FormBottomRow>
          <SubmitButton type="submit">Envoyer la demande</SubmitButton>
        </FormBottomRow>
      </FormBodyContainer>
    </form>
  );
};

export default SendUsernameForm;

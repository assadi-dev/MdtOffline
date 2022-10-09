import { useFormik } from "formik";
import React from "react";
import Input from "../../../components/Shared/Input";
import InputTextArea from "../../../components/Shared/InputTextArea";
import Select from "../../../components/Shared/Select";
import {
  FormBottomRow,
  FormControl,
  FormLabel,
  HeaderRapportIncident,
  RapportIncidentFormContent,
  SubmitButton,
} from "../RapportIncident.styled";
import { typeIncident } from "./dataList";

const RapportIncidentForm = () => {
  const formik = useFormik({
    initialValues: {
      rapport: "",
      typeIncident: "",
      localisationIncident: "",
      agent: "",
    },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <RapportIncidentFormContent onSubmit={formik.handleSubmit}>
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

      <FormControl>
        <FormLabel>Type d'incident</FormLabel>
        <Select
          inputName={"typeIncident"}
          placeholder="Type d'incident"
          onChange={formik.handleChange}
          value={formik.values.typeIncident}
        >
          {typeIncident.map((incident) => (
            <option key={incident.id} value={incident.name}>
              {incident.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Localisation de l'incident</FormLabel>
        <Input
          inputName={"localisationIncident"}
          placeholder="ex: Vinewood Boulevard"
          onChange={formik.handleChange}
          value={formik.values.localisationIncident}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Agent concerné</FormLabel>
        <Select
          inputName={"agent"}
          placeholder="Agent concerné"
          onChange={formik.handleChange}
          value={formik.values.typeIncident}
        ></Select>
      </FormControl>
      <FormBottomRow>
        <FormControl>
          <SubmitButton>Envoyer</SubmitButton>
        </FormControl>
      </FormBottomRow>
    </RapportIncidentFormContent>
  );
};

export default RapportIncidentForm;

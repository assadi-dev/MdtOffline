import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/Shared/Input";
import InputTextArea from "../../../components/Shared/InputTextArea";
import Select from "../../../components/Shared/Select";
import { get_allAgent } from "../../../redux/actions/Agents.action";
import { add_rapportIncident } from "../../../redux/actions/RapportIncident.action";
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
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.AgentsReducer);
  const agent = useSelector((state) => state.AuthenticateReducer);

  const formik = useFormik({
    initialValues: {
      rapport: "",
      typeIncident: "",
      idAgentConcerned: "",
      lieuxIncident: "",
      idAgent: agent.idAgent,
    },
    onSubmit: (values) => {
      let formData = {
        ...values,
        idAgentConcerned: parseInt(values.idAgentConcerned),
        idAgent: agent.idAgent,
      };
      dispatch(add_rapportIncident(formData)).then(() => {
        formik.resetForm();
      });
    },
  });

  useEffect(() => {
    dispatch(get_allAgent());
  }, []);

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
          <option value=""></option>
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
          inputName={"lieuxIncident"}
          placeholder="ex: Vinewood Boulevard"
          onChange={formik.handleChange}
          value={formik.values.lieuxIncident}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Agent concerné</FormLabel>
        <Select
          inputName={"idAgentConcerned"}
          placeholder="Agent concerné"
          onChange={formik.handleChange}
          value={formik.values.idAgentConcerned}
        >
          <option value=""></option>
          {agents.collections.length > 0 &&
            agents.collections.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.matricule ? agent.matricule : "N/A"}-{agent.name}
              </option>
            ))}
        </Select>
      </FormControl>
      <FormBottomRow>
        <FormControl>
          <SubmitButton style={{ margin: "auto" }}>Envoyer</SubmitButton>
        </FormControl>
      </FormBottomRow>
    </RapportIncidentFormContent>
  );
};

export default RapportIncidentForm;

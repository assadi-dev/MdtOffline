import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addRapportIncidentAsync } from "../../../features/RapportIncident/RapportIncidentAsyncApi";
import { getAllAgentAsync } from "../../../features/Agents/AgentAsyncApi";
import { SpinnerCircularFixed } from "spinners-react";
import AlertSuccess from "../../../components/Shared/Alert/AlertSuccess";
import SuccsessAlert from "./SuccsessAlert";

const RapportIncidentForm = () => {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.AgentsReducer);
  const agent = useSelector((state) => state.AuthenticateReducer);

  const [process, setProcess] = useState(false);

  const textButton = process ? "Envoie en cours..." : "Envoyer";

  const [showAlert, setShowAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      rapport: "",
      typeIncident: "",
      idAgentConcerned: "",
      lieuxIncident: "",
      idAgent: agent.idAgent,
    },

    onSubmit: (values) => {
      setProcess((current) => (current = !current));

      let formData = {
        ...values,
        idAgentConcerned: parseInt(values.idAgentConcerned),
        idAgent: agent.idAgent,
      };
      dispatch(addRapportIncidentAsync({ data: formData }))
        .unwrap()
        .then(() => {
          setShowAlert(true);
          formik.resetForm();
        })
        .finally(() => setProcess((current) => (current = !current)));
    },
  });

  useEffect(() => {
    dispatch(getAllAgentAsync());
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

      <FormControl>
        {showAlert && <SuccsessAlert setShowAlert={setShowAlert} />}
      </FormControl>
      <FormBottomRow>
        <FormControl>
          <SubmitButton type="submit" style={{ margin: "auto" }}>
            {textButton}
            {process ? (
              <SpinnerCircularFixed
                size={18}
                color="#fff"
                secondaryColor="#FFFFFF50"
                speed={250}
                style={{ marginLeft: 8 }}
              />
            ) : (
              ""
            )}
          </SubmitButton>
        </FormControl>
      </FormBottomRow>
    </RapportIncidentFormContent>
  );
};

export default RapportIncidentForm;

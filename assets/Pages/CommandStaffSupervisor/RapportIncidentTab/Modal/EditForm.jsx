import React from "react";
import useFecthDataWithParams from "../../../../hooks/useFecthDataWithParams";
import { useDispatch, useSelector } from "react-redux";
import { editRapportIncidentAsync } from "../../../../features/RapportIncident/RapportIncidentAsyncApi";
import { useFormik } from "formik";
import {
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  SubmitButton,
} from "../RapportIncident.styled";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import Select from "../../../../components/Shared/Select";
import { typeIncidents } from "../../../../Data/TypesIncidents";
import Input from "../../../../components/Shared/Input";

const EditForm = ({ rapportData, onClose }) => {
  const { collections, filtered, status } = useSelector(
    (state) => state.AgentsReducer
  );
  const agent = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const {
    id,
    rapport,
    typeIncident,
    idAgentConcerned,
    lieuxIncident,
    idAgent,
  } = rapportData;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      rapport: rapport ? rapport : "",
      typeIncident: typeIncident ? typeIncident : "",
      idAgentConcerned: idAgentConcerned ? idAgentConcerned : "",
      lieuxIncident: lieuxIncident ? lieuxIncident : "",
      idAgent: idAgent ? idAgent : "",
    },
    onSubmit: (values) => {
      const findAgent = listOfRookies.find(
        (rookie) => rookie.id == values.deputyTrainyConcerned
      );

      let rapportIncidentData = {
        ...values,
        idAgentConcerned: parseInt(values.idAgentConcerned),
      };
      const payload = { id: id, data: rapportIncidentData };

      dispatch(editRapportIncidentAsync(payload))
        .unwrap()
        .then(() => {
          onClose();
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBodyContainer>
        <FormControl>
          <FormLabel>Rapport</FormLabel>
          <InputTextArea
            rows={5}
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
            {typeIncidents.map((incident) => (
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
            {collections.length > 0 &&
              collections.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.matricule ? agent.matricule : "N/A"}-{agent.name}
                </option>
              ))}
          </Select>
        </FormControl>
        <FormBottomRow>
          <SubmitButton>Modifier</SubmitButton>
        </FormBottomRow>
      </FormBodyContainer>
    </form>
  );
};

export default EditForm;

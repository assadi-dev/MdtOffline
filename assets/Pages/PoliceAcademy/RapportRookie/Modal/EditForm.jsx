import { useFormik } from "formik";
import React, { useEffect } from "react";
import { getAgentNameById } from "../../../../utils/userData";
import {
  dateFrenchFormat,
  inputDateTimeFormat,
} from "../../../../utils/dateFormat";
import {
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  InputDateTime,
  SubmitButton,
} from "../RapportRookie.styled";
import Select from "../../../../components/Shared/Select";
import useFecthDataWithParams from "../../../../hooks/useFecthDataWithParams";
import { useDispatch, useSelector } from "react-redux";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import Input from "../../../../components/Shared/Input";
import { editRapportRookieAsync } from "../../../../features/RapportRookie/RapportRookieAsyncApi";

const EditForm = ({ rapportData, onClose }) => {
  const { collections, filtered, status } = useSelector(
    (state) => state.AgentsReducer
  );
  const listOfRookies = useFecthDataWithParams("/agents", {
    "grade.nom": "Rookie",
  }).data;

  const agent = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(deputyTrainyConcerned);
  }, []);

  const {
    id,
    deputyTrainyConcerned,
    datePatrouille,
    typePatrouille,
    rapport,
    idAgent,
  } = rapportData;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      deputyTrainyConcerned: deputyTrainyConcerned ? deputyTrainyConcerned : "",
      datePatrouille: datePatrouille ? inputDateTimeFormat(datePatrouille) : "",
      typePatrouille: typePatrouille ? typePatrouille : "",
      rapport: rapport ? rapport : "",
      idAgent: idAgent ? idAgent : "",
    },
    onSubmit: (values) => {
      const findAgent = listOfRookies.find(
        (rookie) => rookie.id == values.deputyTrainyConcerned
      );

      let sendDiscordData = {
        deputyTrainyConcerned: `${
          findAgent.matricule ? findAgent.matricule : "N/A"
        }-${findAgent.name}`,
        datePatrouille: dateFrenchFormat(values.datePatrouille),
        typePatrouille: values.typePatrouille,
        rapport: values.rapport,
        agent: getAgentNameById(collections, agent.idAgent),
        idAgent: agent.idAgent,
      };

      let rapportDeputyTrainy = { ...values, idAgent: agent.idAgent };
      const payload = { id: id, data: rapportDeputyTrainy };

      dispatch(editRapportRookieAsync(payload))
        .unwrap()
        .then(() => {
          onClose();
          //sendDeputyTrainy(sendDiscordData);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBodyContainer>
        <FormControl>
          <FormLabel>Rookie / Deputy Trainee concerné</FormLabel>
          {
            <Select
              inputName={"deputyTrainyConcerned"}
              placeholder="Rookie/Deputy Trainy Concerné"
              onChange={formik.handleChange}
              defaultValue={deputyTrainyConcerned}
              value={formik.values.deputyTrainyConcerned}
            >
              <option></option>
              {listOfRookies.length > 0 &&
                listOfRookies.map((agent) => (
                  <option value={agent.id} key={agent.id}>
                    {agent.matricule ? agent.matricule : "N/A"}-{agent.name}
                  </option>
                ))}
            </Select>
          }
        </FormControl>
        <FormControl>
          <FormLabel>Date de patrouille</FormLabel>
          <InputDateTime
            inputName={"datePatrouille"}
            placeholder="Date de patrouille"
            onChange={formik.handleChange}
            value={formik.values.datePatrouille}
            type={"datetime-local"}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Type de patrouille</FormLabel>
          <Input
            inputName={"typePatrouille"}
            placeholder="Ex:Patrouille classique"
            onChange={formik.handleChange}
            value={formik.values.typePatrouille}
          />
        </FormControl>
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

        <FormBottomRow>
          <SubmitButton>Modifier</SubmitButton>
        </FormBottomRow>
      </FormBodyContainer>
    </form>
  );
};

export default EditForm;

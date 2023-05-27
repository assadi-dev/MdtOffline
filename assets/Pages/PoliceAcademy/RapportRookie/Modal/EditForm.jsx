import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
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
import { SpinnerCircularFixed } from "spinners-react";

const EditForm = ({ rapportData, onClose }) => {
  const { collections, filtered, status } = useSelector(
    (state) => state.AgentsReducer
  );
  const listOfRookies = useFecthDataWithParams("/agents", {
    "grade.nom": "Rookie",
  }).data;

  const agent = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const [process, setProcess] = useState(false);

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
      setProcess((current) => (current = !current));

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
        })
        .finally(() => {
          setProcess((current) => (current = !current));
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
          <SubmitButton type="submit">
            Modifier
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
            )}{" "}
          </SubmitButton>
        </FormBottomRow>
      </FormBodyContainer>
    </form>
  );
};

export default EditForm;

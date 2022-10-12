import { useFormik } from "formik";
import React, { useMemo } from "react";
import Input from "../../../../components/Shared/Input";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import Select from "../../../../components/Shared/Select";
import {
  CloseModal,
  FormBodyContainer,
  FormBottomRow,
  FormContainer,
  FormControl,
  FormLabel,
  HeaderModal,
  InputDateTime,
  SubmitButton,
} from "../../Document.styled";
import { useDispatch, useSelector } from "react-redux";
import { sendDeputyTrainy } from "../../SendDiscord/DeputyTrainy";
import { dateFrenchFormat } from "../../../../utils/dateFormat";
import { getAgentNameById } from "../../../../utils/userData";
import { add_rapportDeputyTrainy } from "../../../../redux/actions/RapporDeputyTrainy.action";

const RapportDeputyTrainyView = ({ onClose }) => {
  const { isReady, collections } = useSelector((state) => state.AgentsReducer);
  const listOfRookies = useMemo(() => {
    if (isReady) {
      return collections;
    }
    return [];
  }, [isReady]);

  const agent = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      deputyTrainyConcerned: "",
      datePatrouille: new Date(),
      typePatrouille: "",
      rapport: "",
      idAgent: agent.id,
    },
    onSubmit: (values) => {
      let findAgent = listOfRookies.find(
        (rookie) => rookie.id == values.deputyTrainyConcerned
      );

      let sendDiscordData = {
        deputyTrainyConcerned: findAgent.name,
        datePatrouille: dateFrenchFormat(values.datePatrouille),
        typePatrouille: values.typePatrouille,
        rapport: values.rapport,
        agent: getAgentNameById(collections, agent.id),
        idAgent: agent.id,
      };

      let rapportDeputyTrainy = { ...values, idAgent: agent.id };

      dispatch(add_rapportDeputyTrainy(rapportDeputyTrainy)).then(() => {
        formik.resetForm();
        onClose();
        sendDeputyTrainy(sendDiscordData);
      });
    },
  });

  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit}>
        <HeaderModal>
          <h2 className="formTitle">Creer un Rapport Deputy Trainy</h2>

          <CloseModal onClick={() => onClose()} />
        </HeaderModal>

        <FormBodyContainer>
          <FormControl>
            <FormLabel>Deputy Trainy concerné</FormLabel>
            <Select
              inputName={"deputyTrainyConcerned"}
              placeholder="Deputy Trainy Concerné"
              onChange={formik.handleChange}
              value={formik.values.deputyTrainyConcerned}
            >
              <option></option>
              {listOfRookies.length > 0 &&
                listOfRookies.map((agent) => (
                  <option value={agent.id} key={agent.id}>
                    {agent.name}
                  </option>
                ))}
            </Select>
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
            <SubmitButton>Envoyer</SubmitButton>
          </FormBottomRow>
        </FormBodyContainer>
      </FormContainer>
    </>
  );
};

RapportDeputyTrainyView.defaultProps = {
  listOfRookies: [],
};

export default RapportDeputyTrainyView;
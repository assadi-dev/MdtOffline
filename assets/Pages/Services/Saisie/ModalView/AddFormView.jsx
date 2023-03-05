import { useFormik } from "formik";
import React from "react";
import {
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  SubmitButton,
} from "../../Service.styled";
import Input from "../../../../components/Shared/Input";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import Select from "../../../../components/Shared/Select";
import { dateNowFrenchFormat } from "../../../../utils/dateFormat";
import { useSelector, useDispatch } from "react-redux";
import { addSaisiesAsync } from "../../../../features/Saisie/SaisieAsyncApi";
import { sendSaisieToDiscord } from "./sendDiscord";

const AddFormView = ({ saisieData, onClose }) => {
  const dispatch = useDispatch();

  const agent = useSelector((state) => state.AuthenticateReducer);
  let initialValues = {
    agent: `${agent.matricule}-${agent.username}`,
    depositAt: dateNowFrenchFormat(),
    poste: "Mission Row",
    depot: "",
  };
  if (saisieData != undefined) {
    const { id, agent, depotAt, poste, depot } = saisieData;
    initialValues = {
      agent: agent ? agent : "",
      depositAt: depotAt ? depotAt : "",
      poste: poste ? poste : "",
      depot: depot ? depot : "",
    };
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      const payload = {
        idAgent: agent.id,
        depot: values.depot,
        poste: values.poste,
      };

      dispatch(addSaisiesAsync(payload))
        .unwrap()
        .then((res) => {
          const payload = {
            agent: values.agent,
            depot: values.depot,
            poste: values.poste,
          };
          sendSaisieToDiscord(payload);
          onClose();
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBodyContainer>
        <FormControl>
          <FormLabel>Agent</FormLabel>
          <Input
            inputName={"agent"}
            placeholder="Ex: 00-Jhon Doe"
            onChange={formik.handleChange}
            value={formik.values.agent}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Date et heure:</FormLabel>
          <Input
            inputName={"depositAt"}
            placeholder="04-03-2023 17:15"
            onChange={formik.handleChange}
            value={formik.values.depositAt}
            readOnly={true}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Poste :</FormLabel>
          <Select
            onChange={formik.handleChange}
            inputName={"poste"}
            value={formik.values.poste}
          >
            <option value={"Mission Row"}>Mission Row</option>
            <option value={"Vespucci"}>Vespucci</option>
            <option value={"Paleto Bay"}>Paleto Bay</option>
            <option value={"Sandy Shores"}>Sandy Shores</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Objets saisie:</FormLabel>
          <InputTextArea
            rows={3}
            placeholder="depot"
            name="depot"
            value={formik.values.depot}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormBottomRow>
          <SubmitButton type="submit">Ajouter</SubmitButton>
        </FormBottomRow>
      </FormBodyContainer>
    </form>
  );
};

export default AddFormView;

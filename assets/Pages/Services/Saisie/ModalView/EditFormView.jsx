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
import {
  dateNowFrenchFormat,
  inputDateTimeFormat,
} from "../../../../utils/dateFormat";
import { useSelector, useDispatch } from "react-redux";
import { editSaisiesAsync } from "../../../../features/Saisie/SaisieAsyncApi";
import useListAgent from "../../../../hooks/useListAgent";
import { getAgentNameById } from "../../../../utils/userData";

const EditFormView = ({ saisieData, onClose }) => {
  const dispatch = useDispatch();

  const listAgent = useListAgent();

  const agent = useSelector((state) => state.AuthenticateReducer);
  let initialValues = {
    id: "",
    agent: `${agent.matricule}-${agent.username}`,
    depositAt: dateNowFrenchFormat(),
    poste: "Mission Row",
    depot: "",
  };
  if (saisieData != undefined) {
    const { id, idAgent, depositAt, poste, depot } = saisieData;
    initialValues = {
      id: id ? id : "",
      agent: idAgent ? getAgentNameById(listAgent, idAgent) : "",
      depositAt: depositAt ? inputDateTimeFormat(depositAt) : "",
      poste: poste ? poste : "",
      depot: depot ? depot : "",
    };
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      const payload = {
        id: values.id,
        data: { depot: values.depot, poste: values.poste },
      };
      dispatch(editSaisiesAsync(payload))
        .unwrap()
        .then((res) => {
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
            readOnly={true}
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
          <FormLabel>Dépôt:</FormLabel>
          <InputTextArea
            rows={3}
            placeholder="depot"
            name="depot"
            value={formik.values.depot}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormBottomRow>
          <SubmitButton type="submit">Modifier</SubmitButton>
        </FormBottomRow>
      </FormBodyContainer>
    </form>
  );
};

export default EditFormView;

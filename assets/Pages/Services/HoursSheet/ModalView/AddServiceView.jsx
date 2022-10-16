import React from "react";
import {
  CloseModal,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  HeaderModal,
  InputDateTime,
  ModalViewContainer,
  SubmitButton,
} from "../HoursSheet.styled";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useListAgent from "../../../../hooks/useListAgent";
import { getDuration, getWeekNumber } from "../../../../utils/dateFormat";
import { add_priseServices } from "../../../../redux/actions/PriseDeService.action";

const AddServiceView = ({ onClose }) => {
  const agent = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      week: "",
      start: "",
      end: "",
      idAgent: 0,
    },
    onSubmit: (values) => {
      let servicesValues = {
        ...values,
        week: getWeekNumber(values.start).toString(),
        duration: getDuration(values.start, values.end),
        idAgent: agent.idAgent,
        agent: `/api/agents/${agent.idAgent}`,
      };

      dispatch(add_priseServices(servicesValues)).then(() => {
        formik.resetForm();
        onClose();
      });
    },
  });

  return (
    <ModalViewContainer onSubmit={formik.handleSubmit}>
      <HeaderModal>
        <h2 className="formTitle">Ajouter un service</h2>
        <CloseModal onClick={() => onClose()} />
      </HeaderModal>
      <FormBodyContainer>
        <FormControl>
          <FormLabel>Prise de service</FormLabel>
          <InputDateTime
            inputName={"start"}
            placeholder="Prise de service"
            onChange={formik.handleChange}
            value={formik.values.start}
            type={"datetime-local"}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Fin de service</FormLabel>
          <InputDateTime
            inputName={"end"}
            placeholder="Fin de service"
            onChange={formik.handleChange}
            value={formik.values.end}
            type={"datetime-local"}
          />
        </FormControl>

        <FormBottomRow>
          <FormControl>
            <SubmitButton type="submit" style={{ margin: "auto" }}>
              Ajouter
            </SubmitButton>
          </FormControl>
        </FormBottomRow>
      </FormBodyContainer>
    </ModalViewContainer>
  );
};

export default AddServiceView;

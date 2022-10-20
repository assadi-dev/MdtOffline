import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_singleAgent } from "../../../../redux/actions/Agents.action";
import {
  CloseModal,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  HeaderModal,
  ModalViewContainer,
  SubmitButton,
} from "../Effectifs.styled";
import { useFormik } from "formik";
import Input from "../../../../components/Shared/Input";
import useFecthData from "../../../../hooks/useFecthData";
import Select from "../../../../components/Shared/Select";

const EditView = ({ agentId, onClose }) => {
  const dispatch = useDispatch();
  const agentSelector = useSelector((state) => state.AgentsReducer);
  const listGrades = useFecthData("/grades");

  useEffect(() => {
    agentId && dispatch(get_singleAgent(agentId));
  }, [agentId]);

  const { photo, name, matricule, grade, telephone, createdAt, updatedAt } =
    agentSelector.selected;

  const handleChange = () => {};

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: name ? name : "",
      matricule: matricule ? matricule : "",
      grade: grade ? grade : "",
      telephone: telephone ? telephone : "",
    },
    onSubmit: (values) => {
      let agentsValues = {
        ...values,
      };
      formik.resetForm();
      onClose();
      /*     dispatch(add_priseServices(servicesValues)).then(() => {
                formik.resetForm();
                onClose();
              }); */
    },
  });

  return (
    <ModalViewContainer onSubmit={formik.handleSubmit}>
      <HeaderModal>
        <h2 className="formTitle"> Agent: {name}</h2>
        <CloseModal onClick={() => onClose()} />
      </HeaderModal>

      <FormBodyContainer>
        <FormControl>
          <FormLabel>Identité</FormLabel>
          <Input
            inputName={"name"}
            placeholder="Prénom Nom"
            inputValue={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Grade</FormLabel>
          <Select
            inputName={"grade"}
            placeholder="Grade: Rookie"
            inputValue={formik.values.grade}
            onChange={formik.handleChange}
          >
            {<option>Selectionnez un grade</option>}
            {listGrades.data.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.nom}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Téléphone</FormLabel>
          <Input
            inputName={"telephone"}
            placeholder="Téléphone : 555-123456"
            inputValue={formik.values.telephone}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormBottomRow>
          <FormControl>
            <SubmitButton type="submit" style={{ margin: "auto" }}>
              Mettre à jour
            </SubmitButton>
          </FormControl>
        </FormBottomRow>
      </FormBodyContainer>
    </ModalViewContainer>
  );
};

export default EditView;

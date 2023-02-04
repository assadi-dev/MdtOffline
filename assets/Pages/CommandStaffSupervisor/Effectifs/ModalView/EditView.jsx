import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  edit_agent,
  get_singleAgent,
} from "../../../../redux/actions/Agents.action";
import {
  CloseModal,
  ColEnd,
  ColStart,
  ErrorCustomAlert,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  HeaderModal,
  ModalViewContainer,
  PhotoAgent,
  PhotoAgentContainer,
  RowInput,
  SubmitButton,
} from "../Effectifs.styled";
import { useFormik } from "formik";
import Input from "../../../../components/Shared/Input";
import useFecthData from "../../../../hooks/useFecthData";
import Select from "../../../../components/Shared/Select";
import {
  editAgentAsync,
  getOneAgentAsync,
} from "../../../../features/Agents/AgentAsyncApi";
import { isEmpty } from "../../../../utils/userData";

const EditView = ({ agentId, onClose }) => {
  const dispatch = useDispatch();
  const agentSelector = useSelector((state) => state.AgentsReducer);
  const listGrades = useSelector((state) => state.GradesReducer);
  const [requestState, setRequestState] = useState({ success: "", error: "" });

  useEffect(() => {
    const promise = agentId && dispatch(getOneAgentAsync(agentId));
    return () => {
      agentId && promise.abort();
    };
  }, [agentId]);

  const { photo, name, matricule, grade, telephone, createdAt, updatedAt } =
    agentSelector.selected;

  const handleChange = () => {};

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: name ? name : "",
      matricule: matricule ? matricule : "",
      grade: grade ? grade.id : "",
      telephone: telephone ? telephone : "",
    },
    onSubmit: (values) => {
      let agentsValues = {
        ...values,
        grade: `api/grades/${values.grade}`,
      };

      const payload = { id: agentId, data: agentsValues };

      dispatch(editAgentAsync(payload))
        .unwrap()
        .then((res) => {
          formik.resetForm();
          setRequestState({ success: "", error: "" });

          onClose();
        })
        .catch((error) => {
          let message = error.message;
          setRequestState({ success: "", error: message });
        });
    },
  });

  return (
    <ModalViewContainer onSubmit={formik.handleSubmit}>
      <HeaderModal>
        <h2 className="formTitle">
          {" "}
          Agent {matricule ? matricule : "N/A"}-{name}
        </h2>
        <CloseModal onClick={() => onClose()} />
      </HeaderModal>

      <FormBodyContainer>
        <RowInput>
          <ColStart>
            <FormControl>
              <FormLabel>Matricule</FormLabel>
              <Input
                inputName={"matricule"}
                placeholder="Matricule Ex: 92"
                inputValue={formik.values.matricule}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Identité</FormLabel>
              <Input
                inputName={"name"}
                placeholder="Prénom Nom"
                inputValue={formik.values.name}
                onChange={formik.handleChange}
                disabled={true}
              />
            </FormControl>
          </ColStart>
          <ColEnd>
            <PhotoAgentContainer>
              <PhotoAgent src={photo}></PhotoAgent>
            </PhotoAgentContainer>
          </ColEnd>
        </RowInput>
        <FormControl>
          <FormLabel>Grade</FormLabel>
          <Select
            inputName={"grade"}
            placeholder="Grade: Rookie"
            inputValue={formik.values.grade}
            onChange={formik.handleChange}
          >
            {listGrades.collections.map((grade) => (
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
            {requestState.error && (
              <ErrorCustomAlert message={requestState.error} />
            )}
          </FormControl>

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

import React, { useState, useEffect } from "react";
import Input from "../../../../components/Shared/Input";
import {
  CloseModal,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  HeaderModal,
  ModalViewContainer,
  SubmitButton,
} from "../Grade.styled";
import { useFormik } from "formik";
import { sleep } from "../../../../utils/timer";
import { useDispatch } from "react-redux";
import { add_grade } from "../../../../redux/actions/Grades.action";
import { addGradeAsync } from "../../../../features/Grades/GradeAsyncApi";

const AddModal = ({ gradeData, onClose }) => {
  const { id, nom, rang, categorie } = gradeData;
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();

  const handleChangeToUpperCase = (e) => {
    let value = e.target.value.toUpperCase();
    formik.setFieldValue("categorie", value);
  };

  const formik = useFormik({
    initialValues: {
      nom: "",
      categorie: "",
      rang: "",
    },
    onSubmit: (values) => {
      let data = {
        ...values,
        nom: values.nom,
        categorie: values.categorie,
        rang: values.rang.toString(),
      };

      dispatch(addGradeAsync(data)).then(() => {
        onClose();
      });
    },
  });

  return (
    <>
      <ModalViewContainer onSubmit={formik.handleSubmit}>
        <HeaderModal>
          {" "}
          <h2 className="formTitle">{`Ajouter une grade`}</h2>
          <CloseModal onClick={() => onClose()} />
        </HeaderModal>

        {
          <FormBodyContainer>
            <FormControl>
              <Input
                required
                inputName={"nom"}
                onChange={formik.handleChange}
                value={formik.values.nom}
                placeholder="Nom"
              />
            </FormControl>
            <FormControl>
              <Input
                required
                inputName={"categorie"}
                onChange={handleChangeToUpperCase}
                value={formik.values.categorie}
                placeholder="Categorie  ex: COMMAND STAFF ..."
              />
            </FormControl>
            <FormControl>
              <Input
                required
                inputName={"rang"}
                onChange={formik.handleChange}
                value={formik.values.rang}
                placeholder="Rang ex: 1,2,3"
                type="number"
                min="1"
              />
            </FormControl>
          </FormBodyContainer>
        }
        <FormBottomRow>
          <SubmitButton>Ajouter</SubmitButton>
        </FormBottomRow>
      </ModalViewContainer>
    </>
  );
};

export default AddModal;

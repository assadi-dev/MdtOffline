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
import { edit_grades } from "../../../../redux/actions/Grades.action";
import { editGradeAsync } from "../../../../features/Grades/GradeAsyncApi";

const EditModal = ({ gradeData, onClose }) => {
  const { id, nom, rang, categorie } = gradeData;
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: id,
      nom: nom,
      categorie: categorie,
      rang: rang,
    },
    onSubmit: (values) => {
      let data = {
        ...values,
        id: values.id,
        nom: values.nom,
        categorie: values.categorie,
        rang: values.rang.toString(),
      };
      dispatch(editGradeAsync({ id, data })).then(() => {
        onClose();
      });
    },
  });

  return (
    <>
      <ModalViewContainer onSubmit={formik.handleSubmit}>
        <HeaderModal>
          {" "}
          <h2 className="formTitle">{`${nom}`}</h2>
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
                onChange={formik.handleChange}
                value={formik.values.categorie}
                placeholder="Categorie"
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
          <SubmitButton>Mettre à jour</SubmitButton>
        </FormBottomRow>
      </ModalViewContainer>
    </>
  );
};

export default EditModal;

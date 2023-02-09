import React, { useEffect, useMemo, useState } from "react";
import {
  ActionRapportRookietView,
  CloseModal,
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  HeadTitleView,
  InputDateTime,
  SubmitButton,
} from "../RapportRookie.styled";
import Select from "../../../../components/Shared/Select";
import Input from "../../../../components/Shared/Input";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import { getAllRookieAsync } from "../../../../features/Agents/AgentAsyncApi";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import useFecthDataWithParams from "../../../../hooks/useFecthDataWithParams";
import useFecthData from "../../../../hooks/useFecthData";
import { getOneRapportRookieAsync } from "../../../../features/RapportRookie/RapportRookieAsyncApi";
import EditForm from "./EditForm";

const EditRapportRokie = ({ closeModal, id }) => {
  const rapportData = useFecthData(`/rapport_deputy_trainees/${id}`);

  return (
    <>
      <ActionRapportRookietView>
        <HeadTitleView>
          <h2 className="titleView">
            Modifier le Rapport Rookie / Deputy Trainee
          </h2>
          <CloseModal className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        {<EditForm rapportData={rapportData.data} onClose={closeModal} />}
      </ActionRapportRookietView>
    </>
  );
};

export default EditRapportRokie;

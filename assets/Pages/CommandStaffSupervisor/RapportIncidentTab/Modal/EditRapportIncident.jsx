import React from "react";
import {
  ActionRapportIncidenttView,
  CloseModal,
  HeadTitleView,
} from "../RapportIncident.styled";
import useFecthData from "../../../../hooks/useFecthData";
import EditForm from "./EditForm";

const EditRapportIncident = ({ id, closeModal }) => {
  const rapportData = useFecthData(`/rapport_incidents/${id}`);
  return (
    <>
      <ActionRapportIncidenttView>
        <HeadTitleView>
          <h2 className="titleView">Modifier le Rapport Incident</h2>
          <CloseModal className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        {<EditForm rapportData={rapportData.data} onClose={closeModal} />}
      </ActionRapportIncidenttView>
    </>
  );
};

export default EditRapportIncident;

import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../../Shared/Modal";
import {
  HandsCuffsOutline,
  JusticeHamerOutline,
  LockOutline,
  MailConvocIcon,
  PrisonIcon,
  UserLicenceOutline,
} from "../../../SVG";
import CivilSelectedCard from "./CivilSelectedCard";
import AvertissementView from "./ModalView/AvertissementView";
import DossierArrestation from "./ModalView/DossierArrestation";
import ListItemAvertissement from "./ListItemViews/ListItemAvertissement";
import { HeadTitleView, View } from "./ModalView/ModalView.styled";
import RapportArrestation from "./ModalView/RapportArrestation";
import TrafficView from "./ModalView/TrafficView";
import ModalReducer, { TOGGLE_MODAL } from "./Reducer/ModalReducer";

import {
  AvertissementCard,
  RowFirst,
  TraffiCard,
  Wrapper,
  CivilCard,
  CivilPhoto,
  CivilInfo,
  RowSecond,
  HeaderSelect,
  IconButtonTop,
  RowDiv,
  UploadCivilPhotoBtn,
  PhotoContainer,
} from "./Selected.styled";
import ListItemTraffic from "./ListItemViews/ListItemTraffic";
import ListItemDossierArrestaion from "./ListItemViews/ListItemDossierArrestaion";
import ListItemRapportArrestation from "./ListItemViews/ListItemRapportArrestation";
import { useDispatch, useSelector } from "react-redux";
import { getOneCivil } from "../../../../redux/actions/Civil.action";
import ConvocationView from "./ModalView/ConvocationView";
import CelluleView from "./ModalView/CelluleView";

const CivilSelected = () => {
  const [modalStae, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
    view: "",
  });

  const closeModal = () => {
    dispatch({ type: TOGGLE_MODAL, payload: "" });
  };
  const location = useLocation();
  const { name, id } = location.state;

  const [loading, setLoading] = useState(true);
  const dispatchCivilData = useDispatch();
  const civilSelectore = useSelector((state) => state.CivilReducer);
  const token = useSelector((state) => state.AuthenticateReducer.token);
  const [file, setFile] = useState({
    file: "",
    preview: "",
    size: 0,
    type: "",
  });

  const handleLoadFile = (e) => {
    let file = e.target.files[0];

    let blob = URL.createObjectURL(file);

    setFile((prevState) => ({
      ...prevState,
      file: file,
      size: file.size,
      type: file.type,
      preview: blob,
    }));
  };

  const handleSubmitPhoto = () => {
    setFile((prevState) => ({
      ...prevState,
      file: "",
      size: "",
      type: 0,
      preview: "",
    }));
  };

  useEffect(() => {
    {
      token && dispatchCivilData(getOneCivil(id, token));
    }
  }, [id, token]);

  const civilData = useMemo(() => {
    if (civilSelectore.selected) {
      return civilSelectore.selected;
    }

    return [];
  }, [civilSelectore.selected, id]);

  //Effectue le rendue en fonction du la vue reçu en parametres
  const Render = ({ view }) => {
    switch (view) {
      case "avertissement":
        return <AvertissementView idCivil={id} onClose={closeModal} />;
      case "traffic":
        return <TrafficView idCivil={id} onClose={closeModal} />;
      case "rapport-d-arrestation":
        return <RapportArrestation idCivil={id} onClose={closeModal} />;
      case "dossier-d-arrestation":
        return <DossierArrestation idCivil={id} onClose={closeModal} />;
      case "convocation":
        return (
          <ConvocationView
            idCivil={id}
            onClose={closeModal}
            listConvocation={civilData.convocation}
          />
        );
      case "cellule":
        return (
          <CelluleView
            idCivil={id}
            onClose={closeModal}
            listCellule={civilData.cellule}
          />
        );
      default:
        throw Error("Aucun rendu attribuée à cette vue");
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <HeaderSelect>
          <IconButtonTop
            onClick={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: "convocation",
              })
            }
            title="convocation"
          >
            <MailConvocIcon />
          </IconButtonTop>
          <IconButtonTop title="Prison">
            <LockOutline />
          </IconButtonTop>
          <IconButtonTop title="Permis">
            <UserLicenceOutline />
          </IconButtonTop>
          <h2 className="CivilTitle">{location.state ? name : "N/A"}</h2>
          <IconButtonTop title={"Bracelet"}>
            <HandsCuffsOutline />
          </IconButtonTop>
          <IconButtonTop title={"Mandat"}>
            <JusticeHamerOutline />
          </IconButtonTop>
          <IconButtonTop
            onClick={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: "cellule",
              })
            }
            title={"Cellule"}
          >
            <PrisonIcon />
          </IconButtonTop>
        </HeaderSelect>

        <RowFirst>
          <CivilCard>
            <RowDiv>
              <PhotoContainer>
                <CivilPhoto
                  htmlFor={"photo"}
                  src={file.preview ? file.preview : civilData.photo}
                >
                  <input
                    id="photo"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleLoadFile}
                  />
                </CivilPhoto>
                {file.preview && (
                  <UploadCivilPhotoBtn
                    type="button"
                    onClick={handleSubmitPhoto}
                  >
                    Valider
                  </UploadCivilPhotoBtn>
                )}
              </PhotoContainer>

              <CivilInfo>
                <p>
                  <span className="personalDetail">NE(E) : </span>{" "}
                  {civilData ? civilData.nom : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">ADRESSE : </span>{" "}
                  {civilData ? civilData.prenom : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">TELEPHONE : </span>{" "}
                  {civilData ? civilData.telephone : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">APPARTENANCE : </span>{" "}
                  {civilData ? civilData.affiliation : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">EMPLOIE : </span>{" "}
                  {civilData ? civilData.emploie : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">CHEVEUX : </span>{" "}
                  {civilData ? civilData.hairColor : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">NATIONALITÉ : </span>{" "}
                  {civilData ? civilData.nationalite : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">SEXE : </span>{" "}
                  {civilData ? civilData.sexe : "N/A"}
                </p>
              </CivilInfo>
            </RowDiv>
          </CivilCard>

          <CivilSelectedCard
            openModal={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: "avertissement",
              })
            }
            title="AVERTISSEMENT"
          >
            {civilData.avertissements
              ? civilData.avertissements.map((avertissement) => (
                  <ListItemAvertissement
                    key={avertissement.id}
                    numero={avertissement.id}
                    comment={avertissement.comments}
                    agent={avertissement.agent}
                    date={avertissement.createdAt}
                  />
                ))
              : null}
          </CivilSelectedCard>

          <CivilSelectedCard
            title="TRAFFIC"
            openModal={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: "traffic",
              })
            }
          >
            {civilData.traffics
              ? civilData.traffics.map((traffic) => {
                  let offences = traffic.infractions.map((v) => v.label) || [];
                  return (
                    <ListItemTraffic
                      key={traffic.id}
                      numero={traffic.id}
                      offence={offences}
                      agent={traffic.agent}
                      amend={traffic.amend}
                      date={traffic.createdAt}
                    />
                  );
                })
              : null}
          </CivilSelectedCard>
        </RowFirst>
        <RowSecond>
          <CivilSelectedCard
            title="RAPPORT D'ARRESTATION"
            openModal={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: "rapport-d-arrestation",
              })
            }
          >
            {" "}
            {civilData.rapportArrestation
              ? civilData.rapportArrestation.map((rapport) => {
                  let offence = rapport.infractions.map((r) => r.label);

                  return (
                    <ListItemRapportArrestation
                      key={rapport.id}
                      numero={rapport.id}
                      offence={offence}
                      agent={rapport.agent}
                      date={rapport.createdAt}
                      amend={rapport.amende}
                      peine={rapport.peine}
                    />
                  );
                })
              : null}
          </CivilSelectedCard>

          <CivilSelectedCard
            title="DOSSIER D'ARRESTATION"
            openModal={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: "dossier-d-arrestation",
              })
            }
          >
            {civilData.dossierArrestation
              ? civilData.dossierArrestation.map((dossier) => {
                  let offence = dossier.infractions.map((d) => d.label);
                  return (
                    <ListItemDossierArrestaion
                      key={dossier.id}
                      id={dossier.id}
                      numero={dossier.id}
                      agent={dossier.agent}
                      amend={dossier.amend}
                      offence={offence}
                      date={dossier.createdAt}
                      peine={dossier.peine}
                      isEnclosed={dossier.isEnclose}
                    />
                  );
                })
              : null}
          </CivilSelectedCard>
        </RowSecond>
      </Wrapper>
      <Modal isOpen={modalStae.isOpen}>
        <View>{modalStae.view && <Render view={modalStae.view} />}</View>
      </Modal>
    </>
  );
};

export default CivilSelected;

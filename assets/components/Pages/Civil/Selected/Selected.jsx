import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../../Shared/Modal";
import {
  HandsCuffsOutline,
  JusticeHamerOutline,
  LockOutline,
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
} from "./Selected.styled";
import ListItemTraffic from "./ListItemViews/ListItemTraffic";
import ListItemDossierArrestaion from "./ListItemViews/ListItemDossierArrestaion";
import ListItemRapportArrestation from "./ListItemViews/ListItemRapportArrestation";
import { useDispatch, useSelector } from "react-redux";
import { getOneCivil } from "../../../../redux/actions/Civil.action";

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

  useEffect(() => {
    dispatchCivilData(getOneCivil(id));
  }, [id]);

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
        return <AvertissementView onClose={closeModal} />;
      case "traffic":
        return <TrafficView onClose={closeModal} />;
      case "rapport-d-arrestation":
        return <RapportArrestation onClose={closeModal} />;
      case "dossier-d-arrestation":
        return <DossierArrestation onClose={closeModal} />;
      default:
        throw Error("Aucun rendu attribuée à cette vue");
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <HeaderSelect>
          <IconButtonTop></IconButtonTop>
          <IconButtonTop>
            <LockOutline />
          </IconButtonTop>
          <IconButtonTop>
            <UserLicenceOutline />
          </IconButtonTop>
          <h2 className="CivilTitle">{location.state ? name : "N/A"}</h2>
          <IconButtonTop>
            <HandsCuffsOutline />
          </IconButtonTop>
          <IconButtonTop>
            <JusticeHamerOutline />
          </IconButtonTop>
          <IconButtonTop></IconButtonTop>
        </HeaderSelect>

        <RowFirst>
          <CivilCard>
            <CivilPhoto src={civilData.photo} />
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
            <ListItemAvertissement />
            <ListItemAvertissement />
            <ListItemAvertissement />
            <ListItemAvertissement />
            <ListItemAvertissement />
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
            <ListItemTraffic />
            <ListItemTraffic />
            <ListItemTraffic />
            <ListItemTraffic />
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
            <ListItemRapportArrestation />
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
            <ListItemDossierArrestaion />
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

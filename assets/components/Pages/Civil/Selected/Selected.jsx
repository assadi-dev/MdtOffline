import React, { useReducer, useState } from "react";
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
import ListItemAvertissement from "./ModalView/ListItemAvertissement";
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

const CivilSelected = () => {
  const [modalStae, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
    view: "",
  });

  const closeModal = () => {
    dispatch({ type: TOGGLE_MODAL, payload: "" });
  };
  const location = useLocation();
  const { name } = location.state;

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
            <CivilPhoto />
            <CivilInfo>
              <p>
                <span className="personalDetail">NE(E) : </span> Halifa
              </p>
              <p>
                <span className="personalDetail">ADRESSE : </span> Halifa
              </p>
              <p>
                <span className="personalDetail">TELEPHONE : </span> Halifa
              </p>
              <p>
                <span className="personalDetail">APPARTENANCE : </span> Halifa
              </p>
              <p>
                <span className="personalDetail">EMPLOIE : </span> Halifa
              </p>
              <p>
                <span className="personalDetail">CHEVEUX : </span> Halifa
              </p>
              <p>
                <span className="personalDetail">NATIONALITÉ : </span> Halifa
              </p>
              <p>
                <span className="personalDetail">SEXE : </span> Halifa
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
            <div>dd</div>
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
            test
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
            <div>dd</div>
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

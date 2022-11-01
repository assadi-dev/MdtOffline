import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../../components/Shared/Modal";
import {
  EditPencilIcon,
  HandsCuffsOutline,
  JusticeHamerOutline,
  LockOutline,
  MailConvocIcon,
  PagePreviousOutline,
  PrisonIcon,
  UserLicenceOutline,
} from "../../../components/SVG";
import CivilSelectedCard from "./CivilSelectedCard";
import AvertissementView from "./ModalView/AvertissementView";
import ListItemAvertissement from "./ListItemViews/ListItemAvertissement";
import { DeleteView, HeadTitleView, View } from "./ModalView/ModalView.styled";
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
  EditCivilbutton,
} from "./Selected.styled";
import ListItemTraffic from "./ListItemViews/ListItemTraffic";
import ListItemDossierArrestaion from "./ListItemViews/ListItemDossierArrestaion";
import ListItemRapportArrestation from "./ListItemViews/ListItemRapportArrestation";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneCivil,
  uploadPhotoCivil,
} from "../../../redux/actions/Civil.action";
import ConvocationView from "./ModalView/ConvocationView";
import CelluleView from "./ModalView/CelluleView";
import EditAvertissementView from "./ListItemViews/EditView/EditAvertissementView";
import EditTrafficView from "./ListItemViews/EditView/EditTrafficView";
import EditRapportArrestationView from "./ListItemViews/EditView/EditRapportArrestationView";
import EditDossierArrestationView from "./ListItemViews/EditView/EditDossierArrestationView";
import RapportArrestationView from "./ModalView/RapportArrestationView";
import DossierArrestationView from "./ModalView/DossierArrestationView";
import DeleteAvertissementView from "./ListItemViews/DeleteView/DeleteAvertissementView";
import DeleteTrafficView from "./ListItemViews/DeleteView/DeleteTrafficView";
import DeleteRapportArrestationView from "./ListItemViews/DeleteView/DeleteRapportArrestationView";
import DeleteDossierArrestationView from "./ListItemViews/DeleteView/DeleteDossierArrestationView";
import { TOKEN_STORAGE_NAME } from "../../../constants/localStorage";
import Cookies from "js-cookie";
import useListAgent from "../../../hooks/useListAgent";
import { getAgentNameById } from "../../../utils/userData";
import { get_allChefAccusations } from "../../../redux/actions/ChefAccusation.action";
import { get_allAgent } from "../../../redux/actions/Agents.action";
import { sortDescListItems } from "./helper";

const CivilSelected = () => {
  const [modaleState, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
    view: "",
    id: "",
  });

  const closeModal = () => {
    dispatch({ type: TOGGLE_MODAL, payload: { view: "", id: "" } });
  };
  const location = useLocation();
  const { name, id } = location.state;

  const [loading, setLoading] = useState(true);
  const dispatchCivilData = useDispatch();
  const listAgent = useListAgent();
  const civilSelectore = useSelector((state) => state.CivilReducer);
  const token = Cookies.get(TOKEN_STORAGE_NAME);
  const [file, setFile] = useState({
    file: "",
    preview: "",
    size: 0,
    type: "",
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
    const formData = new FormData();
    formData.append("photo", file.file);

    dispatchCivilData(uploadPhotoCivil(id, formData)).then(() => {
      setFile((prevState) => ({
        ...prevState,
        file: "",
        size: "",
        type: 0,
        preview: "",
      }));
    });
  };

  useEffect(() => {
    dispatchCivilData(getOneCivil(id));
    dispatch(get_allAgent());
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
        return <AvertissementView idCivil={id} onClose={closeModal} />;
      case "edit-avertissement":
        return (
          <EditAvertissementView id={modaleState.id} onClose={closeModal} />
        );
      case "delete-avertissement":
        return (
          <DeleteAvertissementView id={modaleState.id} onClose={closeModal} />
        );
      case "traffic":
        return <TrafficView idCivil={id} onClose={closeModal} />;
      case "edit-traffic":
        return <EditTrafficView id={modaleState.id} onClose={closeModal} />;
      case "delete-traffic":
        return (
          <DeleteTrafficView
            id={modaleState.id}
            onClose={closeModal}
            civil={civilData}
          />
        );
      case "rapport-d-arrestation":
        return <RapportArrestationView idCivil={id} onClose={closeModal} />;
      case "edit-rapport-d-arrestation":
        return (
          <EditRapportArrestationView
            id={modaleState.id}
            onClose={closeModal}
          />
        );
      case "delete-rapport-d-arrestation":
        return (
          <DeleteRapportArrestationView
            id={modaleState.id}
            onClose={closeModal}
            civil={civilData}
          />
        );
      case "dossier-d-arrestation":
        return <DossierArrestationView idCivil={id} onClose={closeModal} />;
      case "edit-dossier-d-arrestation":
        return (
          <EditDossierArrestationView
            id={modaleState.id}
            onClose={closeModal}
          />
        );
      case "delete-dossier-d-arrestation":
        return (
          <DeleteDossierArrestationView
            id={modaleState.id}
            onClose={closeModal}
            civil={civilData}
          />
        );
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
                payload: { view: "convocation" },
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
                payload: { view: "cellule" },
              })
            }
            title={"Cellule"}
          >
            <PrisonIcon />
          </IconButtonTop>

          <IconButtonTop onClick={goBack} title={"Retour à la page civil"}>
            {" "}
            <PagePreviousOutline />
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
                  {civilData ? civilData.birthday : "N/A"}
                </p>
                <p>
                  <span className="personalDetail">ADRESSE : </span>{" "}
                  {civilData ? civilData.adresse : "N/A"}
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
                  {" "}
                  <span className="personalDetail">ETHNIE : </span>{" "}
                  {civilData ? civilData.ethnie : ""}
                </p>
                <p>
                  <span className="personalDetail">SEXE : </span>{" "}
                  {civilData ? civilData.sexe : "N/A"}
                </p>
                <EditCivilbutton
                  className="editCivil"
                  onClick={() =>
                    dispatch({
                      type: TOGGLE_MODAL,
                      payload: {
                        view: "convocation",
                        civil: {
                          nom: "",
                          prenem: "",
                          birthday: "",
                          telephone: "",
                          nationalite: "",
                          affiliation: "",
                          permis: "",
                          sexe: "",
                          identification: "",
                        },
                      },
                    })
                  }
                >
                  <EditPencilIcon />
                </EditCivilbutton>
              </CivilInfo>
            </RowDiv>
          </CivilCard>

          <CivilSelectedCard
            openModal={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: { view: "avertissement" },
              })
            }
            title="AVERTISSEMENT"
          >
            {civilData.avertissements
              ? sortDescListItems(civilData.avertissements, "createdAt").map(
                  (avertissement) => (
                    <ListItemAvertissement
                      key={avertissement.id}
                      id={avertissement.id}
                      lieux={avertissement.lieux}
                      numero={avertissement.id}
                      comment={avertissement.comments}
                      agent={
                        listAgent.length > 0 &&
                        getAgentNameById(listAgent, avertissement.idAgent)
                      }
                      date={avertissement.createdAt}
                      dispatchOpenModal={dispatch}
                    />
                  )
                )
              : null}
          </CivilSelectedCard>

          <CivilSelectedCard
            title="TRAFFIC"
            openModal={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: { view: "traffic" },
              })
            }
          >
            {civilData.traffics
              ? sortDescListItems(civilData.traffics, "createdAt").map(
                  (traffic) => {
                    let offences =
                      traffic.infractions.map((v) => v.label) || [];
                    return (
                      <ListItemTraffic
                        key={traffic.id}
                        id={traffic.id}
                        numero={traffic.id}
                        offence={offences}
                        agent={
                          listAgent.length > 0 &&
                          getAgentNameById(listAgent, traffic.idAgent)
                        }
                        amende={traffic.amende}
                        date={traffic.createdAt}
                        dispatchOpenModal={dispatch}
                      />
                    );
                  }
                )
              : null}
          </CivilSelectedCard>
        </RowFirst>
        <RowSecond>
          <CivilSelectedCard
            title="RAPPORT D'ARRESTATION"
            openModal={() =>
              dispatch({
                type: TOGGLE_MODAL,
                payload: { view: "rapport-d-arrestation" },
              })
            }
          >
            {" "}
            {civilData.rapportArrestation
              ? sortDescListItems(
                  civilData.rapportArrestation,
                  "createdAt"
                ).map((rapport) => {
                  let offence = rapport.infractions.map((r) => r.label);

                  return (
                    <ListItemRapportArrestation
                      key={rapport.id}
                      id={rapport.id}
                      numero={rapport.id}
                      offence={offence}
                      agent={
                        listAgent.length > 0 &&
                        getAgentNameById(listAgent, rapport.idAgent)
                      }
                      date={rapport.createdAt}
                      amende={rapport.amende}
                      peine={rapport.peine}
                      conversionUp={rapport.conversionUp}
                      dispatchOpenModal={dispatch}
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
                payload: { view: "dossier-d-arrestation" },
              })
            }
          >
            {civilData.dossierArrestation
              ? sortDescListItems(
                  civilData.dossierArrestation,
                  "createdAt"
                ).map((dossier) => {
                  let offence = dossier.infractions.map((d) => d.label);
                  return (
                    <ListItemDossierArrestaion
                      key={dossier.id}
                      id={dossier.id}
                      numero={dossier.id}
                      agent={
                        listAgent.length > 0 &&
                        getAgentNameById(listAgent, dossier.idAgent)
                      }
                      amende={dossier.amende}
                      offence={offence}
                      date={dossier.createdAt}
                      peine={dossier.peine}
                      isEnclosed={dossier.isEnclose}
                      dispatchOpenModal={dispatch}
                    />
                  );
                })
              : null}
          </CivilSelectedCard>
        </RowSecond>
      </Wrapper>
      <Modal isOpen={modaleState.isOpen}>
        {modaleState.view.includes("delete") ? (
          <DeleteView>
            {modaleState.view && <Render view={modaleState.view} />}
          </DeleteView>
        ) : (
          <View>{modaleState.view && <Render view={modaleState.view} />}</View>
        )}
      </Modal>
    </>
  );
};

export default CivilSelected;

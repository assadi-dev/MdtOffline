import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Shared/Modal";
import {
  ChevronLeft,
  ChevronRight,
  EditPencilIcon,
  TrashIcon,
} from "../../../components/SVG";
import {
  delete_priseServices,
  get_priseServiceByWeek,
  get_userPriseServiceByWeek,
} from "../../../redux/actions/PriseDeService.action";
import {
  dateFrenchFormat,
  dateFrenchFormatWithSecond,
  FormatDuration,
  getCurrentWeekNumber,
} from "../../../utils/dateFormat";
import {
  CLOSE_MODAL,
  ModalStateReducer,
  OPEN_MODAL,
  TOGGLE_MODAL,
} from "../reducer/ModalStateReducer";
import EmptyRow from "./EmptyRow";
import {
  Button,
  HoursSheetBody,
  HoursSheetHeaderRowBtn,
  HoursSheetpageHeader,
  HoursSheetRowAction,
  HoursSheetTable,
  HoursSheetTableAction,
  HoursSheetWrapper,
  OutlineBtnAction,
} from "./HoursSheet.styled";
import AddServiceView from "./ModalView/AddServiceView";
import {
  deleteServiceAsync,
  getUserPriseServiceByWeekAsync,
} from "../../../features/PriseDeService/PriseDeserviceAsyncApi";

const HoursSheet = () => {
  const [week, setWeek] = useState(parseInt(getCurrentWeekNumber()));
  const [modalState, dispatchModal] = useReducer(ModalStateReducer, {
    isOpen: false,
    view: "",
  });
  const dispatch = useDispatch();
  const priseServiceByWeek = useSelector(
    (state) => state.PriseDeServiceReducer
  );

  const agent = useSelector((state) => state.AuthenticateReducer);

  const setWeekCounter = (type) => {
    type == "increment"
      ? setWeek((prevState) => (prevState += 1))
      : setWeek((prevState) => (prevState -= 1));
  };

  useEffect(() => {
    const promise =
      agent.idAgent &&
      week &&
      dispatch(getUserPriseServiceByWeekAsync({ agent: agent.idAgent, week }));
    return () => {
      agent.idAgent && week && promise.abort();
    };
  }, [week, agent.idAgent]);

  const listeServices = useMemo(() => {
    if (priseServiceByWeek.collections) {
      return priseServiceByWeek.collections.map((service) => {
        return {
          ...service,
          start: dateFrenchFormatWithSecond(service.start),
          end: service.isActive
            ? "Service en cours"
            : dateFrenchFormatWithSecond(service.end),
          duration: FormatDuration(service.duration),
        };
      });
    }

    return [];
  }, [priseServiceByWeek.collections]);

  const totalhours = useMemo(() => {
    let totalhoursArray = [];

    if (priseServiceByWeek.collections.length > 0) {
      totalhoursArray = priseServiceByWeek.collections.map((service) => {
        return Number(service.duration);
      });
      return totalhoursArray.reduce((a, b) => a + b);
    }

    return 0;
  }, [priseServiceByWeek.collections]);

  const currentService = useMemo(() => {
    if (
      priseServiceByWeek.selected !== undefined ||
      priseServiceByWeek.selected != null
    ) {
      if (priseServiceByWeek.selected.isActive) return true;
    }

    return false;
  }, [priseServiceByWeek.selected]);

  const Render = ({ view }) => {
    switch (view) {
      case "add_services":
        return <AddServiceView onClose={handleCloseModal} />;
      case "edit_services":
        return (
          <div>
            <p>Edit</p>
          </div>
        );
    }
  };

  const handleAddServices = () => {
    return dispatchModal({
      type: TOGGLE_MODAL,
      payload: { view: "add_services" },
    });
  };

  const handleCloseModal = () => {
    dispatchModal({
      type: TOGGLE_MODAL,
      payload: { view: modalState.view },
    });
  };

  const handleDeletService = (id) => {
    let payload = { id };
    currentService
      ? alert(
          "Vous avez un service en cours ,veuillez mettre fin à votre service avant d'effectué cette action"
        )
      : dispatch(deleteServiceAsync(payload));
  };

  return (
    <>
      <HoursSheetWrapper>
        <HoursSheetpageHeader>
          <HoursSheetHeaderRowBtn>
            <button className="btn" onClick={() => setWeekCounter("decrement")}>
              <ChevronLeft />
            </button>{" "}
            <h2 className="HoursTitlepageHeader">SEMAINE {week}</h2>{" "}
            <button className="btn" onClick={() => setWeekCounter("increment")}>
              <ChevronRight />{" "}
            </button>
          </HoursSheetHeaderRowBtn>

          <p className="totalHour">Total: {FormatDuration(totalhours)}</p>
        </HoursSheetpageHeader>

        <HoursSheetBody>
          <HoursSheetRowAction>
            <div></div>
            <Button
              className="addBtn"
              onClick={handleAddServices}
              disabled={currentService}
            >
              {currentService ? "Service en cours" : "Ajouter"}
            </Button>
          </HoursSheetRowAction>
          <HoursSheetTable>
            <thead>
              <tr>
                <th>Prise de service</th>
                <th>Fin de service</th>
                <th>Durée</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listeServices.length > 0 ? (
                listeServices.map((service) => (
                  <tr key={service.id}>
                    <td>{service.start}</td>
                    <td
                      className={`${service.isActive ? "serviceActive" : null}`}
                    >
                      {service.end}
                    </td>
                    <td>{service.duration}</td>
                    <td>
                      <HoursSheetTableAction>
                        <OutlineBtnAction className="edit">
                          {" "}
                          <EditPencilIcon />
                        </OutlineBtnAction>
                        <OutlineBtnAction
                          className="delete"
                          onClick={() => handleDeletService(service.id)}
                        >
                          {" "}
                          <TrashIcon />
                        </OutlineBtnAction>
                      </HoursSheetTableAction>
                    </td>
                  </tr>
                ))
              ) : (
                <EmptyRow
                  text={"Vous n'etiez pas en service durant cette semaine"}
                  colSpan={5}
                />
              )}
            </tbody>
          </HoursSheetTable>
        </HoursSheetBody>
      </HoursSheetWrapper>
      <Modal isOpen={modalState.isOpen}>
        <>{<Render view={modalState.view} />}</>
      </Modal>
    </>
  );
};

export default HoursSheet;

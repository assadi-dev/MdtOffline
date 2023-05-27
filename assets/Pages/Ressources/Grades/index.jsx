import React, { useEffect, useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Shared/Modal";
import { EditPencilIcon, TrashIcon } from "../../../components/SVG";
import {
  Button,
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../Ressources.styled";
import { GradeBody, GradeWrapper } from "./Grade.styled";
import AddModal from "./Modal/AddModal";
import DeleteModal from "./Modal/DeleteModal";
import EditModal from "./Modal/EditModal";
import ModalReducer from "./reducer/ModalReducer";
import { getAllGradesAsync } from "../../../features/Grades/GradeAsyncApi";
import TbodyAnimate from "../../../components/Shared/Table/TbodyAnimate";
import LoadingTab from "../../CommandStaffSupervisor/Loading/LoadingTab";

const Grades = () => {
  const { collections, filtered, status } = useSelector(
    (state) => state.GradesReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(getAllGradesAsync());
    return () => {
      promise.abort();
    };
  }, []);

  const [modalState, dispatchModalState] = useReducer(ModalReducer, {
    isOpen: false,
    view: "",
    gradeData: "",
  });

  const toogleModal = (view) => {
    dispatchModalState({
      type: "TOOGLE_MODAL",
      payload: { view, gradeData: modalState.gradeData },
    });
  };

  const Render = ({ view, gradeData }) => {
    switch (view) {
      case "add":
        return (
          <AddModal gradeData={gradeData} onClose={() => toogleModal(view)} />
        );

      case "edit":
        return (
          <EditModal gradeData={gradeData} onClose={() => toogleModal(view)} />
        );

      case "delete":
        return (
          <DeleteModal
            id={gradeData.id}
            name={gradeData.nom}
            onClose={() => toogleModal(view)}
          />
        );

      default:
        break;
    }
  };

  return (
    <>
      <GradeWrapper>
        <HeaderRowAction>
          {" "}
          <div></div>
          <Button
            className="addBtn"
            onClick={() =>
              dispatchModalState({
                type: "TOOGLE_MODAL",
                payload: { view: "add", gradeData: [] },
              })
            }
          >
            Ajouter
          </Button>{" "}
        </HeaderRowAction>

        <GradeBody>
          {status == "complete" ? (
            <Table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Categorie</th>
                  <th className="td-center">Niveau</th>
                  <th className="td-center">Effectifs</th>
                  <th>Action</th>
                </tr>
              </thead>
              <TbodyAnimate>
                {collections.length > 0 &&
                  collections.map((grade) => (
                    <tr key={grade.id}>
                      <td>{grade.nom}</td>
                      <td>{grade.categorie}</td>
                      <td className="td-center">{grade.rang}</td>
                      <td className="td-center">
                        {grade.agents ? grade.agents.length : 0}
                      </td>

                      <td>
                        <TableAction>
                          <OutlineBtnAction
                            className="edit"
                            onClick={() =>
                              dispatchModalState({
                                type: "TOOGLE_MODAL",
                                payload: {
                                  view: "edit",
                                  gradeData: {
                                    id: grade.id,
                                    nom: grade.nom,
                                    categorie: grade.categorie,
                                    rang: grade.rang,
                                  },
                                },
                              })
                            }
                          >
                            <EditPencilIcon />
                          </OutlineBtnAction>
                          <OutlineBtnAction
                            className="delete"
                            onClick={() =>
                              dispatchModalState({
                                type: "TOOGLE_MODAL",
                                payload: {
                                  view: "delete",
                                  gradeData: {
                                    id: grade.id,
                                    nom: grade.nom,
                                  },
                                },
                              })
                            }
                          >
                            <TrashIcon />
                          </OutlineBtnAction>
                        </TableAction>
                      </td>
                    </tr>
                  ))}
              </TbodyAnimate>
            </Table>
          ) : (
            <LoadingTab />
          )}
        </GradeBody>
      </GradeWrapper>
      <Modal isOpen={modalState.isOpen}>
        {
          <>
            {modalState.view && (
              <Render view={modalState.view} gradeData={modalState.gradeData} />
            )}
          </>
        }
      </Modal>
    </>
  );
};

export default Grades;

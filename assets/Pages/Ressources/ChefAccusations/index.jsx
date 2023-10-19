import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditPencilIcon, TrashIcon } from "../../../components/SVG";
import { get_allChefAccusations } from "../../../redux/actions/ChefAccusation.action";
import {
  Button,
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../Ressources.styled";
import {
  ChefAccusationBody,
  ChefAccusationWrapper,
} from "./ChefAccusation.styled";
import { getAllChefAccusationAsync } from "../../../features/ChefAccusation/ChefAccusationAsyncApi";
import LoadingTab from "../../CommandStaffSupervisor/Loading/LoadingTab";
import TbodyAnimate from "../../../components/Shared/Table/TbodyAnimate";
import Modal from "../../../components/Shared/Modal";
import ModalReducer from "./reducer/ModalReducer";
import AddCheffAcusation from "./View/AddCheffAcusation";
import EditChefAccusation from "./View/EditChefAccusation";
import DeleteChefAccusation from "./View/DeleteChefAccusation";

const ChefAccusation = () => {
  const { collections, filtered, status } = useSelector(
    (state) => state.ChefAccusationReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(getAllChefAccusationAsync());

    return () => {
      promise.abort();
    };
  }, []);

  const [modalState, dispatchModalState] = useReducer(ModalReducer, {
    isOpen: false,
    view: "",
    chefAccusation: "",
  });

  const toogleModal = (view) => {
    dispatchModalState({
      type: "TOOGLE_MODAL",
      payload: { view, chefAccusation: modalState.chefAccusation },
    });
  };

  const Render = ({ view, cheffAccusation }) => {
    switch (view) {
      case "add":
        return <AddCheffAcusation onClose={() => toogleModal(view)} />;

      case "edit":
        return (
          <EditChefAccusation
            payload={cheffAccusation}
            onClose={() => toogleModal(view)}
          />
        );

      case "delete":
        return (
          <DeleteChefAccusation
            payload={cheffAccusation}
            onClose={() => toogleModal(view)}
          />
        );

      default:
        break;
    }
  };

  const handleEdit = (chefAccusation) => {
    dispatchModalState({
      type: "TOOGLE_MODAL",
      payload: { view: "edit", chefAccusation: chefAccusation },
    });
  };
  const handleDelete = (chefAccusation) => {
    dispatchModalState({
      type: "TOOGLE_MODAL",
      payload: { view: "delete", chefAccusation: chefAccusation },
    });
  };

  return (
    <>
      <ChefAccusationWrapper>
        <HeaderRowAction>
          {" "}
          <div></div>
          <Button
            className="addBtn"
            onClick={() =>
              dispatchModalState({
                type: "TOOGLE_MODAL",
                payload: { view: "add", chefAccusation: null },
              })
            }
          >
            Ajouter
          </Button>{" "}
        </HeaderRowAction>
        <ChefAccusationBody>
          {status == "complete" ? (
            <Table>
              <thead>
                <tr>
                  <th>Infractions</th>
                  <th>Categorie</th>
                  <th className="td-center">Amendes</th>
                  <th className="td-center">Peines</th>
                  <th>Action</th>
                </tr>
              </thead>
              <TbodyAnimate>
                {collections.length > 0 &&
                  collections.map((chef) => (
                    <tr key={chef.id}>
                      <td>{chef.infraction}</td>
                      <td>{chef.categorie}</td>
                      <td className="td-center">{chef.amendes}</td>
                      <td className="td-center">{chef.peines}</td>

                      <td>
                        <TableAction>
                          <OutlineBtnAction
                            className="edit"
                            onClick={() => handleEdit(chef)}
                          >
                            <EditPencilIcon />
                          </OutlineBtnAction>
                          <OutlineBtnAction
                            className="delete"
                            onClick={() => handleDelete(chef)}
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
        </ChefAccusationBody>
      </ChefAccusationWrapper>
      <Modal isOpen={modalState.isOpen}>
        {
          <>
            {modalState.view && (
              <Render
                view={modalState.view}
                cheffAccusation={modalState.chefAccusation}
              />
            )}
          </>
        }
      </Modal>
    </>
  );
};

export default ChefAccusation;

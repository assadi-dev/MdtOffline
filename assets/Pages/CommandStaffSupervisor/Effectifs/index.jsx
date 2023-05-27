import React, { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Shared/Modal";
import SwitchButton from "../../../components/Shared/SwitchButton";
import { EditPencilIcon, TrashIcon } from "../../../components/SVG";
import useFecthData from "../../../hooks/useFecthData";
import {
  get_allUsers,
  validation_user,
} from "../../../redux/actions/User.action";
import { dateFrenchFormat } from "../../../utils/dateFormat";
import { getGradeById, getUserRole } from "../../../utils/userData";
import {
  Button,
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../CommandStaffSupervisor.styled";
import ModalStateReducer from "../reducer/ModalState.reducer";
import { EffectifBody, EffectifWrapper } from "./Effectifs.styled";
import Render from "./ModalView/Render";
import { getAllGradesAsync } from "../../../features/Grades/GradeAsyncApi";
import { getAllAgentAsync } from "../../../features/Agents/AgentAsyncApi";
import TbodyAnimate from "../../../components/Shared/Table/TbodyAnimate";
import LoadingTab from "../Loading/LoadingTab";

const Effectifs = () => {
  const dispatch = useDispatch();
  const { collections, status } = useSelector((state) => state.AgentsReducer);
  const [modalState, modalStateDispatch] = useReducer(ModalStateReducer, {
    isOpen: false,
    view: "",
    params: [],
    step: "",
    succsess: "",
    error: "",
  });

  useEffect(() => {
    const promise = dispatch(getAllAgentAsync());
    const promise2 = dispatch(getAllGradesAsync());
    return () => {
      promise.abort();
      promise2.abort();
    };
  }, []);

  const handlEditAgent = (agentId) => {
    modalStateDispatch({ type: "EDIT_AGENT", payload: { agentId } });
  };

  const handleClose = () => {
    modalStateDispatch({
      type: "CLOSE_MODAL",
      payload: { view: "", agentId: "" },
    });
  };

  return (
    <>
      <EffectifWrapper>
        <HeaderRowAction>
          <div></div>
          {/* <Button className="addBtn">Ajouter</Button> */}
        </HeaderRowAction>
        <EffectifBody>
          {status == "complete" ? (
            <Table>
              <thead>
                <tr>
                  <th>Matricule</th>
                  <th>identité</th>
                  <th>Téléphone</th>
                  <th className="td-center">Grade</th>
                  <th className="td-center">Action</th>
                </tr>
              </thead>
              <TbodyAnimate>
                {collections.map((agent) => (
                  <tr key={agent.id}>
                    <td scope="col">{agent.matricule}</td>
                    <td>{agent.name}</td>
                    <td>{agent.telephone}</td>
                    <td className="td-center">{agent.grade.nom}</td>

                    <td>
                      <TableAction>
                        <OutlineBtnAction
                          className="edit"
                          onClick={() => handlEditAgent(agent.id)}
                        >
                          <EditPencilIcon />
                        </OutlineBtnAction>
                        <OutlineBtnAction className="delete">
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
        </EffectifBody>
      </EffectifWrapper>
      <Modal isOpen={modalState.isOpen}>
        <>
          {
            <Render
              view={modalState.view}
              data={modalState.params}
              onClose={handleClose}
            />
          }
        </>
      </Modal>
    </>
  );
};

export default Effectifs;

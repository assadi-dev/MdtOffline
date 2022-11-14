import React from "react";
import { useReducer } from "react";
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
import { getUserRole } from "../../../utils/userData";
import {
  Button,
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../CommandStaffSupervisor.styled";
import {
  AccountManagerBody,
  AccountManagerWrapper,
  DeleteView,
} from "./AcountManager.styled";
import DeleteAccountView from "./Modal/DeleteAccountView ";
import ModalStateReducer from "./Reducer/ModalStateReducer";

const AccountManager = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.UserReducer);
  const [modalState, dispatchModalState] = useReducer(ModalStateReducer, {
    view: "",
    data: null,
    isOpen: false,
  });

  const handleCheckValidate = (id, e) => {
    let checkState = e.target.checked;
    let data = { validate: checkState };
    dispatch(validation_user(id, data));
  };

  useEffect(() => {
    dispatch(get_allUsers());
  }, []);

  const handleDelete = (id, username) => {
    return dispatchModalState({
      type: "TOOGLE_MODAL",
      payload: { view: "delete", data: { id, username } },
    });
  };

  const handleClose = () => {
    return dispatchModalState({
      type: "TOOGLE_MODAL",
      payload: { view: modalState.view, data: modalState.data },
    });
  };

  const Render = ({ view, data }) => {
    let id = data && data.id;
    let username = data && data.username;
    switch (view) {
      case "delete":
        return (
          <DeleteView>
            {data !== null ? (
              <DeleteAccountView
                id={id}
                username={username}
                onClose={handleClose}
              />
            ) : null}
          </DeleteView>
        );

      default:
        break;
    }
  };

  return (
    <>
      <AccountManagerWrapper>
        <HeaderRowAction>
          <div></div>
          <Button className="addBtn">Ajouter</Button>
        </HeaderRowAction>
        <AccountManagerBody>
          <Table>
            <thead>
              <tr>
                <th>Identifiant</th>
                <th>Role</th>
                <th className="td-center">Date de création</th>
                <th className="td-center">Validation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userSelector.isReady &&
                userSelector.collection.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{getUserRole(user.roles)}</td>
                    <td className="td-center">
                      {dateFrenchFormat(user.createdAt)}
                    </td>
                    <td className="td-center">
                      <SwitchButton
                        checked={user.validate}
                        sliderOffColor={"var( --danger-color)"}
                        sliderClass="validatSwitchBtn"
                        onChange={(e) => handleCheckValidate(user.id, e)}
                      />
                    </td>
                    <td>
                      <TableAction>
                        <OutlineBtnAction className="edit">
                          <EditPencilIcon />
                        </OutlineBtnAction>
                        <OutlineBtnAction
                          className="delete"
                          onClick={() => handleDelete(user.id, user.username)}
                        >
                          <TrashIcon />
                        </OutlineBtnAction>
                      </TableAction>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </AccountManagerBody>
        <Modal isOpen={modalState.isOpen}>
          <Render view={modalState.view} data={modalState.data} />
        </Modal>
      </AccountManagerWrapper>
    </>
  );
};

export default AccountManager;

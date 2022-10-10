import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "./AcountManager.styled";

const AccountManager = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.UserReducer);

  const handleCheckValidate = (id, e) => {
    let checkState = e.target.checked;
    let data = { validate: checkState };
    dispatch(validation_user(id, data));
  };

  useEffect(() => {
    dispatch(get_allUsers());
  }, []);

  return (
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
                      <OutlineBtnAction className="delete">
                        <TrashIcon />
                      </OutlineBtnAction>
                    </TableAction>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </AccountManagerBody>
    </AccountManagerWrapper>
  );
};

export default AccountManager;

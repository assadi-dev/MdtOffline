import React from "react";
import SwitchButton from "../../../components/Shared/SwitchButton";
import { EditPencilIcon, TrashIcon } from "../../../components/SVG";
import useFecthData from "../../../hooks/useFecthData";
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
  const { data, loading } = useFecthData("users");

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
            {!loading &&
              data.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{getUserRole(user.roles)}</td>
                  <td className="td-center">
                    {dateFrenchFormat(user.createdAt)}
                  </td>
                  <td className="td-center">
                    <SwitchButton
                      sliderOffColor={"var( --danger-color)"}
                      sliderClass="validatSwitchBtn"
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

import React, { useEffect } from "react";
import { HeaderRowAction, Table } from "../CommandStaffSupervisor.styled";
import {
  ForgotenPasswordWrapper,
  ForgottenPasswordBody,
} from "./Forgotten.styled";
import { IsCommandStaff } from "../../../utils/userData";
import EmptyRow from "../../../components/Shared/Table/EmptyRow";
import { CopyClipboardIcon } from "../../../components/SVG";
import { useDispatch, useSelector } from "react-redux";
import { getAllForgottenPasswordAsync } from "../../../features/ForgottenPassword/ForgottenPasswordAsyncApi";

const ForgottenPassword = () => {
  const { collections, status } = useSelector(
    (state) => state.ForgottenPasswordReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(getAllForgottenPasswordAsync());
    console.log(collections);

    return () => {
      promise.abort();
    };
  }, []);

  return (
    <ForgotenPasswordWrapper>
      <HeaderRowAction></HeaderRowAction>
      <ForgottenPasswordBody>
        <Table>
          <thead>
            <tr>
              <th>Compte</th>
              <th className="td-center">Date d'expiration</th>
              <th className="td-center">liens</th>
              {IsCommandStaff() && (
                <th className="td-center">Générer le liens</th>
              )}
            </tr>
          </thead>
          <tbody>
            {collections.length > 0 ? (
              <tr>
                <td></td>
                <td></td>
                <td>
                  {" "}
                  <CopyClipboardIcon />
                </td>
                <td></td>
              </tr>
            ) : (
              <EmptyRow
                message={"Aucune demande de renouvellement"}
                colSpan={10}
              />
            )}
          </tbody>
        </Table>
      </ForgottenPasswordBody>
    </ForgotenPasswordWrapper>
  );
};

export default ForgottenPassword;

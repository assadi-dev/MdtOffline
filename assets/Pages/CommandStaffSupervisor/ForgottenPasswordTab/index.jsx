import React, { useEffect } from "react";
import { HeaderRowAction, Table } from "../CommandStaffSupervisor.styled";
import {
  ClipboadrCopy,
  ForgotenPasswordWrapper,
  ForgottenPasswordBody,
  RowLink,
} from "./Forgotten.styled";
import { IsCommandStaff, getAgentNameById } from "../../../utils/userData";
import EmptyRow from "../../../components/Shared/Table/EmptyRow";
import { CopyClipboardIcon } from "../../../components/SVG";
import { useDispatch, useSelector } from "react-redux";
import { getAllForgottenPasswordAsync } from "../../../features/ForgottenPassword/ForgottenPasswordAsyncApi";
import { FrenchFormatDateWithHour } from "../../../utils/dateFormat";
import useListAgent from "../../../hooks/useListAgent";
import { sleep } from "../../../utils/timer";
import ClipboardBtn from "./ClipboardBtn";
import GenerateLinkBtn from "./GenerateLinkBtn";
import TbodyAnimate from "../../../components/Shared/Table/TbodyAnimate";
import LoadingTab from "../Loading/LoadingTab";
import DeleteButton from "./Deletebutton";

const ForgottenPassword = () => {
  const { collections, status } = useSelector(
    (state) => state.ForgottenPasswordReducer
  );

  const dispatch = useDispatch();
  const listAgent = useListAgent();

  useEffect(() => {
    const promise = dispatch(getAllForgottenPasswordAsync());
    return () => {
      promise.abort();
    };
  }, []);

  return (
    <ForgotenPasswordWrapper>
      <HeaderRowAction></HeaderRowAction>
      <ForgottenPasswordBody>
        {status == "complete" ? (
          <Table>
            <thead>
              <tr>
                <th>Compte</th>
                <th>Date d'expiration</th>
                <th className="td-center">liens de reinitialisation</th>
                {IsCommandStaff() && (
                  <th className="td-center">Générer le liens</th>
                )}
                <th className="td-center"> Action </th>
              </tr>
            </thead>
            <TbodyAnimate>
              {collections.length > 0 ? (
                collections.map((password) => (
                  <tr key={password.id}>
                    <td>{getAgentNameById(listAgent, password.userId)}</td>
                    <td>{FrenchFormatDateWithHour(password.expirateAt)}</td>
                    <td>
                      <RowLink>
                        <p> {password.link}</p>
                        {password.link && (
                          <ClipboardBtn textToCopy={password.link} />
                        )}
                      </RowLink>
                    </td>
                    <td className="td-center">
                      <GenerateLinkBtn
                        id={password.id}
                        token={password.token}
                      />
                    </td>
                    <td>
                      <DeleteButton id={password.id} />
                    </td>
                  </tr>
                ))
              ) : (
                <EmptyRow
                  message={"Aucune demande de renouvellement"}
                  colSpan={10}
                />
              )}
            </TbodyAnimate>
          </Table>
        ) : (
          <LoadingTab />
        )}
      </ForgottenPasswordBody>
    </ForgotenPasswordWrapper>
  );
};

export default ForgottenPassword;

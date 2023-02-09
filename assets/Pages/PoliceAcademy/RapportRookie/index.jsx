import React, { useEffect } from "react";
import {
  HeaderRowAction,
  RapportRookieBody,
  RapportRookieWrapper,
  ShowRapportbtn,
  Table,
} from "./RapportRookie.styled";
import { IsCommandStaff, getAgentNameById } from "../../../utils/userData";
import { useDispatch, useSelector } from "react-redux";
import { getAllRapportRookieAsync } from "../../../features/RapportRookie/RapportRookieAsyncApi";
import { FrenchFormatDateWithHour } from "../../../utils/dateFormat";
import useListAgent from "../../../hooks/useListAgent";
import { SearchDocumentIcon } from "../../../components/SVG";

const RapportRookieTab = () => {
  const dispatch = useDispatch();
  const rapportRookie = useSelector(
    (state) => state.RapportDeputyTrainyReducer
  );
  const listAgent = useListAgent();

  useEffect(() => {
    dispatch(getAllRapportRookieAsync());
  }, []);

  return (
    <>
      <RapportRookieWrapper>
        <HeaderRowAction>
          <div></div>
        </HeaderRowAction>
        <RapportRookieBody>
          {rapportRookie.status == "complete" ? (
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th> Deputy Trainee concerné</th>
                  <th>Type de patrouille</th>
                  <th className="td-center">Rapport</th>
                  {IsCommandStaff() && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {rapportRookie.collections.length > 0 ? (
                  rapportRookie.collections.map((rapport) => (
                    <tr>
                      <td>{FrenchFormatDateWithHour(rapport.createdAt)}</td>
                      <td>
                        {getAgentNameById(
                          listAgent,
                          parseInt(rapport.deputyTrainyConcerned)
                        )}
                      </td>
                      <td>{rapport.typePatrouille}</td>
                      <td className="td-center">
                        <ShowRapportbtn
                          title="Afficher le rapport"
                          /*      onClick={() =>
                            toggleModal("show-rapport", rapport.rapport)
                          } */
                        >
                          <SearchDocumentIcon />
                        </ShowRapportbtn>
                      </td>
                      <td className="td-center">action</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {" "}
                    <td colSpan={5} className="td-center">
                      Aucun Rapport Rookie
                    </td>{" "}
                  </tr>
                )}
              </tbody>
            </Table>
          ) : (
            "Loading"
          )}
        </RapportRookieBody>
      </RapportRookieWrapper>
    </>
  );
};

export default RapportRookieTab;

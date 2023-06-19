import React, { useEffect, useLayoutEffect } from "react";
import {
  PanicButtonBody,
  PanicButtonContainer,
  PanicButtonHeader,
} from "./PanicButtonStyle";
import { Table } from "../../components/Shared/Table/Table.styled";
import TbodyAnimate from "../../components/Shared/Table/TbodyAnimate";
import EmptyRow from "../../components/Shared/Table/EmptyRow";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllPanicButtonAsync } from "../../features/PanicButton/PanicbuttonAsync";
import Tabloader from "./Loader/Tabloader";
import ActionRow from "./Loader/ActionRow";
import { MERCURE_HUB_URL, TOPIC_URL } from "../../constants/localStorage";
import { FrenchFormatDateWithHour } from "../../utils/dateFormat";
import { IsCommandStaff } from "../../utils/userData";
import { addEventPanicButton } from "../../features/PanicButton/Panicbutton.slice";

const PanicButton = () => {
  const dispatch = useDispatch();
  const { collections, status } = useSelector(
    (state) => state.PanicButtonReducer
  );

  useEffect(() => {
    const promise = dispatch(getAllPanicButtonAsync());
    return () => {
      promise.abort();
    };
  }, []);

  useLayoutEffect(() => {
    const topic = `${TOPIC_URL}PanicButton/update`;
    const url = new URL(MERCURE_HUB_URL);
    url.searchParams.append("topic", topic);
    let eventSource = new EventSource(url);
    eventSource.onmessage = (e) => {
      let data = JSON.parse(e.data);
      console.log(data);

      dispatch(addEventPanicButton(data));
    };

    eventSource.onerror = () => {
      eventSource.close();
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <PanicButtonContainer>
      <PanicButtonHeader>
        <p className="title">Code 99</p>
      </PanicButtonHeader>
      <PanicButtonBody>
        {status == "complete" ? (
          <Table>
            <thead>
              <tr>
                <th className="td-center">Agent</th>
                <th className="td-center">matricule</th>
                <th className="td-center">Grade</th>
                <th className="td-center">Activé le</th>
                {IsCommandStaff && <th className="td-center"> Action </th>}
              </tr>
            </thead>
            <TbodyAnimate>
              {collections.length > 0 ? (
                collections.map((item) => (
                  <tr key={item.id}>
                    <td className="td-center">{item.name}</td>
                    <td className="td-center">
                      {item.matricule ? item.matricule : "N/A"}
                    </td>
                    <td className="td-center">
                      {item.grade ? item.grade : "N/A"}
                    </td>
                    <td className="td-center">
                      {FrenchFormatDateWithHour(item.activateAt)}
                    </td>
                    {IsCommandStaff && (
                      <td className="td-center">
                        {" "}
                        <ActionRow id={item.id} />{" "}
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <EmptyRow message={"Aucune activation"} colSpan={10} />
              )}
            </TbodyAnimate>
          </Table>
        ) : (
          <Tabloader />
        )}
      </PanicButtonBody>
    </PanicButtonContainer>
  );
};

export default PanicButton;

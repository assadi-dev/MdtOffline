import React from "react";
import {
  HeaderRowAction,
  PlainteTabBody,
  PlainteTabWrapper,
} from "./PlaintTab.styled";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../../components/Shared/Table/Table.styled";
import { IsCommandStaff } from "../../../utils/userData";

const PlaintesTab = () => {
  const dispatch = useDispatch();

  return (
    <PlainteTabWrapper>
      <HeaderRowAction>
        <div></div>
        <div></div>
      </HeaderRowAction>
      <PlainteTabBody>
        <Table>
          <thead>
            <tr>
              <th>Dépositaire</th>
              <th>Incriminé</th>
              <th className="td-center">Raison du dépot</th>
              <th className="td-center">Corps de la plainte</th>
              <th className="td-center">Date</th>
              {IsCommandStaff() && <th>Action</th>}
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </PlainteTabBody>
    </PlainteTabWrapper>
  );
};

export default PlaintesTab;

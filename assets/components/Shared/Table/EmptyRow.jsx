import React from "react";
import { EmptyRowStyle } from "./Table.styled";

const EmptyRow = ({ message, colSpan }) => {
  console.log();
  return (
    <tr>
      <EmptyRowStyle colSpan={colSpan}>{message}</EmptyRowStyle>
    </tr>
  );
};

export default EmptyRow;

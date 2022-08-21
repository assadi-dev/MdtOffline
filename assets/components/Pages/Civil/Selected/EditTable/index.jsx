import React from "react";
import { Table, TableCard } from "./JusticeEditTable.styled";

const EditTable = ({ children }) => {
  return (
    <TableCard>
      <Table>{children}</Table>
    </TableCard>
  );
};

export default EditTable;

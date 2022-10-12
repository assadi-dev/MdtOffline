import React from "react";

const EmptyRow = ({ text, colSpan }) => {
  return (
    <tr className="emptyRow">
      <td colSpan={colSpan}>{text}</td>
    </tr>
  );
};

export default EmptyRow;

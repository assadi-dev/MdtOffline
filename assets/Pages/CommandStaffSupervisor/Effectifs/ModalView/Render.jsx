import React from "react";
import EditView from "./EditView";

const Render = ({ view, data, onClose }) => {
  const { agentId } = data;
  switch (view) {
    case "edit":
      return <EditView agentId={agentId} onClose={onClose} />;
      break;

    default:
      break;
  }
};

export default Render;

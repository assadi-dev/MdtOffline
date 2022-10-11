import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const useListAgent = () => {
  const agentSelector = useSelector((state) => state.AgentsReducer);
  return agentSelector.collections;
};

export default useListAgent;

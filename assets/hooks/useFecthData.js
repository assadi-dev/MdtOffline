import React, { useEffect, useState } from "react";
import Api from "../service/Api/Api";
import { setHeader } from "../service/Api/options";

const useFecthData = (url, token) => {
  const [state, setState] = useState({ data: [], error: [] });

  useEffect(() => {
    const headers = setHeader(token);
    Api.get(url, headers)
      .then((res) => {
        setState((prevState) => ({ ...prevState, data: res.data }));
      })
      .catch((err) => {
        if (err) {
          setState((prevState) => ({ ...prevState, error: err.ressponse }));
        }
      });
  }, []);

  const { data, error } = state;
  return { data, error };
};

export default useFecthData;

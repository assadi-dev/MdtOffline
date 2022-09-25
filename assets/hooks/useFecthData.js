import React, { useEffect, useState } from "react";
import Api from "../service/Api/Api";
import { setHeader } from "../service/Api/options";

const useFecthData = (url, token) => {
  const [state, setState] = useState({ data: [], error: [], loading });

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
      })
      .finally(() =>
        setState((prevState) => ({ ...prevState, loading: false }))
      );
  }, [url]);

  const { data, error, loading } = state;
  return { data, error, loading };
};

export default useFecthData;

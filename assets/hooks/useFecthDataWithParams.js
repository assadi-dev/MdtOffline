import React, { useEffect, useState } from "react";
import Api from "../service/Api/Api";
import { setHeader } from "../service/Api/options";

const useFecthDataWithParams = (url, params) => {
  const [state, setState] = useState({ data: [], error: [], loading });

  useEffect(() => {
    Api.get(url, { params })
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
  }, []);

  const { data, error, loading } = state;
  return { data, error, loading };
};

export default useFecthDataWithParams;

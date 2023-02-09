import React, { useEffect, useState } from "react";
import Api from "../service/Api/Api";
import { setHeader } from "../service/Api/options";

const useFecthData = (url) => {
  const [state, setState] = useState({ data: [], error: [], loading: true });

  useEffect(() => {
    const controller = new AbortController();
    Api.get(url, { signal: controller.signal })
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          data: res.data,
          loading: false,
        }));
      })
      .catch((err) => {
        if (err) {
          setState((prevState) => ({
            ...prevState,
            error: err.ressponse,
            loading: false,
          }));
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  const { data, error, loading } = state;
  return { data, error, loading };
};

export default useFecthData;

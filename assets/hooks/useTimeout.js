import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]).useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};

export default useTimeout;

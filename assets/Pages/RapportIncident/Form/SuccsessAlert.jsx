import React, { useEffect, useState } from "react";
import AlertSuccess from "../../../components/Shared/Alert/AlertSuccess";
import { AnimatePresence, motion } from "framer-motion";
import { delayExecution, sleep } from "../../../utils/timer";

const SuccsessAlert = ({ setShowAlert }) => {
  const [apparition, setAparition] = useState(true);

  const closeAlert = () => {
    setAparition(false);
  };

  useEffect(() => {
    delayExecution(closeAlert, 3000).finally(() => {
      setShowAlert(false);
    });
  }, []);

  return (
    <AnimatePresence>
      {apparition ? (
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          exit={{ y: -5, opacity: 0 }}
        >
          <AlertSuccess message={"Rapport Envoyé"} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SuccsessAlert;

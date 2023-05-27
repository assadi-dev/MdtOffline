import React from "react";
import RapportIncidentForm from "./Form/RapportIncidentForm";
import {
  HeaderRapportIncident,
  WrapperContent,
} from "./RapportIncident.styled";
import { motion } from "framer-motion";

const RapportIncident = () => {
  return (
    <WrapperContent>
      <HeaderRapportIncident>Créer un Rapport d'incident</HeaderRapportIncident>
      <motion.div
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.35 }}
      >
        <RapportIncidentForm />
      </motion.div>
    </WrapperContent>
  );
};

export default RapportIncident;

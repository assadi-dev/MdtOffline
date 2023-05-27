import React from "react";
import {
  HeaderDemandeComptabilite,
  WrapperContent,
} from "./DemandeComptabilite.styled";
import DemandeComptabiliteForm from "./DemandeComptabiliteForm ";
import { motion } from "framer-motion";

const DemandeComptabilite = () => {
  return (
    <WrapperContent>
      <HeaderDemandeComptabilite>
        Faire une demande de comptabilité
      </HeaderDemandeComptabilite>
      <motion.div
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.35 }}
      >
        <DemandeComptabiliteForm />
      </motion.div>
    </WrapperContent>
  );
};

export default DemandeComptabilite;

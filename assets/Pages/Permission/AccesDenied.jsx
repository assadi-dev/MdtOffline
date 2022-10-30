import React from "react";
import { useNavigate } from "react-router-dom";

const AccesDenied = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> AccesDenied</h1>
      <button style={{ color: "whitesmoke" }} onClick={() => navigate(-1)}>
        {" "}
        <p> Retour à la page precedente</p>
      </button>
    </div>
  );
};

export default AccesDenied;

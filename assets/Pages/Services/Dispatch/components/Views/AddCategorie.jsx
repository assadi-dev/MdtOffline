import React from "react";
import { AddCateegoriebutton } from "../../Dispatch.styled";
import MenuAdd from "./MenuAdd";
import { useState } from "react";

const AddCategorie = () => {
  const [show, setShow] = useState(false);
  const togglShow = () => {
    setShow((current) => (current = !current));
  };

  return (
    <>
      <AddCateegoriebutton onClick={togglShow}></AddCateegoriebutton>
      {show && <MenuAdd title={"Ajouter une categorie"} isShow={show} />}
    </>
  );
};

export default AddCategorie;

import React, { useEffect, useRef } from "react";
import { AddCateegoriebutton } from "../../Dispatch.styled";
import MenuAdd from "./MenuAdd";
import { useState } from "react";
import { AddCircleIconFill } from "../../../../../components/SVG";

const AddCategorie = ({ id }) => {
  const [show, setShow] = useState(false);
  const addButtonRef = useRef(null);
  const togglShow = (e) => {
    e.stopPropagation();
    setShow((current) => (current = !current));
  };

  const setCloseModal = () => {
    setShow((current) => (current = false));
  };

  useEffect(() => {
    if (!addButtonRef.current) {
      return;
    }

    const closeModal = (e) => {
      const target = e.target;
      let form = document.querySelector(".show");
      if (target.contains(form)) {
        setCloseModal();
      }
    };

    document.body.addEventListener("click", closeModal);
    let allCategorie = document.querySelectorAll(".add-categorie-btn");
    allCategorie.forEach((element) => {
      element.addEventListener("click", setCloseModal);
    });

    return () => {
      document.body.removeEventListener("click", closeModal);

      let allCategorie = document.querySelectorAll(".add-categorie-btn");
      allCategorie.forEach((element) => {
        element.removeEventListener("click", setCloseModal);
      });
    };
  }, [addButtonRef]);

  return (
    <>
      <AddCateegoriebutton
        className="add-categorie-btn"
        ref={addButtonRef}
        onClick={togglShow}
      >
        <AddCircleIconFill />
      </AddCateegoriebutton>
      <MenuAdd
        id={id}
        title={"Ajouter une categorie"}
        isShow={show}
        onCloseModal={setCloseModal}
      />
    </>
  );
};

export default AddCategorie;

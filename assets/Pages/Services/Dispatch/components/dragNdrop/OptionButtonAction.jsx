import React, { useEffect, useRef } from "react";
import { OptionVertical } from "../../../../../components/SVG";
import { OptionBtnDropList } from "../../Dispatch.styled";
import tinycolor from "tinycolor2";
import ModalSelect from "../Views/ModalSelect";
import { useState } from "react";

const OptionButtonAction = ({
  id,
  bacgroundColor,
  toggleModal,
  closeEditModal,
}) => {
  const optionDrop = useRef(null);
  bacgroundColor = bacgroundColor ? bacgroundColor : "#000";
  const color = tinycolor(bacgroundColor);
  const isDark = color.isDark();

  const [show, setShow] = useState(false);

  const toggleBtn = () => {
    closeEditModal();
    setShow((current) => (current = !current));
  };
  const closeModal = () => {
    setShow((current) => (current = false));
  };
  return (
    <>
      <OptionBtnDropList isDark={isDark} onClick={toggleBtn}>
        <OptionVertical />
      </OptionBtnDropList>
      <ModalSelect
        id={id}
        isShow={show}
        onCloseModal={closeModal}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default OptionButtonAction;

import React from "react";
import { ModalContainer, Overlay } from "./Modal.styled";

const Modal = ({ children, onClose, isOpen }) => {
  return (
    <Overlay isOpen={isOpen}>
      <ModalContainer isOpen={isOpen}>{children}</ModalContainer>{" "}
    </Overlay>
  );
};

export default Modal;

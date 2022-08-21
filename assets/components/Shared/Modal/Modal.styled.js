import styled from "styled-components";

export const ModalContainer = styled.div`
  width: fit-content;
  min-height: 120px;
  padding: 12px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: ${(props) =>
    props.isOpen
      ? "translateX(-50%) translateY(-50%)"
      : "translateX(-50%) translateY(0)"};
  transition: all 0.5s;
  @media screen and (min-width: 992px) {
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 666;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  opacity: ${(props) => (props.isOpen ? " 1 " : "0")};
  visibility: ${(props) => (props.isOpen ? " visible " : "hidden")};
  transition: all 0.5s;
`;

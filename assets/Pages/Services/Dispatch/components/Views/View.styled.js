import styled from "styled-components";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";

export const MenuAddContainer = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  background-color: #fff;
  color: var(--color-blue-dark);
  border-radius: 5px;
  padding: 0.3rem 1rem;
  min-height: 45px;
  right: 0;
  transform: translateX(50%) translateY(-105px);
  margin-top: 5px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease-in-out;
  z-index: -1;
`;

export const MenuAddSquadContainer = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  background-color: #fff;
  color: var(--color-blue-dark);
  border-radius: 5px;
  padding: 0.3rem 1rem;
  min-height: 45px;
  right: 0;
  transform: translateX(50%) translateY(-105px);
  margin-top: 5px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease-in-out;
  z-index: -1;
`;
export const DispatchAddSquadFormContainer = styled.form`
  width: 100%;
  background-color: transparent;
  fieldset {
    background-color: transparent;
    max-width: 100%;
    padding: 8px;
    border: 1px solid var(--color-lightBlue-secondary);
    border-radius: 8px;
  }
  legend {
    padding: 0 0.8rem;
  }

  .form-control {
    margin: 1.3rem 0;
    label {
      display: block;
      margin-bottom: 1px;
    }
    input[type="text"] {
      width: 100%;
      padding: 0.3rem;
      border-radius: 3px;
      background-color: var(--grey-color);
      :focus {
        border: 2px solid var(--color-blue-dark);
        background-color: transparent;
      }
    }

    textarea,
    select {
      width: 100%;
      border: 1px solid var(--color-lightBlue-secondary);
      border-radius: 3px;
    }
  }
`;

export const TitleMenu = styled.p`
  margin: 1rem auto;
  text-align: center;
  font-weight: bold;
`;

export const DispatchFormContainer = styled.form`
  width: 100%;
  background-color: transparent;
  fieldset {
    background-color: transparent;
    max-width: 100%;
    padding: 16px;
    border: 1px solid var(--color-lightBlue-secondary);
    border-radius: 8px;
  }
  legend {
    padding: 0 0.8rem;
  }

  .form-control {
    margin: 1.3rem 0;
    label {
      display: block;
      margin-bottom: 1px;
    }
    input[type="text"] {
      width: 100%;
      padding: 0.3rem;
      border-radius: 3px;
      background-color: var(--grey-color);
      :focus {
        border: 2px solid var(--color-blue-dark);
        background-color: transparent;
      }
    }
  }
`;

export const DispatchSubmitButton = styled.button`
  background-color: var(--color-blue-primary);
  margin: 1.2rem auto;
  width: 100%;
  border-radius: 5px;
  color: #fff;
  padding: 8px;
`;

export const ModalSelectContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;

  width: fit-content;
  background-color: #fff;
  color: var(--color-blue-dark);
  border-radius: 5px;
  padding: 1rem 1rem;
  min-height: 45px;
  right: 0;
  transform: translateX(50%) translateY(-28px);
  margin-top: 5px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease-in-out;
  z-index: -1;
  opacity: 0;
  .add {
    color: var(--green);
  }

  .edit {
    color: var(--color-blue-primary);
  }
  .delete {
    color: #ba5a3c;
  }
`;

export const MenuSelectBtn = styled.button`
  margin-bottom: 0.5rem;
  display: flex;
  margin-left: 1rem;
  align-items: center;
  svg {
    margin-right: 0.8rem;
    width: 15px;
    height: 15px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  :active {
    opacity: 0.3;
  }
`;

export const CallRadioViewOverlay = styled.div`
  min-height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  z-index: 78;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  overflow-x: hidden;

  @keyframes fadeUp {
    100% {
      transform: translateY(-55px);
    }
  }
`;
export const CallRadioViewBody = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  border-radius: 5px;
  width: calc(95vw);
  box-shadow: 0px 0px 10px 3px #2b7de9;
  margin: 0 auto;
  z-index: 55;
  transform: translateY(135px);
  min-height: 55vh;

  background-color: var(--color-blue-dark);
  padding: 15px;
  animation: fadeUp 0.25 ease-in 1s forwards;
`;
export const HeaderModalRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseBtn = styled(CloseModalBtn)`
  cursor: pointer;
  width: 35px;
  height: 35px;
  color: rgba(255, 255, 255, 0.4);

  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const CallListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 100%;
`;

export const ColList = styled.ul`
  width: 100%;
  font-size: 14px;

  li {
    transition: all 0.25s ease-in-out;
    position: relative;
    padding: 0.5rem;
    overflow: hidden;
    :before {
      content: "";
      position: absolute;
      background-color: var(--color-blue-opacity-50);
      color: #fff;
      top: 0;
      left: 0;
      bottom: 0;
      width: 0;
      transition: all 0.25s ease-in-out;
      z-index: -1;
    }
    :hover {
      font-size: 15px;
      :before {
        width: 100%;
      }
    }
  }
`;

export const Codetext = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

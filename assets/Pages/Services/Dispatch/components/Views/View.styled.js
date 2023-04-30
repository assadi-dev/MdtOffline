import styled from "styled-components";

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
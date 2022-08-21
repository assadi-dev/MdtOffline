import styled from "styled-components";
import CloseModalBtn from "../../../Shared/Modal/CloseModal";

export const FormContainer = styled.form`
  min-height: 300px;
  width: 350px;
  background: var(--background-color-dark);
  padding: 13px;
  border: 0.5px solid #2b7de950;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 5px #2b7de920;
  overflow-x: hidden;
  scrollbar-width: thin;

  @media (min-width: 992px) {
    width: 690px;
  }
  .form-control {
    margin-top: 1rem;
    margin-bottom: 0;
    padding-left: 12px;
    padding-right: 12px;
    option {
      color: #444;
    }
  }

  .btn {
    background-color: #2b7de9;
    padding: 15px 22px;
    width: fit-content;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  .formTitle {
    font-size: 18px;
    font-family: var(--font-title);
    font-weight: normal;
  }
`;

export const InputContainer = styled.div`
  margin: 18px 0;
  width: 100%;
  max-height: 75vh;
`;

export const CloseModal = styled(CloseModalBtn)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const RowModal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  width: 100%;
  justify-content: space-between;
  .col {
    width: 100%;
  }
`;

export const PreView = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const LabelStyled = styled.label`
  width: 80%;
  height: 80%;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

export const PrewiewPhoto = styled.div`
  border: 1px solid #2b7de980;
  border-radius: 5px;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  :active {
    border: 1px solid #2b7de9;
  }
  :hover {
    .remove {
      opacity: 1;
    }
  }
  .remove {
    color: red;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-15px) translateX(10px);
    opacity: 0;
    transition: all 0.3s;
    z-index: 10;
    cursor: pointer;
    :active {
      color: #fff;
    }
  }
`;

export const InputPhoto = styled.input`
  display: none;
  position: absolute;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 18px;
`;

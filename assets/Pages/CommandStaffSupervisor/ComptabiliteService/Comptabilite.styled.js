import styled from "styled-components";
import Input from "../../../components/Shared/Input";

export const ComptabiliteServiceTabWrapper = styled.div`
  padding: 1.2rem 2.3rem;
  padding-top: 2rem;
  .validatSwitchBtn {
    input:checked + .switch {
      background-color: var(--teal);
    }
  }
`;

export const HeaderRowAction = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(50px, 150px);
  height: 80px;
  align-items: center;
  width: 90%;
  margin: 2.8rem auto;

  .addBtn {
    justify-self: end;
  }
`;

export const ComptabiliteServiceTabBody = styled.div`
  padding-top: 1.2rem;
`;

export const ShowDocumentBtn = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  :hover {
    color: var(--color-blue-primary);
  }
  :active {
    opacity: 0.5;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const SelectButton = styled.button`
  margin-right: 18px;
  margin-bottom: 18px;
  background-color: #2b7de9;
  padding: 15px 22px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  opacity: 0.6;
  transition: all 0.35s;
  :hover {
    opacity: 1;
    box-shadow: 0px 0px 10px 3px #2b7de9;
  }
  :active {
    transform: scale(0.6);
  }
`;

export const FormContainer = styled.form`
  min-height: 300px;
  max-height: 82vh;
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

export const FormBodyContainer = styled.div`
  padding: 2rem;
  padding-bottom: 2rem;
  overflow-y: auto;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

export const FormControl = styled.div`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 2.3rem;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const FormBottomRow = styled.div`
  margin-top: 1rem;
  height: 80px;
`;

export const SubmitButton = styled.button`
  background-color: #2b7de9;
  padding: 15px 22px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  margin: auto;
`;

export const InputDateTime = styled(Input)``;

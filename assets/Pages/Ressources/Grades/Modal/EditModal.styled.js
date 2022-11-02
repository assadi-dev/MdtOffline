import styled from "styled-components";
import CloseModalBtn from "../../../../components/Shared/Modal/CloseModal";

export const EditGradeWrapper = styled.div`
  padding: 1.2rem 2.3rem;
  .validatSwitchBtn {
    input:checked + .switch {
      background-color: var(--teal);
    }
  }
`;

export const EditGradeBody = styled.div`
  padding-top: 1.2rem;
`;

export const ModalViewContainer = styled.form`
  width: 100%;
  min-height: 200px;
  background: var(--background-color-dark);
  padding: 13px;
  overflow-x: hidden;
  scrollbar-width: thin;

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
  padding: 10px 10px 10px 48px;
  position: relative;
  .formTitle {
    font-size: 18px;
    font-family: var(--font-title);
    font-weight: normal;
  }
`;

export const CloseModal = styled(CloseModalBtn)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const FormBodyContainer = styled.div`
  padding: 2rem;
  padding-bottom: 2rem;
  overflow-y: auto;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const FormControl = styled.div`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 1.2rem;
  :last-of-type {
    margin-bottom: 0;
  }

  input {
    :disabled {
      cursor: not-allowed;
    }
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
  font-family: var(--font-title);
`;

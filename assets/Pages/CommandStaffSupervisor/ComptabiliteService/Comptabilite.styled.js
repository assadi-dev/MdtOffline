import styled from "styled-components";
import CloseModalBtn from "../../../components/Shared/Modal/CloseModal";

export const ComptabiliteWrapper = styled.div`
  padding: 1.2rem 2.3rem;
  .validatSwitchBtn {
    input:checked + .switch {
      background-color: var(--teal);
    }
  }

  .HoursTitlepageHeader {
    font-family: var(--font-title);
    letter-spacing: 2px;
    font-weight: normal;
    width: fit-content;
    font-size: 1.8rem;
    margin: 0 1.8rem;
  }
`;

export const ComptabiliteBody = styled.div`
  padding-top: 1.2rem;
`;

export const ModalViewContainer = styled.form`
  width: 35rem;
  min-height: 200px;
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

export const HoursSheetHeaderRowBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    color: #fff;
    width: 40px;
    height: 40px;
    :active {
      opacity: 0.5;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const HoursSheetBody = styled.div`
  padding: 0 1rem;
  min-height: 100vh;
  width: 100%;
`;

export const HoursSheetRowAction = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(50px, 250px);
  height: 80px;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  .addBtn {
    justify-self: end;
  }
`;

export const ServiceStateText = styled.span`
  color: ${({ isActive }) => (isActive ? "#59ce8f" : "#BA5A3C")};
`;

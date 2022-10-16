import React from "react";
import styled from "styled-components";
import Input from "../../../components/Shared/Input";
import CloseModalBtn from "../../../components/Shared/Modal/CloseModal";

export const HoursSheetWrapper = styled.div`
  padding: 15px;
  .serviceActive {
    color: #59ce8f;
  }
`;

export const HoursSheetpageHeader = styled.div`
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  .HoursTitlepageHeader {
    font-family: var(--font-title);
    letter-spacing: 2px;
    font-weight: normal;
    width: fit-content;
    font-size: 1.8rem;
    margin: 0 1.8rem;
  }

  .totalHour {
    font-family: var(--font-title);
    letter-spacing: 2px;
    font-weight: normal;
    font-size: 1rem;
  }
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
  grid-template-columns: 1fr minmax(50px, 150px);
  height: 80px;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  .addBtn {
    justify-self: end;
  }
`;

export const Button = styled.button`
  background-color: #2b7de9;
  padding: 15px 22px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  font-family: var(--font-title);
  :active {
    opacity: 0.5;
  }
`;

export const TableCard = styled.div`
  padding: 12px;
  border-radius: 5px;
`;

export const HoursSheetTable = styled.table`
  border-spacing: 0 15px;
  border-collapse: separate;
  width: 100%;
  & thead tr th,
  & thead tr td,
  & tbody tr th,
  & tbody tr td {
    vertical-align: middle;
    border: none;
    text-align: left;
  }

  & thead tr th:last-of-type {
    text-align: center;
  }
  & tbody tr td:last-of-type {
    text-align: center;
  }

  & thead,
  & th,
  & td {
    padding: 0.8rem;
  }
  & th {
  }

  & tbody {
    border-spacing: 0 15px;
    border-collapse: separate;
    border-color: inherit;
  }

  & tbody tr {
    border-radius: 5px;
    background: var(--color-lightBlue-secondary-opacity-50);
    :hover {
      background: var(--color-lightBlue-secondary);
    }
  }
  & tbody tr td {
    background: var(--color-lightBlue-secondary-opacity-50);
  }

  & tbody tr td:first-child {
    border-radius: 5px 0 0 5px;
  }
  & tbody tr td:last-child {
    border-radius: 0 5px 5px 0;
  }

  & tbody tr td select {
    width: 100%;
    color: var(--color-white);
    text-align: center;
    background-color: transparent;
  }

  & tbody tr td input {
    background-color: var(--color-blue-dark);
    width: 50%;
    text-align: center;
    margin: 0 auto;
    border-radius: 5px;
    min-height: 22px;
    color: var(--color-white);
  }
  .td-center {
    text-align: center;
  }

  .emptyRow td {
    border-radius: 5px !important;
    text-align: center;
    font-size: 18px !important;
    padding: 14px 0;
  }
`;

export const HoursSheetTableAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .edit {
    color: var(--teal);
  }
  .delete {
    color: var(--danger-color);
  }
`;

export const OutlineBtnAction = styled.button`
  :active {
    opacity: 0.5;
  }

  width: 20px;
  height: 20px;
  margin-right: 0.8rem;
  :last-of-type {
    margin-right: 0;
  }
  svg {
    width: 20px;
    height: 20px;
  }
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
  font-family: var(--font-title);
`;

export const InputDateTime = styled(Input)`
  color: #fff;
`;

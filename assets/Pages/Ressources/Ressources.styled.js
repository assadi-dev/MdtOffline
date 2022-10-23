import React from "react";
import styled from "styled-components";
import SwitchButton from "../../components/Shared/SwitchButton";

export const HeaderRowAction = styled.div`
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

export const Table = styled.table`
  border-spacing: 0 15px;
  border-collapse: separate;
  width: 90%;
  margin: auto;
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
    font-weight: 300;
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
`;

export const TableAction = styled.div`
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

import styled from "styled-components";
import CloseModalBtn from "../Modal/CloseModal";

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

export const EmptyRowStyle = styled.td`
  text-align: center;
`;

export const HeadTitleView = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;
  padding: 5px 15px;
  & .closeBtn {
    position: absolute;
    right: 0;
    margin-right: 1rem;
    top: 0;

    :hover {
      span {
        color: rgba(255, 255, 255, 1);
      }
    }

    & span {
      color: rgba(255, 255, 255, 0.5);
      width: 25px;
      height: 25px;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  & .titleView {
    text-transform: uppercase;
    font-size: 16px;
    font-family: var(--font-title);
    text-align: center;
    padding: 0 15px;
    line-height: 30px;
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

export const ShowDocumentWrapper = styled.div`
  min-width: 350px;
  max-width: 100%;
  min-height: 120px;

  border-radius: 5px;
  border: solid 1px var(--color-blue-primary);
  background-color: var(--color-blue-dark);
  padding: 15px;
  position: relative;

  @media screen and (min-width: 992px) {
    width: 960px;
  }
`;

export const TextContent = styled.div`
  padding: 12px;
  max-height: 35vh;
  overflow-y: auto;
  p {
    width: 100%;
    margin: 1rem auto;
    line-height: 2em;
    @media screen and (min-width: 992px) {
      width: 80%;
    }
  }
`;

export const TextFormat = styled.div`
  width: fit-content !important;
  margin-left: auto;
  margin-right: auto;
  p {
    width: fit-content;
  }
`;

export const ActionRowbtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1.5rem auto;

  .btn {
    padding: 12px 22px;
    max-width: fit-content;
    font-family: var(--font-title);
    font-weight: 100;
    font-size: 1rem;
    background-color: #2b7de9;
    :active {
      opacity: 0.3;
    }
    @media (min-width: 668px) {
      font-size: 1.5rem;
    }
  }

  .btn:first-of-type {
    margin-right: 2rem;
  }
  .delete {
    background-color: var(--red);
  }
`;

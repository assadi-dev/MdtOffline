import styled from "styled-components";
import CloseModalBtn from "../../../components/Shared/Modal/CloseModal";

export const RapportRookieWrapper = styled.div`
  padding: 1.2rem 2.3rem;
  .validatSwitchBtn {
    input:checked + .switch {
      background-color: var(--teal);
    }
  }
`;

export const RapportRookieBody = styled.div`
  padding-top: 1.2rem;
`;

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

/**
 * Delete Modal
 */

export const DeleteView = styled.div`
  min-height: 150px;
  width: 280px;
  background: var(--background-color-dark);
  padding: 18px 13px;
  border: 0.5px solid #2b7de950;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 5px #2b7de920;
  max-height: 80vh;
  overflow-y: auto;

  @media (min-width: 992px) {
    min-width: 768px;
  }
  & .form-control {
    margin-top: 1rem;
    margin-bottom: 0;
    padding-left: 12px;
    padding-right: 12px;
    option {
      color: #444;
    }
  }

  & .btn {
    background-color: #2b7de9;
    padding: 12px 22px;
    max-width: fit-content;
    font-family: var(--font-title);
    font-weight: 100;
    font-size: 12px;
    transition: all 0.35s;
    :active {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }
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

export const DeleteSectionbutton = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-gap: 25px;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  .col-validate {
    justify-self: flex-end;
    align-self: center;
    .btn {
      background-color: var(--red);
      :active {
        opacity: 0.5;
      }
    }
  }
  .col-cancel {
    justify-self: flex-start;
    align-self: center;
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

export const AlertInfo = styled.div`
  width: 80%;
  border-radius: 8px;
  border: 1px solid var(--danger-color);
  color: var(--danger-color);
  background-color: #f8d7da;
  margin: 1rem auto;
  padding: 0.5rem 1.3rem;
`;

export const HeaderInfo = styled.div`
  width: 100%;
  text-align: center;
`;

export const AlertInfoIcon = styled.span`
  width: 35px;
  height: 35px;
  svg {
    width: 35px;
    height: 35px;
  }
`;

export const AlertInfoBody = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const ShowRapportbtn = styled.span`
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

/**Modal */

export const ShowRapportIncidentView = styled.div`
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

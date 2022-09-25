import styled from "styled-components";

export const View = styled.div`
  min-height: 300px;
  width: 350px;
  background: var(--background-color-dark);
  padding: 18px 13px;
  border: 0.5px solid #2b7de950;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 5px #2b7de920;
  max-height: 80vh;
  overflow-y: auto;

  @media (min-width: 992px) {
    min-width: 1124px;
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
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    margin-right: 1rem;
    top: 0;

    :hover {
    }
  }
  & .titleView {
    text-transform: uppercase;
    font-size: 16px;
    font-family: var(--font-title);
  }
`;

export const FooterSectionButton = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: center;
  margin-top: 1.3rem;
  align-items: flex-end;
`;

//Style views render

export const BorderZone = styled.div`
  border-radius: 10px;
  padding: 12px;
  height: 100px;
  border: 1px solid var(--color-blue-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.2rem;
  & .label {
    margin-bottom: 0.5rem;
  }
  & .mount {
    font-family: var(--font-title);
    font-weight: 200;
    font-size: 18px;
  }
`;

export const TableViewPresentation = styled.table`
  width: 100%;
  color: #fff;
  text-align: center;
  .lieuxRemplissage {
    min-width: 100px;
  }

  input {
    background-color: var(--color-lightBlue-secondary);
    width: 90%;
    border-radius: 5px;
    min-height: 25px;
    padding: 5px 15px;
    color: var(--color-white);
  }

  td {
    padding: 5px 12px;
  }

  .center {
    text-align: center;
  }
  .entreCellule {
    text-align: center;
  }
`;

//Style view modal top button

export const RowCardTopButton = styled.div`
  min-height: 100px;
  max-height: 380px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  padding: 5px 10px;
  grid-gap: 18px;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 0.5fr));
  }
`;

export const FooterCardTopButton = styled.div`
  padding: 18px 5px;
  & .titleFooterTopButton {
    text-transform: uppercase;
    font-size: 16px;
    font-family: var(--font-title);
  }
`;

export const FormBodyTopBtn = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`;

export const FooterSectionSubmit = styled.div`
  padding: 18px 0 0 10px;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 14px;
  margin-bottom: 1rem;
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

export const DeleteHeadTitleView = styled.div`
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

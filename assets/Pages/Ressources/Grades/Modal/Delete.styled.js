import styled from "styled-components";
import CloseModalBtn from "../../../../components/Shared/Modal/CloseModal";

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
    font-size: 1rem;
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

export const BodyDeleteContent = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2rem;
`;

export const CloseModal = styled(CloseModalBtn)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

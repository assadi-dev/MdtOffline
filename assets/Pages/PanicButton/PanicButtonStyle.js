import styled from "styled-components";

export const PanicButtonContainer = styled.div`
  width: 100%;
  min-height: 25vh;

  padding: 1rem;
  @media screen and (min-width: 992px) {
    padding: 0 1.8rem;
  }
`;

export const PanicButtonHeader = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
  text-align: center;
  .title {
    font-weight: bold;
    font-size: 1.8rem;
  }
`;

export const PanicButtonBody = styled.div``;

//Table

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

//Loader

export const LoadingTabContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  min-height: 100px;
  max-height: 280px;
  margin-top: 18px;
  display: grid;
  place-items: center;
`;
export const LoadingTabBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  p {
    margin-top: 1.3rem;
  }
`;

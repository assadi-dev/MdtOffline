import styled from "styled-components";

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

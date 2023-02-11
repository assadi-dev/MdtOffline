import styled from "styled-components";

export const PlainteTabWrapper = styled.div`
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
  margin: 1rem auto;

  .addBtn {
    justify-self: end;
  }
`;

export const PlainteTabBody = styled.div`
  padding-top: 1.2rem;
`;

import styled from "styled-components";

export const AccountManagerWrapper = styled.div`
  padding: 1.2rem 2.3rem;
  .validatSwitchBtn {
    input:checked + .switch {
      background-color: var(--teal);
    }
  }
`;

export const AccountManagerBody = styled.div`
  padding-top: 1.2rem;
`;

import styled from "styled-components";

export const BouncetextContainer = styled.p`
  @keyframes Bounce {
    from {
      opacity: 0;
    }

    to {
      transform: scale(0.6);
      opacity: 1;
    }
  }
`;

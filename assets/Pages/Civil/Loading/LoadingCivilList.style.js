import styled from "styled-components";

export const LoadinCivilListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 1rem;
  width: 100%;
  height: 100vh;
  .spinner-content {
    margin-bottom: 5rem;
  }
`;

export const Spinner = styled.div`
  width: 8rem;
  height: 8rem;
`;

export const NoFoundCivilSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  p {
    line-height: 2.5rem;
    @media screen and (min-width: 768px) {
      white-space: nowrap;
    }
  }
`;

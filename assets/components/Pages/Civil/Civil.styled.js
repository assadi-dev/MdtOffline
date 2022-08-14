import styled from "styled-components";

export const CivilWrapper = styled.div`
  max-width: 1024px;
`;

export const ActionRow = styled.div`
  margin: 14px auto;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 18px;

  & .add-civil {
    background: var(--color-primary-button);
    color: #fff;
    padding: 10px;

    span,
    svg {
      width: 20px;
      height: 20px;
    }
    span {
      margin-right: 3px;
    }

    @media screen and (min-width: 768px) {
      margin-left: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 180px;
    grid-row-gap: 18px;
    max-width: 100%;
  }
`;

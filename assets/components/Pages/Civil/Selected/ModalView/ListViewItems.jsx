import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  padding: 15px 10px;
  border-bottom: 1px solid var(--color-blue-dark);
`;

export const ListContent = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  .row {
    padding: 0 18px;
    width: 100%;
    align-items: center;
    font-size: 12px;
    font-weight: 300;
  }

  .row:first-of-type,
  .row:last-of-type {
    justify-content: flex-end;
  }
`;

export const NumberView = styled.p`
  font-weight: normal;
  font-family: var(--font-title);
  text-transform: uppercase;
  font-size: 12px;
`;

export const TitleItemView = styled.p`
  font-weight: bold;
`;

export const AgentItemView = styled.p`
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  .agent {
    font-weight: bold;
  }
`;

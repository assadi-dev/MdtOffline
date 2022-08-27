import styled from "styled-components";

export const ListContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 10px;
  border-bottom: 1px solid var(--color-blue-dark);
  overflow-x: hidden;
  font-weight: 100;
`;

export const ListContent = styled.div`
  font-size: 12px;
  padding: 0px 18px;
  width: 100%;
`;

export const NumberView = styled.p`
  text-align: right;
  font-weight: normal;
  font-family: var(--font-title);
  text-transform: uppercase;
  font-size: 12px;
  color: var(--color-white);
`;

export const TicketView = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 0.3rem;
  color: var(--color-white);
`;

export const TitleItemView = styled.p`
  font-weight: bold;
  color: var(--color-white);
`;

export const AgentItemView = styled.p`
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  .agent {
    font-weight: bold;
    color: var(--color-white);
  }
`;

export const RowListItemView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "a b";
  align-items: center;
`;

export const DateItemView = styled.p`
  font-weight: normal;
  text-align: right;
  font-family: var(--font-title);
  font-size: 10px;
  color: var(--color-white);
`;
export const AmendItemView = styled.p`
  font-weight: bold;
  font-family: var(--font-title);
  font-size: 10px;
  color: var(--color-white);
`;

export const UpListView = styled.p`
  text-align: right;
  font-family: var(--font-title);
  font-weight: bold;
  font-size: 10px;
  color: var(--color-white);
`;

export const ListViewOffence = styled.div`
  line-height: 18px;
  margin-bottom: 0.3rem;
  & ul {
    width: 100%;
    margin-left: 1rem;
    li {
      list-style: disc;
    }
  }
`;

export const ClotureButton = styled.button`
  border-radius: 100px;
  background-color: var(--color-blue-primary);
  color: var(--color-white);
  font-size: 10px;
  font-family: var(--font-title);
  padding: 8px 15px;
  font-weight: 100;
  width: fit-content;
  margin: 15px auto;
  letter-spacing: 2px;
  transition: all 0.35s;
  :active {
    opacity: 0.5;
  }
`;

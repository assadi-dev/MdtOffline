import styled from "styled-components";

export const DispatchWrapper = styled.div`
  padding: 1.8rem 1rem;
  margin-top: 2rem;
  width: 100%;
`;

export const DispatchBackgroundLayout = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-lightBlue-secondary-opacity-50);
  min-height: 75vh;
  padding: 10px;
`;

export const DropContainerlistCard = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: fit-content;
`;

export const HeaderSection = styled.div`
  margin: 1rem;
  margin-bottom: 3.5rem;
  .title {
    @media screen and (min-width: 992px) {
      font-size: 2.2rem;
      letter-spacing: 2px;
    }
  }
`;

export const DropItemContainerCard = styled.li`
  border-radius: 10px;
  background: rgba(19, 27, 38, 0.5);
  min-width: 250px;
  max-width: 350px;
  height: fit-content;
  flex: 1 0;
  margin-right: 1rem;
  padding: 1.2rem 0;
  :last-of-type {
    margin-right: 0;
  }
`;

export const LabeLSectionContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

export const LabeLSectionHeader = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  background: ${({ background }) =>
    background ? background : "var(--color-blue-dark)"};
  color: ${({ color }) => (color ? color : "var(--text-color-primary)")};
  font-weight: bold;
`;
export const LabeLSectionBody = styled.div`
  width: 100%;
  background: transparent;
  padding: 0 0.3rem;
  min-height: 3px;
`;

export const AgentCardItemContainer = styled.div`
  margin: 0.3rem 0;
  width: 100%;
`;
export const AgentCardItemBody = styled.div`
  border-radius: 3px;
  padding: 1rem;
  width: 100%;
  background: ${({ background }) =>
    background ? background : "var(--color-blue-dark)"};
  color: ${({ color }) => (color ? color : "var(--text-color-primary)")};
  font-weight: bold;
  font-size: 1.2rem;
`;

export const AgentCardItemGrade = styled.div`
  padding: 1rem 1.3rem;
  width: fit-content;
  color: #fff;
  border-radius: 5px;
  background-color: var(--color-blue-dark);
`;

export const AgentCardItemName = styled.p`
  margin-top: 1rem;
  color: var(--color-blue-dark);
  font-weight: bold;
  font-size: 1.4rem;
`;

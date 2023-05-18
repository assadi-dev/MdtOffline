import styled from "styled-components";

export const DispatchWrapper = styled.div`
  padding: 1.8rem 1rem;
  margin-top: 2rem;
  width: 100%;

  .show {
    visibility: visible;
    opacity: 1;
    transform: translateX(50%) translateY(0);
    z-index: 25;
  }
  .show-option {
    visibility: visible;
    opacity: 1;
    transform: translateX(50%) translateY(0);
    z-index: 25;
    margin-top: 5px;
  }

  .isDragging {
    border: 0.5px solid #2b7de950;
    box-shadow: 1px 1px 5px 3px #11111120;
    transform: rotate(5deg);
  }

  .dragOver {
    width: 90%;
    margin: 1rem auto;
    border-radius: 5px;
    background-color: #2b7de925;
    //box-shadow: 1px 1px 3px 2px #2b7de920;
  }
`;

export const DispatchBackgroundLayout = styled.div`
  resize: vertical;
  width: 75vw;
  overflow-x: auto;
  border-radius: 8px;
  background-color: var(--color-lightBlue-secondary-opacity-50);
  min-height: 75vh;
  padding: 10px;
  font-size: 1rem;
  @media screen and (min-width: 992px) {
    font-size: 1.2rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  :hover {
    ::-webkit-scrollbar {
      display: initial;
    }
  }
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
  position: relative;
  .title {
    width: 88%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.2rem;

    @media screen and (min-width: 992px) {
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
  }
`;

export const DropItemContainerCard = styled.li`
  border-radius: 10px;
  background: rgba(19, 27, 38, 0.5);
  min-width: 200px;
  max-width: 260px;
  height: fit-content;
  flex: 1 0;
  margin-right: 1rem;
  padding: 1.2rem 0;
  :last-of-type {
    margin-right: 0;
  }

  @media screen and (min-width: 992px) {
    max-width: 100%;
  }
`;

export const LabeLSectionContainer = styled.div`
  margin: 0.3rem 0;
  width: 100%;
`;

export const LabeLSectionHeader = styled.div`
  position: relative;
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
  font-size: 1rem;
  user-select: none;
  @media screen and (min-width: 992px) {
    font-size: 1.2rem;
  }
`;
export const AgentCardItemBody = styled.div`
  border-radius: 3px;
  padding: 1rem;
  width: 100%;
  font-weight: bold;
  background: ${({ background }) =>
    background ? background : "var(--color-blue-dark)"};
  color: ${({ color }) => (color ? color : "var(--text-color-primary)")};
`;

export const AgentCardItemGrade = styled.div`
  padding: 0.4rem 1rem;
  width: fit-content;
  color: #fff;
  border-radius: 5px;
  background-color: var(--color-blue-dark);
  font-size: 1rem;
`;

export const AgenSquadtCardItemBody = styled.div`
  position: relative;
  border-radius: 3px;
  padding: 0.5rem;
  width: 100%;
  font-weight: bold;
  background: var(--grey-color);
  color: var(--background-color-dark);
  min-height: 100px;
  max-height: 150px;
`;

export const AgenSquadtCardItemBottom = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  align-items: center;
  //position: absolute;
  bottom: 3px;
  right: 5px;
  margin-top: 12px;
  grid-template-columns: repeat(3, 30px);
  grid-auto-rows: auto;
  grid-template-areas: "a a a b c";
  .grid-a {
    grid-area: a;
  }
  .grid-b {
    grid-area: b;
  }
  .grid-c {
    grid-area: c;
  }
`;

export const AgentSquadCardTypingContainer = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  padding: 5px;
  background-color: rgba(111, 111, 111, 0.15);
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const AgentSquadCardBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  padding: 5px;
  background-color: rgba(111, 111, 111, 0.4);
  svg {
    width: 100%;
    height: 100%;
  }

  :hover {
    background-color: var(--background-color-dark);
    color: var(--text-color-primary);
  }
  :active {
    opacity: 0.3;
  }
`;

export const AgentCardItemName = styled.p`
  margin-top: 1rem;
  color: var(--color-blue-dark);
  font-weight: bold;
`;

export const AgentCardItemNote = styled.p`
  color: var(--color-blue-dark);
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const AgentCardItemRow = styled.div`
  display: flex;
  gap: 3px;
`;

export const AgentCardStatus = styled.div`
  padding: 0.4rem 1rem;
  width: fit-content;
  color: #fff;
  border-radius: 5px;
  background-color: var(--color-blue-dark);
  font-size: 1rem;
  background: ${({ background }) => (background ? background : "var(--green)")};
`;

export const AddCategoriebutton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 100px;
  color: var(--color-blue-primary);
  position: absolute;
  right: 0;
  top: 50%;
  opacity: 0.5;
  transform: translateY(-50%);
  transition: all 0.35s ease-in;
  svg {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  :hover {
    transform: translateY(-50%) scale(1.2);
    opacity: 1;
  }
  :active {
    opacity: 0.3;
  }
`;
export const OptionBtnDropList = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 100px;
  color: var(--color-blue-primary);
  position: absolute;
  right: 5px;
  top: 50%;

  transform: translateY(-50%);
  transition: all 0.35s ease-in;
  color: ${({ isDark }) => (isDark ? "#fff" : "var(--background-color-dark)")};
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  :hover {
    background-color: ${({ isDark }) =>
      isDark
        ? "var(--color-lightBlue-secondary)"
        : "var(--background-color-dark)"};
    color: #fff;
  }
  :active {
    opacity: 0.3;
  }
`;

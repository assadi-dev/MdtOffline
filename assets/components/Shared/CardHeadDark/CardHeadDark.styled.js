import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  border: 1px solid var(--color-blue-primary);
  background: var(--color-lightBlue-secondary);
  position: relative;
  margin: 18px 0;
  overflow: hidden;
  filter: drop-shadow(0px 4px 20px rgba(43, 125, 233, 0.1));
  @media screen and (min-width: 992px) {
    max-width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  }
`;

export const CardHeader = styled.div`
  min-height: 24px;
  position: relative;
  background: var(--color-blue-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 15px;
  font-family: var(--font-title);
  font-weight: 100;
  letter-spacing: 2px;

  @media screen and (min-width: 992px) {
    padding: 22px;
    min-width: 320px;
    font-size: 18px;
  }
`;

export const IconButton = styled.span`
  margin: 0;
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  color: var(--color-blue-primary);
  transition: all 0.35s;
  z-index: 25;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  :active {
    opacity: 0.5;
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;

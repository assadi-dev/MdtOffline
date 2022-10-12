import { Link } from "react-router-dom";
import styled from "styled-components";

const colorDefault = "rgba(255, 255, 255, 0.1)";
const errorColor = "var(--red)";

export const AccountNoActivateWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  border-radius: 10px;
`;

export const AccountNoActivateHeader = styled.div`
  margin-top: 3.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  justify-content: center;
  width: 45rem;
  min-height: fit-content;
  text-align: center;
  background: rgba(23, 23, 23, 0.8);
  box-shadow: 0px 0px 15px 1px ${colorDefault};
  padding: 1.8rem 3em;

  svg {
    width: 110px;
    height: 110px;
  }
`;

export const ImportantMessage = styled.h2`
  font-size: 1.3rem;
  margin: 1.5rem auto;
  font-family: var(--font-title);
  word-spacing: 3px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  line-height: 22px;
`;
export const FooterAccountNoActivate = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const BackBtn = styled(Link)`
  width: fit-content;
  padding: 12px 15px;
  border-radius: 5px;

  background-color: var(--color-blue-primary);
  color: var(--white);
  margin: 1.2rem auto;
  transition: all 0.35s;
  :hover {
    box-shadow: 0px 0px 15px 3px rgba(43, 125, 233, 0.5);
  }
  :active {
    background-color: rgba(43, 125, 233, 0.5);
  }
`;

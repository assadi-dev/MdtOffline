import styled from "styled-components";

export const ForgotenPasswordWrapper = styled.div`
  padding: 2.3rem 1.3rem;
`;

export const ForgottenPasswordBody = styled.div`
  margin-top: 1.5rem;
  .isCopy {
    :after {
      animation: 0.3s showTooltipCopy ease-in-out forwards;
    }
    @keyframes showTooltipCopy {
      to {
        opacity: 1;
        width: fit-content;
        visibility: visible;
        z-index: 25;
        padding: 1rem 1.3rem;
      }
    }
  }
`;

export const ClipboardCopy = styled.div`
  position: relative;
  display: grid;
  width: 35px;
  height: 35px;
  place-items: center;
  border: 1px solid var(--color-white);
  border-radius: 5px;
  svg {
    width: 16px;
    height: 20px;
  }
  cursor: pointer;
  :hover {
    background-color: var(--color-blue-primary);
    border: none;
  }
  :active {
    background-color: transparent;
  }
  :after {
    content: "liens copié";
    position: absolute;
    bottom: 0;
    top: 0;
    padding: 0;
    background-color: var(--color-white);
    color: #444;
    font-size: inherit;
    width: 0;
    white-space: nowrap;
    display: flex;
    align-items: center;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.45s;
  }
`;

export const GeneratLinkBtnWrapper = styled.button`
  white-space: nowrap;
  font-size: inherit;
  background-color: var(--teal);
  padding: 1rem 1.3rem;
  width: fit-content;
  color: var(--background-color-dark);
  border-radius: 5px;
  :active {
    opacity: 0.3;
  }
`;

export const RowLink = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 1.8rem;
    max-width: 75%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

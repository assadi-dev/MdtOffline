import styled from "styled-components";

const avatarWidth = "50px";
const chevronWidth = "20px";

export const ServiceButton = styled.span`
  width: ${avatarWidth};
  height: ${avatarWidth};
  margin: 0 1.3rem;
  color: ${(props) => (props.active ? "#59CE8F" : "#666")};
  cursor: pointer;
  transition: all 0.35s;
  svg {
    width: ${avatarWidth};
    height: ${avatarWidth};
    transition: all 0.35s;
  }
  &:hover {
    svg {
      color: #59ce8f;
    }
  }
  &:active {
    transform: scale(1.2);
  }
`;

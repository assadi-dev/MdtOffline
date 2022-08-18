import styled from "styled-components";

export const Circle = styled.button`
  border-radius: 100%;
  background: var(--color-primary-button);
  position: relative;
  display: grid;
  place-items: center;
  padding: 18px;
  overflow: hidden;
  transition: all 0.35s;
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2.3rem;
  display: grid;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

export const HeaderRowPage = styled.div`
  margin: 2rem auto;

  .title {
    font-family: var(--font-title);
    font-size: 8rem;
  }
`;

export const DescriptionRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoBackBtn = styled.button`
  background-color: #2b7de9;
  padding: 15px 22px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  font-family: var(--font-title);
  :active {
    opacity: 0.5;
  }
`;

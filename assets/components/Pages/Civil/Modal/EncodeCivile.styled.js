import styled from "styled-components";

export const FormContainer = styled.form`
  min-height: 300px;
  width: 350px;
  background: var(--background-color-dark);
  padding: 13px;
  border: 0.5px solid #2b7de950;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 5px #2b7de920;
  overflow-x: hidden;
  @media (min-width: 992px) {
    width: 690px;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  .formTitle {
    font-size: 18px;
    font-family: var(--font-title);
    font-weight: normal;
  }
`;

export const InputContainer = styled.div`
  margin: 18px 0;
  width: 100%;
`;

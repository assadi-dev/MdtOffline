import styled from "styled-components";

export const ResetPasswordContainer = styled.div`
  width: 100%;
  padding-top: 11rem;
  margin: 0 auto;
  @media screen and (min-width: 668px) {
    width: 70vw;
  }
`;

export const ResetPasswordBody = styled.div`
  margin: 11rem auto;
  @media (min-width: 668px) {
    max-width: 25vw;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 11rem;
  height: 11rem;
`;

export const HeaderTitle = styled.div`
  margin: 3rem auto;
  .title {
    text-align: center;
    font-family: var(--font-title);
  }
`;
export const FormContainer = styled.form`
  margin-top: 18px;
`;

/***Form */

export const SubmitButton = styled.button`
  background-color: #2b7de9;
  padding: 15px 22px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  margin: auto;
  font-family: var(--font-title);
  :active {
    opacity: 0.3;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 2rem;
`;

export const FormControl = styled.div`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 2.3rem;
  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const FormBottomRow = styled.div`
  margin-top: 1rem;
  min-height: 20px;
  display: flex;
  justify-content: center;
`;

export const ErrorSection = styled.div`
  margin: 1rem 0 2rem 0;
  .error {
    color: var(--danger-color);
  }
`;

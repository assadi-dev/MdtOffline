import styled from "styled-components";

export const HeaderRapportIncident = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2.5rem;
  font-family: var(--font-title);
  font-weight: normal;
  font-size: 1.3rem;
`;

export const WrapperContent = styled.div`
  width: 100%;

  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
`;

export const RapportIncidentFormContent = styled.form`
  padding: 35px 22px;
  color: #fff;
  border: 1px solid var(--color-blue-primary);
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

export const FormControl = styled.div`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 2.3rem;
  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    width: 68%;
  }
`;

export const FormBottomRow = styled.div`
  margin-top: 1rem;
  height: 80px;
`;

export const SubmitButton = styled.button`
  background-color: #2b7de9;
  padding: 15px 22px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
`;

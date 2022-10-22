import styled from "styled-components";
import AlertError from "../../../components/Shared/Alert/AlertError";
import CloseModalBtn from "../../../components/Shared/Modal/CloseModal";
import userImg from "../../../ressources/img/user.jpg";

export const EffectifWrapper = styled.div`
  padding: 1.2rem 2.3rem;
  .validatSwitchBtn {
    input:checked + .switch {
      background-color: var(--teal);
    }
  }
`;

export const EffectifBody = styled.div`
  padding-top: 1.2rem;
`;

export const ModalViewContainer = styled.form`
  width: 35rem;
  min-height: 200px;
  background: var(--background-color-dark);
  padding: 13px;
  border: 0.5px solid #2b7de950;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 5px #2b7de920;
  overflow-x: hidden;
  scrollbar-width: thin;
  @media (min-width: 992px) {
    width: 690px;
  }
  .form-control {
    margin-top: 1rem;
    margin-bottom: 0;
    padding-left: 12px;
    padding-right: 12px;
    option {
      color: #444;
    }
  }

  .btn {
    background-color: #2b7de9;
    padding: 15px 22px;
    width: fit-content;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  padding: 10px 10px 10px 48px;
  position: relative;
  .formTitle {
    font-size: 18px;
    font-family: var(--font-title);
    font-weight: normal;
  }
`;

export const CloseModal = styled(CloseModalBtn)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const FormBodyContainer = styled.div`
  padding: 2rem;
  padding-bottom: 2rem;
  overflow-y: auto;
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

  input {
    :disabled {
      cursor: not-allowed;
    }
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
  margin: auto;
  font-family: var(--font-title);
`;

export const RowInput = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  justify-content: flex-end;
  grid-template-areas: "b" "a";
  margin-bottom: 2.3rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    justify-content: flex-start;
    grid-template-areas: "a b";
  }
`;

export const ColStart = styled.div`
  grid-area: a;
`;

export const ColEnd = styled.div`
  grid-area: b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhotoAgentContainer = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    max-height: 80%;
    width: 200px;
    margin: 0;
  }
  background-position: center;
  position: relative;
`;

export const PhotoAgent = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-block;
  background-image: url(${({ src }) => (src ? src : userImg)});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: 0 auto;
  border: 1px solid var(--color-blue-primary);
  border-radius: 5px;
  overflow: hidden;
  filter: drop-shadow(0px 3px 10px var(--color-blue-opacity-50));
  & input {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  cursor: pointer;
`;

export const ErrorCustomAlert = styled(AlertError)`
  min-height: 35px;
  align-items: center;
  max-height: 45px;
  margin: 0 auto;
`;

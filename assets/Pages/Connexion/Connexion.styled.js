import styled from "styled-components";
import backgroundImage from "../../ressources/img/backgroundConnexion.jpg";
import ShowpasswordBtn from "../../components/Shared/Input/ShowpasswordBtn";
import CloseModalBtn from "../../components/Shared/Modal/CloseModal";

const colorDefault = "rgba(255, 255, 255, 0.3)";
const errorColor = "var(--red)";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow-x: hidden;
  background-image: linear-gradient(
      rgba(19, 27, 38, 0.3),
      rgba(19, 27, 38, 0.8)
    ),
    url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & .mb-signIn {
    margin-bottom: 1.8rem;
  }
  & .error {
    border: 1px solid ${errorColor};
    box-shadow: 0px 0px 10px 0px ${errorColor};
  }

  .slideRight {
    transform: translateX(-50px);
    opacity: 0;
    visibility: hidden;
    animation: 0.35s slideRight ease-in forwards;
  }

  @keyframes slideRight {
    to {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const FooterConnexion = styled.div`
  margin-top: 2.2rem;
  & .clikable {
    cursor: pointer;
    color: var(--color-blue-primary);
  }
  & .row-center {
    display: flex;
    justify-content: center;
  }
`;

export const CardConnexion = styled.div`
  width: 52rem;
  min-height: 400px;
  padding: 18px;
  border-radius: 10px;
  background: rgba(23, 23, 23, 0.8);
  box-shadow: 0px 0px 15px 1px ${colorDefault};
  position: relative;
`;

export const CardConnexionHeader = styled.div`
  margin: 1.8rem 0;
  display: flex;
  justify-content: center;
  & .title {
    font-size: 22px;
    font-family: var(--font-title);
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
export const CardConnexionBody = styled.div`
  margin-top: 55px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`;

//Input Style

export const InputContainer = styled.div`
  position: relative;
  & span:first-of-type {
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    color: ${colorDefault};
    & svg {
      width: 20px;
      height: 20px;
    }
  }

  & input {
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    padding: 10px 10px 10px 45px;
    border-radius: 5px;
    width: 100%;
    transition: all 0.35s;
    &:focus {
      border: 1px solid #2b7de9;
      box-shadow: 0px 0px 10px 0px #2b7de950;
    }
    outline: #2b7de9;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 16px;
    @media screen and (min-width: 992px) {
      min-width: 280px;
    }
  }
`;

export const ShowpasswordToggle = styled(ShowpasswordBtn)`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${colorDefault};
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TextError = styled.div`
  color: ${errorColor};

  font-size: 14px;
  overflow: hidden;
  padding: 12px 0 0;
  position: relative;
  p {
    transform: translateY(-100px);
    animation: 0.3s slideDown forwards;
    opacity: 0;
    visibility: hidden;

    @keyframes slideDown {
      to {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const CardFooterConnexion = styled.div`
  margin-top: 15px;
  .action-row {
    display: flex;
    justify-content: center;
    min-height: 30px;
  }
  .btn {
    background-color: var(--color-blue-primary);
    padding: 10px 15px;
    width: fit-content;
    height: fit-content;
  }
`;

export const InputAnimation = styled.div`
  transform: translateX(-50px);
  opacity: 0;
  visibility: hidden;
  animation-delay: ${({ delay }) => delay || 0} !important;
  animation: 0.35s slideRight linear forwards;

  @keyframes slideRight {
    to {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Loadericon = styled.span`
  width: 50px;
  height: 50px;
  svg {
    width: 50px;
    height: 50px;
    margin: auto;
    display: block;
    shape-rendering: auto;
  }
`;

export const SloganContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  height: 100%;
  text-align: center;
`;

export const Slogan = styled.div`
  position: absolute;
  font-size: 40px;
  bottom: 50px;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-35%);
  width: 100%;
  font-family: var(--font-alexandra);
  word-spacing: 12px;
  letter-spacing: 5px;
  @media screen and (min-width: 1900px) {
    font-size: 85px;
    transform: translateX(-50%) translateY(0);
  }
  @media screen and (min-width: 992px) {
    font-size: 55px;
  }
`;

/**Forgotten Section */

export const ForgottenPasswordSection = styled.div`
  margin: 2.2rem 0;
  p {
    font-style: italic;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    :hover {
      color: var(--color-blue-primary);
    }
  }
`;

/**Forgotten Modal View */

export const ForgottenPasswordViewContainer = styled.div`
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
  margin-top: 1.2rem;
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
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
  :active {
    opacity: 0.3;
  }
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

export const HelpMessage = styled.div`
  padding: 1.8rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  line-height: 2.5rem;
  font-weight: 300;
`;

export const ErrorMessage = styled.div`
  margin: 1rem 0;
  padding-left: 1rem;
  p {
    color: var(--red);
  }
`;

/**SendResult View */

export const IconResult = styled.span`
  display: block;
  width: 5rem;
  height: 5rem;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const SendResultUsernameContainer = styled.div`
  padding: 18px;
`;

import styled from "styled-components";
import backgroundImage from "../../ressources/img/backgroundConnexion.jpg";

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
  & span {
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

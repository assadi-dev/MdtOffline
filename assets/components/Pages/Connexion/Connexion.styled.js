import styled from "styled-components";

const colorDefault = "rgba(255, 255, 255, 0.3)";
const errorColor = "var(--red)";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  & .mb-signIn {
    margin-bottom: 1.8rem;
  }
  & .error {
    border: 1px solid ${errorColor};
    box-shadow: 0px 0px 10px 0px ${errorColor};
  }
`;

export const CardConnexion = styled.div`
  width: 32rem;
  min-height: 400px;
  padding: 18px;
  border-radius: 10px;
  background: rgba(23, 23, 23, 0.57);
  box-shadow: 0px 0px 15px 1px ${colorDefault};
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
  font-weight: 100;
  overflow: hidden;
  padding: 12px 0 0;
  position: relative;
  p {
    transform: translateY(-100px);
    animation: 0.4s slideDown forwards;
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

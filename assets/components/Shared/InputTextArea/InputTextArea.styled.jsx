import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  & span {
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    color: #2b7de980;
    & svg {
      width: 20px;
      height: 20px;
    }
  }
  & textarea {
    border: 1px solid #2b7de980;
    width: 100%;
    padding: 10px 25px;
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
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 100;
      font-style: oblique;
      @media screen and (min-width: 992px) {
        font-size: 18px;
      }
    }
  }
`;

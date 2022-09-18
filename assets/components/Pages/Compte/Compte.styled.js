import React from "react";
import styled from "styled-components";
import userImg from "../../ressources/img/user.jpg";
import AlertError from "../../Shared/Alert/AlertError";
import AlertSuccess from "../../Shared/Alert/AlertSuccess";

export const Container = styled.div`
  width: 100%;
  min-height: 550px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 992px) {
    width: 990px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  margin-bottom: 3.8rem;

  @media screen and (min-width: 992px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;
export const PhotoContainer = styled.div`
  padding: 10px;
  position: relative;
  width: 100px;
  height: 100px;
  @media screen and (min-width: 992px) {
    width: 160px;
    height: 160px;
    margin-right: 2.5rem;
  }
`;
export const Photo = styled.label`
  border-radius: 100%;
  border: 1px solid var(--color-blue-primary);
  width: 100%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
  margin-right: 0;
  background-image: url(${({ img }) => (img ? img : userImg)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 10;
  input {
    position: absolute;
    bottom: 50%;
    left: 0;
    display: none;
  }
`;

export const PhotoValidateBtn = styled.button`
  padding: 8px 10px;
  background-color: var(--color-blue-primary);
  color: var(--color-white);
  border-radius: 5px;
  width: fit-content;
  font-size: 10px;
  font-weight: normal;
  font-family: var(--font-title);
  text-transform: uppercase;
  position: absolute;
  bottom: 0px;
  left: 50%;
  z-index: 150;
  transform: translateX(-50%) translateY(25px);
  :active {
    opacity: 0.5;
  }
`;

export const InfoAgent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  letter-spacing: 2px;
  text-transform: uppercase;
  .username {
    font-family: var(--font-title);
    font-weight: normal;
    font-size: 24px;
    margin-bottom: 0.5rem;
  }
  .grade {
    font-weight: normal;
    font-size: 24px;
    opacity: 0.5;
  }
`;

export const BodyCompte = styled.div`
  border: 1px solid var(--color-blue-primary);
  border-radius: 10px;
  padding: 18px;
  background-color: var(--lightBlue-secondary-opacity);
  min-height: 100px;
  @media screen and (min-width: 992px) {
    padding: 22px;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: 18px;
`;
export const FormContainer = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: inline-block;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    font-weight: normal;
    font-family: var(--font-title);
  }
`;

export const FormMatricule = styled.div`
  min-width: 80px;
  margin-bottom: 1.5rem;
  label {
    display: inline-block;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    font-weight: normal;
    font-family: var(--font-title);
  }
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  background-color: var(--color-primary-button);
  padding: 10px 8px;
  width: fit-content;
  font-size: 10px;
  color: var(--color-white);
  font-family: var(--font-title);
  letter-spacing: 2px;
  font-weight: normal;
`;

export const ResultMessage = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  width: 500px;

  position: relative;
  .close {
    position: absolute;
    right: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    z-index: 50;
    color: #0f5132;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
    :active {
      opacity: 1;
    }
    svg {
      width: 15px;
      height: 15px;
    }
  }

  .closeError {
    position: absolute;
    right: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    z-index: 50;
    color: #842029;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
    :active {
      opacity: 1;
    }
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const CustomAlertSuccess = styled(AlertSuccess)`
  min-height: 35px;
  align-items: center;
`;

export const CustomAlertError = styled(AlertError)`
  min-height: 35px;
  align-items: center;
`;

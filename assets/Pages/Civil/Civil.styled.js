import styled from "styled-components";
import userImg from "../../ressources/img/user.jpg";

export const CivilWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ActionRow = styled.div`
  margin: 14px auto;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 18px;

  & .add-civil {
    background: var(--color-primary-button);
    color: #fff;
    padding: 10px;

    span,
    svg {
      width: 20px;
      height: 20px;
    }
    span {
      margin-right: 3px;
    }

    @media screen and (min-width: 768px) {
      margin-left: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 180px;
    grid-row-gap: 18px;
    max-width: 550px;
  }
`;

export const RowCard = styled.div`
  padding: 22px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 22px;
  justify-content: center;
  width: 100%;
  .test {
    opacity: 0;
  }
`;

export const CardContainer = styled.div`
  border-radius: 5px;
  border: 1px solid var(--color-primary-button);
  width: 340px;
  height: 140px;
  margin: auto;
  padding: 0 11px;
  background-color: var(--lightBlue-secondary-opacity);
  display: grid;
  grid-template-columns: 110px 1fr;
  grid-column-gap: 1rem;
  padding-top: 12px;
  overflow-x: hidden;
`;

export const CivilPhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-image: url(${({ src }) => (src ? src : userImg)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid var(--color-primary-button-opacity);
`;

export const CivilInfo = styled.div`
  .text {
    font-weight: 300;
    margin: 3px 0;
    :first-of-type {
      text-transform: uppercase;
    }
    :nth-of-type(2) {
      :first-letter {
        text-transform: uppercase;
      }
    }

    @media (min-width: 992px) {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 3px;
    }
  }
`;

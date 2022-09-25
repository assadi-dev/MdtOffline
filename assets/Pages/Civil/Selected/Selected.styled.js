import styled from "styled-components";
import userImg from "../../../ressources/img/user.jpg";

export const Wrapper = styled.div`
  width: 100;
  min-height: 100vh;
  .headerStyle {
    font-size: 14px;
  }
  @media (min-width: 992px) {
    padding: 22px;
  }
`;

export const HeaderSelect = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.8rem;
  align-items: center;
  grid-gap: 1rem;
  .CivilTitle {
    @media (min-width: 992px) {
      font-size: 2rem;
      font-weight: 100;
      font-family: var(--font-title);
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 50px 50px 50px 1fr 50px 50px 50px 50px;
    width: fit-content;
    padding-bottom: 25px;
    justify-content: center;
  }
`;

export const IconButtonTop = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  color: var(--color-blue-opacity-50);
  transition: all 0.35s;
  :hover {
    color: var(--color-blue-primary);
    transform: scale(1.2);
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const RowFirst = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 1rem;

  align-items: flex-start;
  margin-top: 1.2rem;
  margin-bottom: 1.8rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
`;

export const RowSecond = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 1rem;

  align-items: flex-start;
  margin-bottom: 1.2rem;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 2.5rem;
  }
`;

export const CivilCard = styled.div`
  min-width: 200px;
  /* max-height: 320px; */
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    max-height: 210px;
    flex-direction: row;
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  height: 200px;
  width: 190px;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    max-height: 80%;
    width: 190px;
    margin: 0;
  }
`;
export const CivilPhoto = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-block;
  background-image: url(${({ src }) => (src ? src : userImg)});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 190px;
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

export const UploadCivilPhotoBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-blue-primary);
  color: var(--color-white);
  padding: 10px 5px;
  border-radius: 5px;
  font-family: var(--font-title);
  font-weight: normal;
  font-size: 12px;
  z-index: 50;
  :active {
    opacity: 0.5;
  }
`;

export const CivilInfo = styled.div`
  margin-left: 1rem;
  p {
    margin-top: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
    :first-of-type {
      margin-top: 0;
    }

    @media screen and (min-width: 992px) {
      font-size: 12px;
    }
  }
  .personalDetail {
    font-weight: bold;
    font-family: var(--font-special);
    text-transform: uppercase;
    color: white;
    font-weight: 100;
    font-size: 10px;
  }
  .personalContact {
    margin-bottom: 0.8rem;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const AvertissementCard = styled.div`
  border: 1px solid var(--color-blue-primary);
  border-radius: 5px;
`;
export const TraffiCard = styled.div`
  border: 1px solid var(--color-blue-primary);
  border-radius: 5px;
`;

export const ViewCardContent = styled.div`
  height: 220px;
  overflow-y: auto; ;
`;

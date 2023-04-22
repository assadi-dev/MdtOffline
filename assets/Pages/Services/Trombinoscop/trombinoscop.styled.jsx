import styled from "styled-components";
import userImg from "../../../ressources/img/user.jpg";

export const TrombinoscopWrapper = styled.div`
  padding: 1.2rem 2.3rem;
  padding-top: 2.8rem;
  max-width: 100%;
`;

export const SearchBarSection = styled.form`
  margin: 2rem 0;
  @media screen and (min-width: 992px) {
    max-width: 60%;
  }
  @media screen and (min-width: 1200px) {
    max-width: 20%;
  }
`;

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;
  margin-top: 5rem;
  & li {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 969px) {
    grid-gap: 2.5rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;

export const CardItemsContainer = styled.div`
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  border-radius: 5px;
  border: 2px solid var(--color-blue-primary);
  background-color: var(--color-lightBlue-secondary-opacity-50);
  box-shadow: 0px 0px 10px rgba(43, 125, 233, 0.5);
  min-height: 100px;
`;

export const AvatarCardItem = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 2px solid var(--color-blue-primary);
  margin: 1rem auto;
  background-image: url(${({ src }) => (src ? src : userImg)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 1200px) {
    border-radius: 250px;
    width: 150px;
    height: 150px;
  }
`;

export const CardDescription = styled.div`
  text-align: center;
  line-height: 1.3rem;
  font-size: 1rem;
  min-height: 100px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 100;
  & p {
    margin: 1rem 0;
  }
  .name {
    font-weight: bold;
    font-family: var(--font-special);
    font-size: 1rem;
    @media screen and (min-height: 768px) {
      font-size: 1.8rem;
      & p {
        margin: 3rem 0;
      }
    }
  }

  @media screen and (min-height: 768px) {
    line-height: 5rem;
    font-size: 2rem;
  }
`;

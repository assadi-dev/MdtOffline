import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DescriptionRow,
  GoBackBtn,
  HeaderRowPage,
  Wrapper,
} from "./NoFoundPage.styled";

const NoFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <HeaderRowPage>
        {" "}
        <h2 className="title">404</h2>
      </HeaderRowPage>
      <DescriptionRow style={{ marginBottom: "2.5rem" }}>
        {" "}
        <p style={{ fontSize: "18px" }}>Désolé cette page n'existe pas</p>
      </DescriptionRow>

      <DescriptionRow>
        {" "}
        <GoBackBtn onClick={goBack}>Retour</GoBackBtn>{" "}
      </DescriptionRow>
    </Wrapper>
  );
};

export default NoFoundPage;

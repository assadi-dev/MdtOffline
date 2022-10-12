import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { AlertCircleIconOutlined } from "../../components/SVG";
import {
  AccountNoActivateHeader,
  AccountNoActivateWrapper,
  BackBtn,
  CardConnexion,
  FooterAccountNoActivate,
  ImportantMessage,
  Paragraph,
} from "./Permission.styled";

const AccountNoActivate = () => {
  return (
    <AccountNoActivateWrapper>
      <AccountNoActivateHeader className="imageContainer">
        <div>
          <AlertCircleIconOutlined />
        </div>
        <ImportantMessage>Votre compte n'est pas disponnible</ImportantMessage>
        <Paragraph>
          Veuillez contactez un membre du staff pour procéder à la validation de
          votre compte
        </Paragraph>
      </AccountNoActivateHeader>
      <FooterAccountNoActivate>
        <BackBtn to="/connexion">Retour à la page de connexion</BackBtn>
      </FooterAccountNoActivate>
    </AccountNoActivateWrapper>
  );
};

export default AccountNoActivate;

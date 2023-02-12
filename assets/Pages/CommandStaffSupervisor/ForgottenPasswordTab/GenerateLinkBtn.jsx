import React from "react";
import { GeneratLinkBtnWrapper } from "./Forgotten.styled";
import { useDispatch } from "react-redux";
import { editForgottenPasswordAsync } from "../../../features/ForgottenPassword/ForgottenPasswordAsyncApi";
import { DOMAIN } from "../../../constants/localStorage";

const GenerateLinkBtn = ({ id, token }) => {
  const dispatch = useDispatch();
  const link = `${DOMAIN}/${token}`;

  const handleGenerateLink = () => {
    const payload = { id, data: { link } };
    dispatch(editForgottenPasswordAsync(payload)).unwrap();
  };

  return (
    <GeneratLinkBtnWrapper onClick={handleGenerateLink}>
      Générer
    </GeneratLinkBtnWrapper>
  );
};

export default GenerateLinkBtn;

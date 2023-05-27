import React, { useState } from "react";
import { GeneratLinkBtnWrapper } from "./Forgotten.styled";
import { useDispatch } from "react-redux";
import { editForgottenPasswordAsync } from "../../../features/ForgottenPassword/ForgottenPasswordAsyncApi";
import { DOMAIN } from "../../../constants/localStorage";
import { SpinnerCircularFixed } from "spinners-react";

const GenerateLinkBtn = ({ id, token }) => {
  const dispatch = useDispatch();
  const link = `${DOMAIN}/reset-password/${token}`;

  const [process, setProcess] = useState(false);

  const toggleProcess = () => {
    setProcess((current) => (current = !current));
  };

  const handleGenerateLink = () => {
    toggleProcess();
    const payload = { id, data: { link } };
    dispatch(editForgottenPasswordAsync(payload))
      .unwrap()
      .finally(() => {
        toggleProcess();
      });
  };

  return (
    <GeneratLinkBtnWrapper onClick={handleGenerateLink}>
      {process ? (
        <SpinnerCircularFixed
          size={15}
          color="#ffffff"
          secondaryColor="#ffffff50"
          speed={350}
        />
      ) : (
        "Générer"
      )}
    </GeneratLinkBtnWrapper>
  );
};

export default GenerateLinkBtn;

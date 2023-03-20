import React from "react";
import { useState } from "react";
import { sleep } from "../../../utils/timer";
import { ClipboadCopy, ClipboardCopy } from "./Forgotten.styled";
import { CopyClipboardIcon } from "../../../components/SVG";

const ClipboardBtn = ({ textToCopy }) => {
  const [showCopyBoard, setShowCopyBoard] = useState(false);

  const handleCopyText = (text) => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy", true, text);
    }
    setShowCopyBoard(true);
    sleep(3000).then(() => {
      setShowCopyBoard((current) => (current = false));
    });
  };

  const CLASS_IS_COPY = showCopyBoard ? "isCopy" : "";

  return (
    <ClipboardCopy
      className={CLASS_IS_COPY}
      onClick={() => handleCopyText(textToCopy)}
      title="Copié le liens"
    >
      <CopyClipboardIcon />
    </ClipboardCopy>
  );
};

export default ClipboardBtn;

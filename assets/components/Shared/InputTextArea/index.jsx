import React from "react";
import { InputWrapper } from "./InputTextArea.styled";

const InputTextArea = ({
  id,
  inputClass,
  inputValue,
  inputName,
  className,
  ...props
}) => {
  return (
    <InputWrapper id={id} className={className}>
      <textarea
        className={inputClass}
        value={inputValue}
        name={inputName}
        autoCapitalize="sentences"
        {...props}
      />
    </InputWrapper>
  );
};

export default InputTextArea;

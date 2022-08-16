import React from "react";
import { InputWrapper } from "./Input.styled";
import PropTypes from "prop-types";

const Input = ({
  className,
  id,
  inputClass,
  inputValue,
  inputName,
  ...props
}) => {
  return (
    <InputWrapper id={id} className={className}>
      <input
        className={inputClass}
        value={inputValue}
        name={inputName}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;

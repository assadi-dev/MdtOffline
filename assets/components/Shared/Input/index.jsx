import React from "react";
import { InputWrapper } from "./Input.styled";
import PropTypes from "prop-types";

const Input = ({
  className,
  id,
  idInput,
  inputClass,
  inputValue,
  inputName,
  ...props
}) => {
  return (
    <InputWrapper id={id} className={className}>
      <input
        id={idInput}
        className={inputClass}
        value={inputValue}
        name={inputName}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;

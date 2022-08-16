import React from "react";
import { InputWrapper, SelectInputWrapper } from "./Select.styled";
import PropTypes from "prop-types";

const Select = ({
  className,
  id,
  inputClass,
  inputValue,
  inputName,
  children,
  ...props
}) => {
  return (
    <SelectInputWrapper id={id} className={className}>
      <select
        className={inputClass}
        value={inputValue}
        name={inputName}
        {...props}
      >
        {children}
      </select>
    </SelectInputWrapper>
  );
};

export default Select;

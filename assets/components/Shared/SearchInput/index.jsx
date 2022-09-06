import React from "react";
import { UserSearchIcon } from "../../SVG";
import { InputWrapper } from "./SearchInput.styled";

const SearchInput = ({ icon, ...props }) => {
  return (
    <InputWrapper className={props.className}>
      <span>
        <UserSearchIcon />
      </span>{" "}
      <input {...props} />
    </InputWrapper>
  );
};

export default SearchInput;

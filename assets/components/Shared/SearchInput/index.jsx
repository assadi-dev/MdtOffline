import React from "react";
import { UserSearchIcon } from "../../SVG";
import { InputWrapper } from "./SearchInput";

const SearchInput = ({ icon, ...props }) => {
  return (
    <InputWrapper className={props.className}>
      <span>
        <UserSearchIcon />
      </span>{" "}
      <input
        onChange={() => props.onChange}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        id={props.id}
      />
    </InputWrapper>
  );
};

export default SearchInput;

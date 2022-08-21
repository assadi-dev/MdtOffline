import React from "react";
import { createFilter } from "react-select";
import { CustomSelect } from "./SelectMultiple.styled";

const SelectMultiple = ({ ...props }) => {
  const style = {
    container: (styles, state, provided) => ({
      ...styles,
    }),
    input: (styles) => ({
      ...styles,
      color: "#fff",
    }),
    dropdownIndicator: (styles, state, provided) => ({
      ...styles,
      color: "var(--color-white)",
    }),
    indicatorSeparator: (styles, state, provided) => ({
      ...styles,
      display: "none",
    }),
    option: (styles, state, provided) => ({
      ...styles,
      backgroundColor: state.isSelected ? "var(--color-blue-primary)" : "none",
      color: "black",
      "&:hover": {
        color: "#FFF",
        backgroundColor: "var(--color-blue-primary)",
      },
    }),

    control: (styles, state) => ({
      ...styles,
      transition: "all 0.35s",
      backgroundColor: "transparent",
      boxShadow: state.isFocused ? "0px 0px 13px 0px #2b7de950" : "",
      border: state.isFocused
        ? "1px solid var(--color-blue-primary);"
        : "1px solid var(--color-blue-opacity-80);",
      "&:hover": {
        borderColor: state.isFocused
          ? "var(--color-blue-primary);"
          : "var(--color-blue-opacity-80);",
      },
    }),
    multiValue: (styles, state) => ({
      ...styles,
      backgroundColor: "var(--color-blue-primary)",
    }),
    multiValueLabel: (styles, state) => ({
      ...styles,
      color: "var( --color-white)",
    }),
  };

  const filterConfig = { ignoreCase: true, ignoreAccents: true, trim: true };

  return (
    <CustomSelect
      styles={style}
      {...props}
      filterOption={createFilter(filterConfig)}
    />
  );
};

export default SelectMultiple;

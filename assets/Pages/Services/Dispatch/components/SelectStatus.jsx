import React from "react";
import Select from "react-select";
import statusData from "./Views/statusData";

const SelectStatus = ({ id, name, className, onChange }) => {
  const statusOption = statusData.map((s) => {
    return { label: s.code, value: s.code, color: s.color };
  });

  return (
    <>
      <Select
        id={id}
        className={className}
        classNamePrefix="statusSelect"
        defaultValue={statusOption[0]}
        isClearable={false}
        isSearchable={true}
        name={name}
        options={statusOption}
        onChange={onChange}
        styles={{
          menu: (styles) => ({
            ...styles,
            zIndex: "9999",
            borderRadius: 0,
            border: "none",
          }),
          option: (styles, state) => ({
            ...styles,
            color: "#fff",
            backgroundColor: state.data.color,
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            textAlign: "center",
            ":active": { backgroundColor: state.data.color },
          }),
          control: (styles, state) => ({
            ...styles,
            width: "100%",
            border: "1px solid var(--color-lightBlue-secondary)",
            borderRadius: "3px",
            ":hover": { borderColor: "inherit" },
            ":active": { borderColor: "inherit" },
            outline: "none",
          }),
          indicatorSeparator: (styles, state) => ({
            ...styles,
            display: "none",
          }),
          input: (styles, state) => ({
            ...styles,
            outline: "none",
          }),
        }}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary25: "transparent",
            primary: "transparent",
            primary50: "transparent",
            primary75: " transparent",
          },
        })}
      />
    </>
  );
};

export default SelectStatus;

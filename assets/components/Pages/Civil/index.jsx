import React, { useState } from "react";
import ButtonWithIcon from "../../Shared/Buttons/ButtonWithIcon";
import SearchInput from "../../Shared/SearchInput";
import { AddUser } from "../../SVG";
import { ActionRow, CivilWrapper } from "./Civil.styled";

const Civil = () => {
  const [search, setSearch] = useState();

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(() => value);
  };

  return (
    <CivilWrapper>
      <ActionRow>
        {" "}
        <form onSubmit={HandleSubmit}>
          <SearchInput onChange={handleSearch} value={search} />
        </form>{" "}
        <ButtonWithIcon
          className="add-civil"
          icon={
            <span>
              <AddUser />
            </span>
          }
          name="Encoder un civil"
        />
      </ActionRow>
    </CivilWrapper>
  );
};

export default Civil;

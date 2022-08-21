import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonWithIcon from "../../Shared/Buttons/ButtonWithIcon";
import SearchInput from "../../Shared/SearchInput";
import { AddUser } from "../../SVG";
import { ActionRow, Card, CivilWrapper, RowCard } from "./Civil.styled";
import CivilCard from "./CivilCard";
import EncodeCivil from "./Modal/EncodeCivil";

const Civil = () => {
  const [search, setSearch] = useState();
  const [modal, setModal] = useState({ encodeCivil: false });

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(() => value);
  };

  const toggleModal = () => {
    setModal((prevState) => ({
      ...prevState,
      encodeCivil: !prevState.encodeCivil,
    }));
  };

  return (
    <>
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
            onClick={toggleModal}
          />
        </ActionRow>

        <RowCard>
          <Link to="../../civil/assadi-halifa" state={{ name: "NOM Prénom" }}>
            <CivilCard />
          </Link>
          <Link to="../../civil/assadi-halifa" state={{ name: "NOM Prénom" }}>
            <CivilCard />
          </Link>
          <Link to="../../civil/assadi-halifa" state={{ name: "NOM Prénom" }}>
            <CivilCard />
          </Link>
          <Link to="../../civil/assadi-halifa" state={{ name: "NOM Prénom" }}>
            <CivilCard />
          </Link>
          <Link to="../../civil/assadi-halifa" state={{ name: "NOM Prénom" }}>
            <CivilCard />
          </Link>
          <Link to="../../civil/assadi-halifa" state={{ name: "NOM Prénom" }}>
            <CivilCard />
          </Link>
        </RowCard>
        <EncodeCivil
          isOpen={modal.encodeCivil}
          onClose={toggleModal}
          state={{ name: "NOM Prénom" }}
        />
      </CivilWrapper>
    </>
  );
};

export default Civil;

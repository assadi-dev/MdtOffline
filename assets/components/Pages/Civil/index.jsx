import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCivil, searchCivil } from "../../../redux/actions/Civil.action";
import { toSlugFormat, ucFirst } from "../../../utils/textFormat";
import ButtonWithIcon from "../../Shared/Buttons/ButtonWithIcon";
import SearchInput from "../../Shared/SearchInput";
import { AddUser } from "../../SVG";
import { ActionRow, Card, CivilWrapper, RowCard } from "./Civil.styled";
import CivilCard from "./CivilCard";
import EncodeCivil from "./Modal/EncodeCivil";

const Civil = () => {
  const [search, setSearch] = useState();
  const [modal, setModal] = useState({ encodeCivil: false });

  const dispatch = useDispatch();
  const civilSelector = useSelector((state) => state.CivilReducer);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    let value = e.target.value;

    dispatch(searchCivil(value));
  };

  const toggleModal = () => {
    setModal((prevState) => ({
      ...prevState,
      encodeCivil: !prevState.encodeCivil,
    }));
  };

  useEffect(() => {
    dispatch(getAllCivil());
  }, []);

  return (
    <>
      <CivilWrapper>
        <ActionRow>
          {" "}
          <form onSubmit={HandleSubmit}>
            <SearchInput onChange={handleSearch} />
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
          {civilSelector.collection.map((civil) => (
            <Link
              key={civil.id}
              to={`../../civil/${toSlugFormat(
                `${civil && civil.nom} ${civil && civil.prenom}`
              )}`}
              state={{
                name: `${civil && civil.nom.toUpperCase()} ${
                  civil && ucFirst(civil.prenom)
                }`,
                id: civil && civil.id,
              }}
            >
              {civil && (
                <CivilCard
                  nom={civil.nom.toUpperCase()}
                  prenom={ucFirst(civil.prenom)}
                  telephone={civil.telephone}
                />
              )}
            </Link>
          ))}
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

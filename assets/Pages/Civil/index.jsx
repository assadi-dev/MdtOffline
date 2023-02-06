import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCivil, searchCivil } from "../../redux/actions/Civil.action";
import { toSlugFormat, ucFirst } from "../../utils/textFormat";
import ButtonWithIcon from "../../components/Shared/Buttons/ButtonWithIcon";
import SearchInput from "../../components/Shared/SearchInput";
import { AddUser } from "../../components/SVG";
import { ActionRow, Card, CivilWrapper, RowCard } from "./Civil.styled";
import CivilCard from "./CivilCard";
import EncodeCivil from "./Modal/EncodeCivil";
import { get_allChefAccusations } from "../../redux/actions/ChefAccusation.action";
import {
  getAllCivilsAsync,
  searchCivilAsync,
} from "../../features/Civil/CivilAsyncApi";
import { sleep } from "../../utils/timer";

const Civil = () => {
  const [search, setSearch] = useState();
  const [modal, setModal] = useState({ encodeCivil: false });
  const [timer, setTimer] = useState(null);

  const dispatch = useDispatch();
  const civilSelector = useSelector((state) => state.CivilReducer);
  const userAuth = useSelector((state) => state.AuthenticateReducer);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    let value = e.target.value;
    clearTimeout(timer);
    let newTimer = setTimeout(() => {
      dispatch(searchCivilAsync(value));
    }, 500);
    setTimer(newTimer);
  };

  const toggleModal = () => {
    setModal((prevState) => ({
      ...prevState,
      encodeCivil: !prevState.encodeCivil,
    }));
  };

  useEffect(() => {
    const promise = dispatch(getAllCivilsAsync());
    return () => {
      promise.abort();
    };
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
          {civilSelector.collection.length > 0 &&
            civilSelector.collection.map((civil) => (
              <Link
                key={civil.id}
                to={`../../../civil/${toSlugFormat(
                  `${civil && civil.nom} ${civil && civil.prenom}`
                )}/${civil.id}`}
                state={{
                  name: `${civil && civil.nom.toUpperCase()} ${
                    civil && ucFirst(civil.prenom)
                  }`,
                  id: civil && civil.id,
                }}
              >
                {civil && (
                  <CivilCard
                    nom={civil.nom}
                    prenom={ucFirst(civil.prenom)}
                    telephone={civil.telephone}
                    photo={civil.photo}
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

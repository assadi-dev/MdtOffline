import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonWithIcon from "../../components/Shared/Buttons/ButtonWithIcon";
import SearchInput from "../../components/Shared/SearchInput";
import { AddUser } from "../../components/SVG";
import { ActionRow, CivilWrapper } from "./Civil.styled";

import EncodeCivil from "./Modal/EncodeCivil";

import {
  fetchAllCivilsNextPageAsync,
  getAllCivilsAsync,
  searchCivilAsync,
} from "../../features/Civil/CivilAsyncApi";
import { sleep } from "../../utils/timer";
import CivilList from "./CivilList";
import LoadinCivilList from "./Loading/LoadinCivilList";

const Civil = () => {
  const [search, setSearch] = useState();
  const [modal, setModal] = useState({ encodeCivil: false });
  const [timer, setTimer] = useState(null);

  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.AuthenticateReducer);
  const { status, currentPage } = useSelector((state) => state.CivilReducer);

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
    const promise = currentPage == 1 && dispatch(getAllCivilsAsync());

    return () => {
      promise && promise.abort();
    };
  }, [currentPage]);
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

        {status != "complete" ? <LoadinCivilList /> : <CivilList />}

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

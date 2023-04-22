import React, { useEffect, useState } from "react";
import {
  CardContainer,
  SearchBarSection,
  TrombinoscopWrapper,
} from "./trombinoscop.styled";
import SearchInput from "../../../components/Shared/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { CardItems } from "./CardItems";
import { getAllAgentByNameAsync } from "../../../features/Agents/AgentAsyncApi";

const Trombinoscop = () => {
  const { status, trombinoscop } = useSelector((state) => state.AgentsReducer);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [timer, setTimer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handeleSearchInput = (e) => {
    let value = e.target.value;
    clearTimeout(timer);
    let newTimer = setTimeout(() => {
      dispatch(getAllAgentByNameAsync(value));
    }, 500);
    setTimer(newTimer);
  };

  useEffect(() => {
    dispatch(getAllAgentByNameAsync(""));
  }, []);

  return (
    <TrombinoscopWrapper>
      <SearchBarSection onSubmit={handleSubmit}>
        <SearchInput onChange={handeleSearchInput} />
      </SearchBarSection>
      <CardContainer>
        {status == "complete" ? (
          trombinoscop.length > 0 ? (
            trombinoscop.map((item) => <CardItems key={item.id} agent={item} />)
          ) : (
            <p>Aucun agents trouvé</p>
          )
        ) : null}
      </CardContainer>
    </TrombinoscopWrapper>
  );
};

export default Trombinoscop;

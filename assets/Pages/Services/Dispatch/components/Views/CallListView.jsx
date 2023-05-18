import React from "react";
import { CallListWrapper, Codetext, ColList } from "./View.styled";

const CallListView = ({ lists }) => {
  const Item = ({ item }) => {
    return (
      <li key={item.code}>
        <Codetext>{item.code} :</Codetext> {item.description}
      </li>
    );
  };

  return (
    <CallListWrapper>
      <ColList>
        {lists.col1 && lists.col1.map((item) => <Item item={item} />)}
      </ColList>
      <ColList>
        {lists.col2 && lists.col2.map((item) => <Item item={item} />)}
      </ColList>
      <ColList>
        {lists.col3 && lists.col3.map((item) => <Item item={item} />)}
      </ColList>
    </CallListWrapper>
  );
};

export default CallListView;

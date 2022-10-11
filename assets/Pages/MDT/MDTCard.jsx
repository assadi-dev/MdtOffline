import React from "react";
import PropTypes from "prop-types";
import {
  EmptyMessage,
  MDTCardBody,
  MDTCardHeader,
  MDTCardwrapper,
  MDTlist,
} from "./MDT.styled";

const MDTCard = ({ title, lists, emptyMessage }) => {
  return (
    <MDTCardwrapper>
      <MDTCardHeader>{title}</MDTCardHeader>
      <MDTCardBody>
        <MDTlist>
          {lists.length > 0 ? (
            lists.map((list, k) => <li key={k}>{list}</li>)
          ) : (
            <EmptyMessage>{emptyMessage}</EmptyMessage>
          )}
        </MDTlist>
      </MDTCardBody>
    </MDTCardwrapper>
  );
};
MDTCard.proptypes = {
  title: PropTypes.string,
  lists: PropTypes.arrayOf(PropTypes.string),
};
MDTCard.defaultProps = {
  title: "",
  lists: [],
};
export default MDTCard;

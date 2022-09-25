import React from "react";
import PropTypes from "prop-types";
import {
  MDTCardBody,
  MDTCardHeader,
  MDTCardwrapper,
  MDTlist,
} from "./MDT.styled";

const MDTCard = ({ title, lists }) => {
  return (
    <MDTCardwrapper>
      <MDTCardHeader>{title}</MDTCardHeader>
      <MDTCardBody>
        <MDTlist>
          {lists.map((list, k) => (
            <li key={k}>{list}</li>
          ))}
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

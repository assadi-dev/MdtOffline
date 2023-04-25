import React from "react";
import {
  AddCateegoriebutton,
  DropItemContainerCard,
  HeaderSection,
} from "../../Dispatch.styled";
import LabeLSection from "./LabeLSection";
import uniqid from "uniqid";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../../../features/Dispatch/Dispatch.slice";

const DropListCard = ({ id, title, listslabels }) => {
  const dispatch = useDispatch();

  const handleAddButon = () => {
    const payload = {
      title: "⌛ En Attente Dispatch-2",
      background: "pink",
      color: "black",
    };
    dispatch(addCategory(payload));
  };

  return (
    <DropItemContainerCard>
      <HeaderSection>
        <h2 className="title">{title} </h2>
        <AddCateegoriebutton onClick={handleAddButon}></AddCateegoriebutton>
      </HeaderSection>
      {listslabels
        ? listslabels.map((label, index) => (
            <LabeLSection
              key={label.id}
              lists={label}
              id={label.id}
              index={index}
            />
          ))
        : null}
    </DropItemContainerCard>
  );
};

export default DropListCard;

import React, { useState } from "react";
import {
  LabeLSectionBody,
  LabeLSectionContainer,
  LabeLSectionHeader,
} from "../../Dispatch.styled";

import CardsItems from "./CardsItems";
import AgentCardItem from "../AgentCard";
import { Droppable } from "react-beautiful-dnd";
import OptionButtonAction from "./OptionButtonAction";
import MenuEdit from "../Views/MenuEdit";
import { useDispatch } from "react-redux";
import { getSelectedCategorie } from "../../../../../features/Dispatch/Dispatch.slice";

const LabeLSection = ({ lists, index }) => {
  const { id, title, cards, background, color } = lists;
  const [showMenuEdit, setShowMenuEdit] = useState(false);
  const dispatch = useDispatch();

  const toggle_modal = (id) => {
    id && dispatch(getSelectedCategorie({ id }));
    setShowMenuEdit((current) => (current = !current));
  };

  const closeModal = () => {
    setShowMenuEdit((current) => (current = false));
  };

  return (
    <>
      <LabeLSectionContainer>
        <LabeLSectionHeader background={background} color={color}>
          {title}
          <OptionButtonAction
            id={id}
            bacgroundColor={background}
            toggleModal={toggle_modal}
            closeEditModal={closeModal}
          />
          {showMenuEdit && <MenuEdit id={id} onCloseModal={closeModal} />}
        </LabeLSectionHeader>

        <Droppable droppableId={String(id)}>
          {(provided) => (
            <LabeLSectionBody
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.length > 0
                ? cards.map((card, index) => (
                    <AgentCardItem key={card.id} card={card} index={index} />
                  ))
                : null}
              {provided.placeholder}
            </LabeLSectionBody>
          )}
        </Droppable>
      </LabeLSectionContainer>
    </>
  );
};

export default LabeLSection;

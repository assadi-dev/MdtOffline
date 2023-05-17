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
import MenuAddSquad from "../Views/MenuAddSquad";
import AgentsCardSquad from "../AgentsCardSquad";

const LabeLSection = ({ lists, index, dropListIndex }) => {
  const { id, title, cards, background, color } = lists;
  const [showMenuEdit, setShowMenuEdit] = useState(false);
  const [showMenuAddSquad, setShowMenuAddSquad] = useState(false);
  const dispatch = useDispatch();

  const toggle_modal = (id) => {
    id && dispatch(getSelectedCategorie({ id }));
    setShowMenuEdit((current) => (current = !current));
  };

  const toggle_squadModal = (id) => {
    id && dispatch(getSelectedCategorie({ id }));
    setShowMenuAddSquad((current) => (current = !current));
  };

  const closeAddSquadModal = () => {
    setShowMenuAddSquad((current) => (current = false));
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
            toggleSquadModal={toggle_squadModal}
            closeAddSquadModal={closeAddSquadModal}
          />
          {showMenuEdit && <MenuEdit id={id} onCloseModal={closeModal} />}
          {showMenuAddSquad && (
            <MenuAddSquad id={id} onCloseModal={closeAddSquadModal} />
          )}
        </LabeLSectionHeader>

        <Droppable droppableId={String(id)}>
          {(provided, snapshot) => (
            <LabeLSectionBody
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={snapshot.isDraggingOver ? "dragOver" : ""}
            >
              {cards.length > 0
                ? cards.map((card, index) => {
                    if (card.hasOwnProperty("grade"))
                      return (
                        <AgentCardItem
                          key={card.id}
                          card={card}
                          index={index}
                        />
                      );
                  })
                : null}

              {cards.length > 0
                ? cards.map((card, index) => {
                    if (card.hasOwnProperty("note"))
                      return (
                        <AgentsCardSquad
                          key={card.id}
                          card={card}
                          index={index}
                        />
                      );
                  })
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

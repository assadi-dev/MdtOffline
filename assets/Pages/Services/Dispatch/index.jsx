import React from "react";
import {
  DispatchBackgroundLayout,
  DispatchWrapper,
  DropContainerlistCard,
  DropItemContainerCard,
} from "./Dispatch.styled";
import DropListCard from "./components/DropListCard";
import { dropLists } from "./initialState";
import { DragDropContext } from "react-beautiful-dnd";

const Dispatch = () => {
  const handleDragEnd = () => {};

  return (
    <DispatchWrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        <DispatchBackgroundLayout>
          <DropContainerlistCard>
            {dropLists.length > 0
              ? dropLists.map((list) => (
                  <DropListCard
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    listslabels={list.categories}
                  />
                ))
              : null}
          </DropContainerlistCard>
        </DispatchBackgroundLayout>
      </DragDropContext>
    </DispatchWrapper>
  );
};

export default Dispatch;

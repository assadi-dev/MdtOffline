import React from "react";
import {
  DispatchBackgroundLayout,
  DispatchWrapper,
  DropContainerlistCard,
  DropItemContainerCard,
} from "./Dispatch.styled";
import DropListCard from "./components/DropListCard";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { drop } from "../../../features/Dispatch/Dispatch.slice";
import { sortDropList } from "../../../features/Dispatch/Dispatch.action";

const Dispatch = () => {
  const { dropLists, status } = useSelector((state) => state.DispatchReducer);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    let data = {
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      draggableId: draggableId,
    };

    sortDropList([...dropLists], data);

    // dispatch(drop(data));
  };

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

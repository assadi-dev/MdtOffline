import React, { useLayoutEffect } from "react";
import {
  DispatchBackgroundLayout,
  DispatchWrapper,
  DropContainerlistCard,
  DropItemContainerCard,
} from "./Dispatch.styled";
import DropListCard from "./components/dragNdrop/DropListCard";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { drop, instanceState } from "../../../features/Dispatch/Dispatch.slice";
import { sortDropList } from "../../../features/Dispatch/Dispatch.action";
import { useEffect } from "react";
import { getDispatchDataAsync } from "../../../features/Dispatch/DispatchAsyncApi";
import { MERCURE_HUB_URL, TOPIC_URL } from "../../../constants/localStorage";

const Dispatch = () => {
  const { dropLists, status } = useSelector((state) => state.DispatchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(getDispatchDataAsync());

    return () => {
      promise.abort();
    };
  }, []);

  useLayoutEffect(() => {
    const topic = `${TOPIC_URL}dispatch/update`;
    const url = new URL(MERCURE_HUB_URL);
    url.searchParams.append("topic", topic);
    let eventSource = new EventSource(url);
    eventSource.onmessage = (e) => {
      let data = JSON.parse(e.data);
      dispatch(instanceState(data));
    };

    return () => {
      eventSource.close();
    };
  }, []);

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

    dispatch(drop(data));
  };

  return (
    <DispatchWrapper>
      <DispatchBackgroundLayout>
        <DropContainerlistCard>
          <DragDropContext onDragEnd={handleDragEnd}>
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
          </DragDropContext>
        </DropContainerlistCard>
      </DispatchBackgroundLayout>
    </DispatchWrapper>
  );
};

export default Dispatch;

import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  DispatchBackgroundLayout,
  DispatchWrapper,
  DropContainerlistCard,
  DropItemContainerCard,
  RowHeaderButton,
  RowHeaderButtonContainer,
} from "./Dispatch.styled";
import DropListCard from "./components/dragNdrop/DropListCard";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { drop, instanceState } from "../../../features/Dispatch/Dispatch.slice";
import { sortDropList } from "../../../features/Dispatch/Dispatch.action";
import { useEffect } from "react";
import { getDispatchDataAsync } from "../../../features/Dispatch/DispatchAsyncApi";
import { MERCURE_HUB_URL, TOPIC_URL } from "../../../constants/localStorage";
import { TalkieWalkie } from "../../../components/SVG";
import CallRadioViewModal from "./components/Views/CallRadioViewContent";

const Dispatch = () => {
  const { dropLists, status } = useSelector((state) => state.DispatchReducer);
  const dispatch = useDispatch();

  const [showCall, setShowCall] = useState(false);

  const handleShowCallRadio = () => {
    setShowCall((current) => (current = !current));
  };

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

    eventSource.onerror = () => {
      eventSource.close();
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
    <>
      <DispatchWrapper>
        <RowHeaderButtonContainer>
          <RowHeaderButton onClick={handleShowCallRadio}>
            <TalkieWalkie />
          </RowHeaderButton>
        </RowHeaderButtonContainer>
        <DispatchBackgroundLayout>
          <DropContainerlistCard>
            <DragDropContext onDragEnd={handleDragEnd}>
              {dropLists.length > 0
                ? dropLists.map((list, index) => (
                    <DropListCard
                      key={list.id}
                      id={list.id}
                      title={list.title}
                      listslabels={list.categories}
                      dropListIndex={index}
                    />
                  ))
                : null}
            </DragDropContext>
          </DropContainerlistCard>
        </DispatchBackgroundLayout>
      </DispatchWrapper>

      {showCall &&
        createPortal(
          <CallRadioViewModal
            stateModal={showCall}
            onClose={handleShowCallRadio}
          />,
          document.body
        )}
    </>
  );
};

export default Dispatch;

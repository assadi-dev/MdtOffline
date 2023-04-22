import React from "react";
import {
  DispatchBackgroundLayout,
  DispatchWrapper,
  DropContainerlistCard,
  DropItemContainerCard,
} from "./Dispatch.styled";
import DropListCard from "./components/DropListCard";
import {
  horsTerrain,
  infos,
  operationCenter,
  secteurNord,
  secteurSud,
  waitingDispatch,
} from "./initialState";

const Dispatch = () => {
  return (
    <DispatchWrapper>
      <DispatchBackgroundLayout>
        <DropContainerlistCard>
          <DropListCard title={"Dispatch"} listslabels={waitingDispatch} />
          <DropListCard title={"Secteur Sud"} listslabels={secteurSud} />
          <DropListCard title={"Secteur Nord"} listslabels={secteurNord} />
          <DropListCard title={"Hors Terrain"} listslabels={horsTerrain} />
          <DropListCard
            title={"Operation center"}
            listslabels={operationCenter}
          />
          <DropListCard title={"Infos"} listslabels={infos} />
        </DropContainerlistCard>
      </DispatchBackgroundLayout>
    </DispatchWrapper>
  );
};

export default Dispatch;

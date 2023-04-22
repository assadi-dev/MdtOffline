import React from "react";
import {
  AvatarCardItem,
  CardDescription,
  CardItemsContainer,
} from "./trombinoscop.styled";

export const CardItems = ({ agent }) => {
  const { id, photo, name, matricule, telephone } = agent;
  const grade = agent.grade ? agent.grade.nom : "N/A";

  return (
    <CardItemsContainer>
      <AvatarCardItem src={agent.photo} />
      <CardDescription>
        <h2 className="name">{`${matricule}-${name}`} </h2>
        <p>{grade} </p>
        <p>{telephone} </p>
      </CardDescription>
    </CardItemsContainer>
  );
};

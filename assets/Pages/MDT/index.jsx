import React, { useEffect, useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import CircleButtonIcon from "../../components/Shared/Buttons/CircleButtonIcon";
import {
  UserOutline,
  FolderOutline,
  AlertOutline,
  ClipBoardOutline,
} from "../../components/SVG";
import { IconButton, MDTwrapper } from "./MDT.styled";
import MDTCard from "./MDTCard";

const MDT = () => {
  const [individus, setIndividus] = useState([
    {
      label: "Individus convoqués par vous",
      lists: [],
      emptyMessage: "Vous avez pas de convocation",
    },
    {
      label: "Individus Recherché",
      lists: [],
      emptyMessage: "Aucun individus recherché",
    },
  ]);

  const { pathname } = useLocation();

  return (
    <MDTwrapper>
      <section className="row mdt-button-section">
        <NavLink to="civil" state={{ title: "Civil" }}>
          <CircleButtonIcon
            className="mdt-button"
            icon={
              <IconButton>
                <UserOutline />{" "}
              </IconButton>
            }
          />
        </NavLink>

        <NavLink to="documents" state={{ title: "Documents" }}>
          <CircleButtonIcon
            className="mdt-button"
            icon={
              <IconButton>
                <FolderOutline />{" "}
              </IconButton>
            }
          />
        </NavLink>
        <NavLink to="panic-button" state={{ title: "Panic Button" }}>
          <CircleButtonIcon
            className="mdt-button"
            icon={
              <IconButton>
                <AlertOutline />{" "}
              </IconButton>
            }
          />
        </NavLink>
        <NavLink
          to="rapport-d-incident"
          state={{ title: "Rapport d'incident" }}
        >
          <CircleButtonIcon
            className="mdt-button"
            icon={
              <IconButton>
                <ClipBoardOutline />{" "}
              </IconButton>
            }
          />
        </NavLink>
      </section>

      {pathname === "/mdt" && (
        <section className="row-individus">
          {individus.map((individus, k) => (
            <MDTCard
              key={k}
              title={individus.label}
              lists={individus.lists}
              emptyMessage={individus.emptyMessage}
            />
          ))}
        </section>
      )}
      <section className="mdt-row-nav">
        <Outlet />
      </section>
    </MDTwrapper>
  );
};

export default MDT;

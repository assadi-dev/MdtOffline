import React, { useEffect, useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import CircleButtonIcon from "../../Shared/Buttons/CircleButtonIcon";
import {
  UserOutline,
  FolderOutline,
  AlertOutline,
  ClipBoardOutline,
} from "../../SVG";
import { IconButton, MDTwrapper } from "./MDT.styled";
import MDTCard from "./MDTCard";

const MDT = () => {
  const [individus, setIndividus] = useState([
    {
      label: "Individus convoqués par vous",
      lists: ["MARCHAL Huges", "MARCHAL Huges", "MARCHAL Huges"],
    },
    {
      label: "Individus Recherché",
      lists: ["MARCHAL Huges", "MARCHAL Huges", "MARCHAL Huges"],
    },
  ]);

  const { pathname } = useLocation();

  console.log(pathname);

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
            <MDTCard key={k} title={individus.label} lists={individus.lists} />
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

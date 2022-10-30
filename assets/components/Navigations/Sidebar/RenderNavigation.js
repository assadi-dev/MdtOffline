import React from "react";
import { PoliceV1 } from "../../SVG";
import { SideNavlinkButton } from "./Sidebar.styled";

const RenderNavigation = (selected, path, label, activeRoute) => {
  return (
    <>
      <SideNavlinkButton
        className={selected && "active"}
        to={path}
        onClick={() => {
          activeRoute(label);
        }}
        state={{ title: label }}
      >
        <span className="active-icon">
          <PoliceV1 />
        </span>
        {label}
      </SideNavlinkButton>
    </>
  );
};

export default RenderNavigation;

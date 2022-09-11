import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../Navigations/Navbar";
import Sidebar from "../../Navigations/Sidebar";
import { MainLayoutWrapper } from "./MainLayout.styled";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const { state } = useLocation();

  return (
    <>
      <MainLayoutWrapper>
        <Navbar name={state ? state.title : ""} />

        <div className="left-col">
          <Sidebar />
        </div>
        <div className="right-col">
          <Outlet />
        </div>
      </MainLayoutWrapper>
    </>
  );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router";
import ButtonAppBar from "../components/AppBar";

function Layout() {
  return (
    <div>
      <ButtonAppBar />
      <Outlet />
    </div>
  );
}

export default Layout;

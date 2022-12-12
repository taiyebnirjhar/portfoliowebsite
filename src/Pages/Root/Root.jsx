import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function Root() {
  return (
    <div className="select-none">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;

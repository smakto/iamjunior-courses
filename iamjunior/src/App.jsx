// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Topbar } from "./components/Topbar/Topbar";

import "./App.css";

export function App() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}

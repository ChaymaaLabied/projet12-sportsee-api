import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../style/acceuil.scss";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

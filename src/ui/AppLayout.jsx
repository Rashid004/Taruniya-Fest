/** @format */

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function AppLayout() {
  return (
    <>
      <Navigation />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;

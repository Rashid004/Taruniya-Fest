/** @format */

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Navigation />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;

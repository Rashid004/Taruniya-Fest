/** @format */

import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function AppLayout() {
  const location = useLocation(); // Hook to get the current location (pathname)

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      {/* Show Footer on all pages except the Home page */}
      {location.pathname === "/" ? null : <Footer />}
    </>
  );
}

export default AppLayout;

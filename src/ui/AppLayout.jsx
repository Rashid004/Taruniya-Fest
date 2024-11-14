/** @format */

import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Sidebar from "../Admin/Sidebar";

export default function AppLayout() {
  const location = useLocation();
  const isAdminPanel = location.pathname.startsWith("/admin-panel");
  const isLoginPage = location.pathname === "/admin-panel/login"; // Check if on the login page

  return (
    <>
      {/* Show Navigation only for non-admin and non-login routes */}
      {!isAdminPanel && !isLoginPage && <Navigation />}

      {/* Main content area */}
      <main
        className={`main-content ${isAdminPanel ? "admin" : ""} ${
          isLoginPage ? "login-page" : ""
        }`}
      >
        {isLoginPage ? (
          // Login page layout: Full-screen Outlet without Sidebar
          <Outlet />
        ) : isAdminPanel ? (
          // Admin layout: Sidebar and Outlet
          <div className="flex">
            <Sidebar />
            <div className="flex-grow bg-white">
              <Outlet />
            </div>
          </div>
        ) : (
          // Non-admin layout: Direct Outlet
          <Outlet />
        )}
      </main>

      {/* Show Footer only on specific pages */}
      {location.pathname !== "/" && !isAdminPanel && !isLoginPage && <Footer />}
    </>
  );
}

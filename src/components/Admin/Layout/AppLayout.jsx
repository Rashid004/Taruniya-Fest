/** @format */

// src/ui/AppLayout.jsx
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation"; // Assuming this is your navigation component

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Check if the current path is the Admin Panel
  const isAdminPanel = location.pathname === "/admin-panel";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render navigation only if not on the Admin Panel */}
      {!isAdminPanel && <Navigation />}

      <main className="flex-grow">{children}</main>

      {/* Always show footer */}
    </div>
  );
};

export default AppLayout;

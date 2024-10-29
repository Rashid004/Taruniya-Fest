/** @format */

// src/ui/AppLayout.jsx
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const AppLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default AppLayout;

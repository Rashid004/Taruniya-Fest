/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../Admin/Navbar";

export default function AdminPanel() {
  return (
    <div className="min-h-[95vh] w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

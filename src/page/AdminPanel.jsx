/** @format */

import { Outlet } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Outlet />
    </div>
  );
}

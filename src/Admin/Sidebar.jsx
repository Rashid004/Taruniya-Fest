/** @format */

// src/admin/Sidebar.jsx

import { NavLink } from "react-router-dom";

const links = [
  { name: "Announcement", href: "/admin-panel/announcement" },
  { name: "Events", href: "/admin-panel/events" },
  { name: "Leaderboard", href: "/admin-panel/leaderboard" },
];

function Sidebar() {
  return (
    <div className="bg-white w-72 min-h-screen flex flex-col justify-between p-4">
      <div className="flex flex-col items-center mb-4">
        <img
          src="/icons/tarunya.png"
          alt="Tarunya Logo"
          className="w-36 mb-4"
        />
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-gray-800 block py-2 px-4 rounded-lg ${
                    isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <p className="text-sm text-gray-500">Tarunya © 2024</p>
      </div>
    </div>
  );
}

export default Sidebar;

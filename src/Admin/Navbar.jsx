/** @format */

import { UserCircle } from "lucide-react";

function Navbar() {
  const userName = "Current User"; // Replace this with a dynamic user name as needed

  return (
    <div className=" py-5 h-20 flex items-center justify-between px-6 border-b-2 border-gray-200">
      <button className="border border-blue-500 px-4 py-2 rounded text-base">
        Logout
      </button>
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">{userName}</span>
        <UserCircle className="w-12 h-12 font-normal text-gray-600" />
      </div>
    </div>
  );
}

export default Navbar;

/** @format */

import { UserCircle } from "lucide-react";
import { useSelector } from "react-redux";

function Navbar() {
  const announcements = useSelector(
    (state) => state.announcement.announcements
  );
  console.log(announcements);
  return (
    <div className="  h-20 flex items-center justify-between px-6 ">
      <button className="border border-blue-500 px-4 py-2 rounded text-base">
        Logout
      </button>
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">Rashid</span>
        <UserCircle className="w-12 h-12 font-normal text-gray-600" />
      </div>
    </div>
  );
}

export default Navbar;

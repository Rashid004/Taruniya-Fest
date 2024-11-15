/** @format */

import { UserCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import toast from "react-hot-toast";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Check if on the login page
  const hideNav = location.pathname === "/admin-panel/login";

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navigate("/admin-panel/login");
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    !hideNav && (
      <div className="h-20 flex items-center justify-between px-6">
        <button
          onClick={logout}
          className="border border-blue-500 px-4 py-2 rounded text-base"
        >
          Logout
        </button>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">{"User"}</span>
          <UserCircle className="w-12 h-12 font-normal text-gray-600" />
        </div>
      </div>
    )
  );
}

export default Navbar;

/** @format */

import { signOut } from "firebase/auth";
import { UserCircle } from "lucide-react";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

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
          {/* Display the user's name if available, otherwise default text */}
          <span className="text-lg font-medium">
            {user ? user.displayName || user.name : "Guest"}
          </span>
          <UserCircle className="w-12 h-12 font-normal text-gray-600" />
        </div>
      </div>
    )
  );
}

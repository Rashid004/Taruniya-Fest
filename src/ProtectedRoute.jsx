/** @format */

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/admin-panel/login" />;
  }

  return children;
};

export default ProtectedRoute;

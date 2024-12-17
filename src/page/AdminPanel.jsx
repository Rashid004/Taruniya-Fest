/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../Admin/Navbar";

export default function AdminPanel() {
  return (
    <div className="min-h-[95vh] w-full">
      <Helmet>
        <title>Admin | Tarunya Fest</title>
        <meta
          name="description"
          content="Discover the latest articles and updates about Tarunya Fest."
        />
        <meta property="og:title" content="Blog | Tarunya Fest" />
        <meta
          property="og:description"
          content="Read our latest blogs about Tarunya Fest events and highlights."
        />
        <meta
          property="og:url"
          content="http://www.tarunyafest.nesedu.in/blog"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Outlet />
    </div>
  );
}

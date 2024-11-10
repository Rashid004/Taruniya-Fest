/** @format */

// src/App.jsx

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Conclave from "./page/Conclave";
import Events from "./page/Events";
import Announcement from "./page/Announcement";
import Contact from "./page/Contact";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import SponsorsPage from "./page/SponsorsPage";
import Loading from "./ui/Loading";
import Blog from "./page/Blog";
const EventsDetail = lazy(() => import("./page/EventsDetail"));
import NotFoundPage from "./ui/NotFoundPage";
import LeaderBoard from "./page/LeaderBoard";
import OurTeam from "./page/OurTeam";
import About from "./page/About";
import AdminPanel from "./page/AdminPanel";
import ManageAnnouncements from "./AdminPages/ManageAnnouncements";
import ManageEvents from "./AdminPages/ManageEvents";
import ManageLeaderboard from "./AdminPages/ManageLeaderboard";
import ManageBlog from "./AdminPages/ManageBlog";
import ManageEventDetails from "./AdminPages/ManageEventDetails";
import ManageUser from "./AdminPages/ManageUser";
import EditUser from "./Admin/components/Users/EditUser";
import EditAnnouncement from "./Admin/components/Announcement/EditAnnouncement";
import EditEvent from "./Admin/components/Events/EditEvent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "admin-panel",
          element: <AdminPanel />,
          children: [
            {
              path: "/admin-panel/announcement",
              element: <ManageAnnouncements />,
            },
            { path: "events", element: <ManageEvents /> },
            { path: "leaderboard", element: <ManageLeaderboard /> },
            { path: "blog", element: <ManageBlog /> },
            { path: "event-details", element: <ManageEventDetails /> },
            { path: "user", element: <ManageUser /> },
            { path: "user/:id", element: <EditUser /> },
            { path: "event/:id", element: <EditEvent /> },
            { path: "announcement/:id", element: <EditAnnouncement /> },
          ],
        },
        { path: "contact", element: <Contact /> },
        { path: "about-us", element: <About /> },
        { path: "announcement", element: <Announcement /> },
        { path: "events", element: <Events /> },
        { path: "leaderboard", element: <LeaderBoard /> },
        {
          path: "events/:eventId",
          element: (
            <Suspense fallback={<Loading />}>
              <EventsDetail />
            </Suspense>
          ),
        },
        { path: "blog", element: <Blog /> },
        { path: "conclave", element: <Conclave /> },
        { path: "ourteam", element: <OurTeam /> },
        { path: "sponsors", element: <SponsorsPage /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: { width: "300px", height: "55px" },
          success: { style: { background: "white" } },
        }}
      />
    </>
  );
}

export default App;

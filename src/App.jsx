/** @format */

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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "announcement",
          element: <Announcement />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "leaderboard",
          element: <LeaderBoard />,
        },
        {
          path: "events/:eventId", // Dynamic route for event details
          element: (
            <Suspense fallback={<Loading />}>
              <EventsDetail />
            </Suspense>
          ), // Render specific event content
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "conclave",
          element: <Conclave />,
        },
        {
          path: "admin-panel",
          element: <AdminPanel />,
        },
        {
          path: "ourteam",
          element: <OurTeam />,
        },
        {
          path: "sponsors",
          element: <SponsorsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        toastOptions={{
          style: {
            width: "300px",
            height: "55px",
          },
          success: {
            style: {
              background: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;

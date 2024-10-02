/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Sponsors from "./page/Sponsor";
import Workforce from "./page/Workforce";
import Conclave from "./page/Conclave";
import Swar from "./page/Swar";
import Events from "./page/Events";
import Announcement from "./page/Announcement";
import Contact from "./page/Contact";
import AppLayout from "./ui/AppLayout";
import Commitee from "./page/Commitee";
import { Toaster } from "react-hot-toast";
import EventsDetail from "./page/EventDetail/EventsDetail";

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
          path: "announcement",
          element: <Announcement />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "events/:eventId", // Dynamic route for event details
          element: <EventsDetail />, // Render specific event content
        },
        {
          path: "swar",
          element: <Swar />,
        },
        {
          path: "conclave",
          element: <Conclave />,
        },
        {
          path: "workforce",
          element: <Workforce />,
        },
        {
          path: "commitee",
          element: <Commitee />,
        },
        {
          path: "sponsors",
          element: <Sponsors />,
        },
      ],
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

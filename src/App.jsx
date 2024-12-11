/** @format */

import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loading from "./ui/Loading";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { getAnnouncements } from "./service/Announcement";
import { setAnnouncementData } from "./Redux/reducer/announcementReducer";

// Lazy load pages for better performance
const Home = lazy(() => import("./page/Home"));
const Contact = lazy(() => import("./page/Contact"));
const About = lazy(() => import("./page/About"));
const Announcement = lazy(() => import("./page/Announcement"));
const Events = lazy(() => import("./page/Events"));
const EventsDetail = lazy(() => import("./page/EventsDetail"));
const LeaderBoard = lazy(() => import("./page/LeaderBoard"));
const Blog = lazy(() => import("./page/Blog"));
const ManageUser = lazy(() => import("./AdminPages/ManageUser"));
const EditUser = lazy(() => import("./Admin/components/Users/EditUser"));
const SponsorsPage = lazy(() => import("./page/SponsorsPage"));
const Conclave = lazy(() => import("./page/Conclave"));
const OurTeam = lazy(() => import("./page/OurTeam"));
const NotFoundPage = lazy(() => import("./ui/NotFoundPage"));
const AdminPanel = lazy(() => import("./page/AdminPanel"));
const LoginPage = lazy(() => import("./AdminPages/LoginPage"));
const Dashboard = lazy(() => import("./AdminPages/Dashboard"));
const ManageBlog = lazy(() => import("./AdminPages/ManageBlog"));
const EditBlog = lazy(() => import("./Admin/components/Blog/EditBlog"));
const EditEvent = lazy(() => import("./Admin/components/Events/EditEvent"));
const EditAnnouncement = lazy(() =>
  import("./Admin/components/Announcement/EditAnnouncement")
);
const ManageAnnouncements = lazy(() =>
  import("./AdminPages/ManageAnnouncements")
);
const ManageEvents = lazy(() => import("./AdminPages/ManageEvents"));
const ManageLeaderboard = lazy(() => import("./AdminPages/ManageLeaderboard"));
const EditLeaderBoard = lazy(() =>
  import("./Admin/components/LeaderBoard/EditLeaderBoard")
);

import "./index.css";
import BlogDetails from "./page/BlogDetails";
import { getBlogs } from "./service/Blog";
import { setBlogData } from "./Redux/reducer/blog";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAnnouncements((data) => {
      dispatch(setAnnouncementData(data));
    });

    getBlogs((data) => {
      dispatch(setBlogData(data));
    });
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        // Public Pages
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "about-us",
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "announcement",
          element: (
            <Suspense fallback={<Loading />}>
              <Announcement />
            </Suspense>
          ),
        },

        {
          path: "events",
          element: (
            <Suspense fallback={<Loading />}>
              <Events />
            </Suspense>
          ),
        },
        {
          path: "events/:eventId",
          element: (
            <Suspense fallback={<Loading />}>
              <EventsDetail />
            </Suspense>
          ),
        },
        {
          path: "leaderboard",
          element: (
            <Suspense fallback={<Loading />}>
              <LeaderBoard />
            </Suspense>
          ),
        },
        {
          path: "blog",
          element: (
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          ),
        },
        {
          path: "blog/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <BlogDetails />
            </Suspense>
          ),
        },
        {
          path: "sponsors",
          element: (
            <Suspense fallback={<Loading />}>
              <SponsorsPage />
            </Suspense>
          ),
        },
        {
          path: "conclave",
          element: (
            <Suspense fallback={<Loading />}>
              <Conclave />
            </Suspense>
          ),
        },
        {
          path: "ourteam",
          element: (
            <Suspense fallback={<Loading />}>
              <OurTeam />
            </Suspense>
          ),
        },

        // Admin Panel
        {
          path: "admin-panel",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loading />}>
                <AdminPanel />
              </Suspense>
            </ProtectedRoute>
          ),
          children: [
            {
              path: "dashboard",
              element: (
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              ),
            },
            {
              path: "announcement",
              element: (
                <Suspense fallback={<Loading />}>
                  <ManageAnnouncements />
                </Suspense>
              ),
            },
            {
              path: "announcement/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <EditAnnouncement />
                </Suspense>
              ),
            },
            {
              path: "events",
              element: (
                <Suspense fallback={<Loading />}>
                  <ManageEvents />
                </Suspense>
              ),
            },
            {
              path: "events/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <EditEvent />
                </Suspense>
              ),
            },
            {
              path: "leaderboard",
              element: (
                <Suspense fallback={<Loading />}>
                  <ManageLeaderboard />
                </Suspense>
              ),
            },
            {
              path: "leaderboard/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <EditLeaderBoard />
                </Suspense>
              ),
            },
            {
              path: "blog",
              element: (
                <Suspense fallback={<Loading />}>
                  <ManageBlog />
                </Suspense>
              ),
            },
            {
              path: "blog/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <EditBlog />
                </Suspense>
              ),
            },
            {
              path: "user",
              element: (
                <Suspense fallback={<Loading />}>
                  <ManageUser />
                </Suspense>
              ),
            },
            {
              path: "user/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <EditUser />
                </Suspense>
              ),
            },
            // {
            //   path: "contact-inquiry",
            //   element: (
            //     <Suspense fallback={<Loading />}>
            //       <ContactInquiry />
            //     </Suspense>
            //   ),
            // },
          ],
        },
        {
          path: "admin-panel/login",
          element: (
            <Suspense fallback={<Loading />}>
              <LoginPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Loading />}>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <div className="min-h-svh lg:bg-home-desktop bg-cover bg-[#6B0A29] bg-no-repeat bg-center md:bg-home-tablet bg-home-mobile">
        <RouterProvider router={router} />
        <Toaster toastOptions={{ style: { width: "300px", height: "55px" } }} />
      </div>
    </>
  );
}

export default App;

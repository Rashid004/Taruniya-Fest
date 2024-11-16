/** @format */

import { useSelector } from "react-redux";
import DashboardHeader from "../Admin/components/Dashboard/DashboardHeader";
import DashboardStats from "../Admin/components/Dashboard/DashboardStats";

const Dashboard = () => {
  // Redux store se data fetch karna
  const users = useSelector((state) => state.users.users || []);
  const events = useSelector((state) => state.event.events || []);
  const announcements = useSelector(
    (state) => state.announcement.announcements || []
  );
  const blogs = useSelector((state) => state.blog.blogs || []);
  const leaderBoard = useSelector(
    (state) => state.leaderboard.leaderboards || []
  );

  // Stats prepare karna
  const stats = {
    users: users.length,
    events: events.length,
    announcements: announcements.length,
    blogs: blogs.length,
    leaderBoard: leaderBoard.length,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Dashboard
          </h1>

          {/* Stats Cards */}
          <DashboardHeader stats={stats} />

          {/* Charts and Graphs */}
          <DashboardStats
            users={users}
            events={events}
            announcements={announcements}
            blogs={blogs}
            leaderboard={leaderBoard}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

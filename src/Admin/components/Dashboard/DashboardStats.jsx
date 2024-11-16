/** @format */

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashboardStats = ({
  users = [],
  events = [],
  announcements = [],
  blogs = [],
  leaderboard = [],
}) => {
  console.log(users, events, announcements, blogs, leaderboard);
  // Monthly activity data (example data based on passed props)
  // Monthly activity data (dynamic or dummy fallback data)
  const monthlyData = [
    {
      month: "January",
      users: users.length || 10,
      events: events.length || 5,
      blogs: blogs.length || 8,
      leaderboard: leaderboard.length || 3,
      announcements: announcements.length || 2,
    },
    {
      month: "February",
      users: Math.floor(users.length * 1.2) || 12,
      events: Math.floor(events.length * 1.1) || 6,
      blogs: Math.floor(blogs.length * 1.2) || 10,
      leaderboard: Math.floor(leaderboard.length * 1.1) || 4,
      announcements: Math.floor(announcements.length * 1.3) || 3,
    },
    {
      month: "March",
      users: Math.floor(users.length * 1.5) || 15,
      events: Math.floor(events.length * 1.3) || 8,
      blogs: Math.floor(blogs.length * 1.5) || 12,
      leaderboard: Math.floor(leaderboard.length * 1.2) || 5,
      announcements: Math.floor(announcements.length * 1.5) || 4,
    },
    {
      month: "April",
      users: Math.floor(users.length * 2) || 20,
      events: Math.floor(events.length * 1.5) || 10,
      blogs: Math.floor(blogs.length * 1.8) || 14,
      leaderboard: Math.floor(leaderboard.length * 1.3) || 6,
      announcements: Math.floor(announcements.length * 1.8) || 5,
    },
  ];

  // User engagement data
  const userEngagement = [
    { name: "Active", value: Math.floor(users.length * 0.65) || 15 },
    { name: "Inactive", value: Math.floor(users.length * 0.35) || 5 },
  ];

  // Event participation data
  const eventParticipation = events.length
    ? events.map((event) => ({
        name: event.title || "Unnamed Event",
        participants: event.eventDetails?.length || 0,
      }))
    : [{ name: "Sample Event", participants: 3 }]; // Fallback dummy data

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Monthly Activity Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Monthly Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              name="Users"
            />
            <Line
              type="monotone"
              dataKey="events"
              stroke="#82ca9d"
              name="Events"
            />
            <Line
              type="monotone"
              dataKey="blogs"
              stroke="#ffc658"
              name="Blogs"
            />
            <Line
              type="monotone"
              dataKey="leaderboard"
              stroke="#d00000"
              name="Leaderboard"
            />
            <Line
              type="monotone"
              dataKey="announcements"
              stroke="#ff7f50"
              name="Announcements"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* User Engagement Pie Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={userEngagement}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {userEngagement.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Event Participation Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Event Participation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={eventParticipation}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="participants" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardStats;

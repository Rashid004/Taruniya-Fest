/** @format */

import React from "react";
import { Users, CalendarDays, Bell, FileText } from "lucide-react";

const StatsCard = ({ title, value, icon, change }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className="p-3 bg-indigo-100 rounded-full">{icon}</div>
    </div>
    <div className="mt-4">
      <span
        className={`text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}
      >
        {change >= 0 ? "+" : ""}
        {change}%
      </span>
      <span className="text-sm text-gray-500 ml-2">from last month</span>
    </div>
  </div>
);

const DashboardHeader = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatsCard
        title="Total Users"
        value={stats.users}
        icon={<Users className="h-6 w-6 text-indigo-600" />}
        change={12}
      />
      <StatsCard
        title="Active Events"
        value={stats.events}
        icon={<CalendarDays className="h-6 w-6 text-indigo-600" />}
        change={8}
      />
      <StatsCard
        title="Announcements"
        value={stats.announcements}
        icon={<Bell className="h-6 w-6 text-indigo-600" />}
        change={5}
      />
      <StatsCard
        title="Blog Posts"
        value={stats.blogs}
        icon={<FileText className="h-6 w-6 text-indigo-600" />}
        change={15}
      />
    </div>
  );
};

export default DashboardHeader;

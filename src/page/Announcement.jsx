/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiBugleCall } from "react-icons/gi";

import {
  FiChevronDown,
  FiChevronUp,
  FiCalendar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

const announcements = [
  {
    id: 1,
    title: "Opening Ceremony",
    date: "2024-03-15",
    time: "10:00 AM",
    location: "Main Auditorium",
    description:
      "Join us for the grand opening of Taruniya 2024! Featuring special guests and exciting performances.",
  },
  {
    id: 2,
    title: "Dance Competition",
    date: "2024-03-16",
    time: "2:00 PM",
    location: "Open Air Theatre",
    description:
      "Show off your moves at our annual dance competition. Solo and group categories available.",
  },
  {
    id: 3,
    title: "Tech Talk: Future of AI",
    date: "2024-03-17",
    time: "11:00 AM",
    location: "Seminar Hall",
    description:
      "Discover the latest trends in Artificial Intelligence with our expert panel of speakers.",
  },
  // Add more announcements as needed
];

const AnnouncementCard = ({ announcement }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-[#000000] rounded-lg shadow-md overflow-hidden mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-semibold text-[#DECBA7] flex items-center gap-2">
          <span>
            <GiBugleCall size="1.2em" color="#dc901e" />
          </span>
          {announcement.title}
        </h3>
        {isExpanded ? (
          <FiChevronUp color="#DECBA7" />
        ) : (
          <FiChevronDown color="#DECBA7" />
        )}
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <div className="flex flex-wrap text-sm text-[#DECBA7] mb-2">
              <div className="flex items-center mr-4 mb-2">
                <FiCalendar className="mr-1" />
                <span>{announcement.date}</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <FiClock className="mr-1" />
                <span>{announcement.time}</span>
              </div>
              <div className="flex items-center mb-2">
                <FiMapPin className="mr-1" />
                <span>{announcement.location}</span>
              </div>
            </div>
            <p className="text-[#9c814e]">{announcement.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AnnouncementsPage = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold text-center text-[#DECBA7] mb-8">
          🎉 Taruniya Announcements 🎉
        </h1>
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;

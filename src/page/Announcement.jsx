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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ComingSoon from "../ui/ComingSoon";
import { div } from "framer-motion/client";

const AnnouncementCard = ({ announcement }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-primaryDark rounded-2xl shadow-md overflow-hidden mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-medium text-amber-200 flex items-center gap-2 tracking-widest">
          <span>
            <GiBugleCall size="1.2em" color="#dc901e" />
          </span>
          {announcement.title}
        </h3>
        {isExpanded ? (
          <FiChevronUp color="#dc901e" />
        ) : (
          <FiChevronDown color="#dc901e" />
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
            <p className="text-gray-300">{announcement.description}</p>
            <Link
              to={announcement.link}
              className="text-amber-500 text-sm underline hover:text-amber-400 py-2"
            >
              ✅ Check out the event
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AnnouncementsPage = () => {
  const announcements = useSelector(
    (state) => state.announcement.announcements
  );

  if (announcements)
    return (
      <ComingSoon
        data1={
          "Get ready for exclusive updates and important notices about our Tarunya Fest."
        }
        data2={"This is your go-to space for all the buzz!"}
      />
    );

  console.log(announcements.length, announcements);

  return (
    <div className="min-h-screen  py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-heading"
        >
          Announcements
        </motion.h1>
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

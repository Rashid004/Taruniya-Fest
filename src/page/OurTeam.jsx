/** @format */

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const committeeMembers = [
  {
    name: "Dr. Amelia Thornton",
    position: "Principal",
    imageCommitee: "https://randomuser.me/api/portraits/women/1.jpg",
    description:
      "With over 20 years of experience in education, Dr. Thornton brings visionary leadership to our institution.",
  },
  {
    name: "Prof. Rajesh Kumar",
    position: "Head Organizer",
    imageCommitee: "https://randomuser.me/api/portraits/men/2.jpg",
    description:
      "Prof. Kumar's passion for student engagement has been the driving force behind our fest's success.",
  },
  {
    name: "Ms. Sophia Chen",
    position: "Cultural Secretary",
    imageCommitee: "https://randomuser.me/api/portraits/women/3.jpg",
    description:
      "A maestro in coordinating diverse cultural events, Ms. Chen ensures our fest is a vibrant celebration of arts.",
  },
  {
    name: "Mr. Jamal Williams",
    position: "Technical Director",
    imageCommitee: "https://randomuser.me/api/portraits/men/4.jpg",
    description:
      "Mr. Williams' technical expertise brings cutting-edge innovations to every aspect of our fest.",
  },
  {
    name: "Dr. Evelyn Rodriguez",
    position: "Faculty Coordinator",
    imageCommitee: "https://randomuser.me/api/portraits/women/5.jpg",
    description:
      "Dr. Rodriguez masterfully bridges the gap between faculty and students, fostering a collaborative environment.",
  },
  {
    name: "Mr. Akira Tanaka",
    position: "Logistics Head",
    imageCommitee: "https://randomuser.me/api/portraits/men/6.jpg",
    description:
      "With meticulous planning and execution, Mr. Tanaka ensures the smooth running of all fest activities.",
  },
  {
    name: "Ms. Zara Patel",
    position: "Public Relations Officer",
    imageCommitee: "https://randomuser.me/api/portraits/women/7.jpg",
    description:
      "Ms. Patel's creative campaigns have put our fest on the map, attracting participants from far and wide.",
  },
];

const CommitteeMember = ({ member, index }) => {
  return (
    <motion.div
      className="bg-[#000000] rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 border-[#DECBA7]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.img
        src={member.imageCommitee}
        alt={member.name}
        className="w-32 h-32 rounded-full mb-4 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.h2
        className="text-2xl font-bold text-center mb-2 text-[#DECBA7]"
        whileHover={{ scale: 1.05, color: "#decba7b1" }}
      >
        {member.name}
      </motion.h2>
      <motion.h3
        className="text-xl text-center text-[#DECBA7] mb-4"
        whileHover={{ scale: 1.05, color: "#decba7b1" }}
      >
        {member.position}
      </motion.h3>
      <p className="text-[#decba7db] text-center mb-4">{member.description}</p>
      <div className="flex justify-center space-x-4">
        <motion.a
          href="#"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="text-2xl text-blue-600" />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter className="text-2xl text-blue-400" />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaEnvelope className="text-2xl text-red-500" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center text-[#DECBA7] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Esteemed Committee
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <CommitteeMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

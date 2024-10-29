/** @format */

import { motion } from "framer-motion";

const leaderboardData = [
  {
    id: 1,
    name: "College A",
    rank: 1,
    logoURL:
      "https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "College B",
    rank: 2,
    logoURL:
      "https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_640.jpg",
  },
  {
    id: 3,
    name: "College C",
    rank: 3,
    logoURL:
      "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "College D",
    rank: 4,
    logoURL:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  // More colleges here
];

// Animation Variants
const cardVariants = {
  hover: { scale: 1.03 },
  tap: { scale: 0.98 },
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Leaderboard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8  text-secondary rounded-lg ">
      <h2 className="text-center text-4xl font-extrabold mb-8 text-secondary-yellow tracking-wide">
        Leaderboard
      </h2>
      <div className="space-y-6">
        {leaderboardData
          .sort((a, b) => a.rank - b.rank)
          .map((college) => (
            <motion.div
              key={college.id}
              className={`w-full max-w-2xl mx-auto flex items-center p-6 rounded-lg shadow-lg transform transition-all duration-500 ${
                college.rank === 1
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-300 shadow-yellow-600/50"
                  : college.rank === 2
                  ? "bg-gradient-to-r from-gray-300 to-gray-100 shadow-gray-500/50"
                  : college.rank === 3
                  ? "bg-gradient-to-r from-amber-500 to-amber-200 shadow-amber-400/50"
                  : "bg-white shadow-md border border-gray-200"
              }`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.4 }}
            >
              {/* Logo */}
              <motion.img
                src={college.logoURL}
                alt={`${college.name} Logo`}
                className="h-16 w-16 mr-6 rounded-full shadow-lg ring-4 ring-white"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              {/* Name and Rank */}
              <div className="flex-grow flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-wider text-gray-900">
                  {college.name}
                </h3>
                <motion.p
                  className={`text-lg font-extrabold mt-2 rounded-lg inline-block px-4 py-1 ${
                    college.rank === 1
                      ? "bg-yellow-500 text-white"
                      : college.rank === 2
                      ? "bg-gray-400 text-white"
                      : college.rank === 3
                      ? "bg-amber-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  Rank {college.rank}
                </motion.p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Leaderboard;

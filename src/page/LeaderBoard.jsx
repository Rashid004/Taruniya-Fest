/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, Award, Crown } from "lucide-react";

const leaderboardData = [
  {
    id: 1,
    name: "College A",
    rank: 1,
    score: 2500,
    logoURL:
      "https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "College B",
    rank: 2,
    score: 2300,
    logoURL:
      "https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_640.jpg",
  },
  {
    id: 3,
    name: "College C",
    rank: 3,
    score: 2100,
    logoURL:
      "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "College D",
    rank: 4,
    score: 1900,
    logoURL:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const getRankIcon = (rank) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-8 h-8 text-yellow-500" />;
    case 2:
      return <Medal className="w-8 h-8 text-gray-400" />;
    case 3:
      return <Award className="w-8 h-8 text-amber-600" />;
    default:
      return <Crown className="w-8 h-8 text-gray-400" />;
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const progressVariants = {
  initial: { width: 0 },
  animate: (score) => ({
    width: `${(score / 2500) * 100}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

const Leaderboard = () => {
  return (
    <section className="min-h-screen  p-8 py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-heading"
        >
          College Rankings
        </motion.h2>

        <AnimatePresence>
          <div className="space-y-6">
            {leaderboardData.map((college, index) => (
              <motion.div
                key={college.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className={`relative overflow-hidden rounded-xl ${
                  college.rank === 1
                    ? "bg-gradient-to-r from-[#FFD700]/10 to-[#FFD700]/30"
                    : college.rank === 2
                    ? "bg-gradient-to-r from-[#C0C0C0]/10 to-[#C0C0C0]/30"
                    : college.rank === 3
                    ? "bg-gradient-to-r from-[#CD7F32]/10 to-[#CD7F32]/30"
                    : "bg-white/5"
                }`}
              >
                <div className="relative z-10 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <img
                        src={college.logoURL}
                        alt={college.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-secondary relative z-10"
                      />
                    </motion.div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg md:text-2xl font-bold text-amber-200">
                          {college.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {getRankIcon(college.rank)}
                          <span className="text-accent-light font-bold">
                            #{college.rank}
                          </span>
                        </div>
                      </div>

                      <div className="relative h-2 bg-accent-semidark/20 rounded-full overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          initial="initial"
                          animate="animate"
                          custom={college.score}
                          className={`absolute h-full rounded-full ${
                            college.rank === 1
                              ? "bg-gradient-to-r from-yellow-500 to-yellow-300"
                              : college.rank === 2
                              ? "bg-gradient-to-r from-gray-400 to-gray-300"
                              : college.rank === 3
                              ? "bg-gradient-to-r from-amber-600 to-amber-400"
                              : "bg-accent"
                          }`}
                        />
                      </div>
                      <div className="mt-2 text-right text-secondary text-sm">
                        Score: {college.score}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Leaderboard;

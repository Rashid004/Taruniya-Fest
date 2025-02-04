/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, Award, Crown } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { leaderboardData, leaderboardPreData } from "../constant/leaderboard";

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

// const progressVariants = {
//   initial: { width: 0 },
//   animate: (score) => ({
//     width: `${(score / 2500) * 100}%`,
//     transition: { duration: 1, ease: "easeOut" },
//   }),
// };

const Leaderboard = () => {
  return (
    <HelmetProvider>
      <section className="min-h-screen p-8 py-4 sm:py-6 md:py-8 mt-16">
        <Helmet>
          <title>Leaderboard | Tarunya Fest 2024</title>

          <meta
            name="description"
            content="Discover the latest leaderboard rankings at Tarunya Fest 2024! Find out which colleges and participants are excelling in the competitions and celebrate their achievements."
          />

          <meta
            name="keywords"
            content="Tarunya Fest leaderboard, college rankings, competition winners, Tarunya Fest 2024 results, college fest leaderboard, participant rankings, event standings, Tarunya Fest top colleges, leaderboard highlights"
          />

          <meta property="og:title" content="Leaderboard | Tarunya Fest 2024" />
          <meta
            property="og:description"
            content="Explore the leaderboard rankings of Tarunya Fest 2024. See which colleges and participants are leading the competitions and celebrate their victories."
          />
          <meta property="og:image" content="/images/tarunya.png" />
          <meta
            property="og:url"
            content="https://www.tarunyafest.nesedu.in/leaderboard"
          />
          <meta property="og:type" content="website" />
        </Helmet>

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
            Colleges Participate
          </motion.h2>

          <AnimatePresence>
            <div className="space-y-6 max-w-[800px] mx-auto">
              {leaderboardPreData.map((college, index) => (
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
                    <div className="flex items-center justify-between gap-6">
                      {/* <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <img
                          src={college.logoURL}
                          alt={college.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-secondary relative z-10"
                        />
                      </motion.div> */}

                      {/* <div className="flex-grow"> */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg md:text-2xl font-bold text-amber-200 uppercase tracking-widest">
                          {college.name}
                        </h3>
                        {/* <div className="flex items-center gap-2">
                            {getRankIcon(college.rank)}
                            <span className="text-accent-light font-bold">
                              #{college.rank}
                            </span>
                          </div> */}
                      </div>
                      <h3 className="uppercase text-3xl font-bold text-secondary border-4 p-2 md:p-4 border-primaryDark rounded-full tracking-wider">
                        {college.title}
                      </h3>
                      {/* <div className="relative h-2 bg-accent-semidark/20 rounded-full overflow-hidden">
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
                        </div> */}
                      {/* <div className="mt-2 text-right text-secondary text-sm">
                          Score: {college.score}
                        </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </section>
    </HelmetProvider>
  );
};

export default Leaderboard;

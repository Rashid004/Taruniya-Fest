/** @format */

import { motion } from "framer-motion";
import ConclaveGridItem from "./ConclaveGridItem";

const gridData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Ananya Birla, a dynamic entrepreneur and artist, embodies the spirit of modern India's business leadership.",
    imageSrc:
      "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Ananya Birla",
  },
  {
    id: 2,
    title: "Empowering Through Music and Business",
    description:
      "Breaking barriers in business and entertainment, Ananya's success inspires the next generation.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8fDA%3D",
    imageAlt: "Ananya Birla performing",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ConclaveGrid = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#DECBA7] to-[#BCA476] bg-clip-text text-transparent"
      >
        Featured Speakers
      </motion.h2>

      {gridData.map((item, index) => (
        <ConclaveGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          reverse={index % 2 !== 0}
        />
      ))}
    </motion.div>
  );
};

export default ConclaveGrid;

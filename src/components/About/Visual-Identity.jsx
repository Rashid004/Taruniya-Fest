/** @format */

import {
  LockKeyholeOpen,
  Rainbow,
  Rocket,
  SunMedium,
  SunMoon,
} from "lucide-react";
import { PiPlanetBold } from "react-icons/pi";
import { motion } from "framer-motion";

const visualIdentity1 = [
  {
    title: "Rocket",
    description:
      "The rocket embodies aspirations and the relentless pursuit of success, symbolizing the launch of new ideas, energy, and innovation driven by youthful ambition.",
    icon: <Rocket size={60} color="#DECBA7" />,
  },
  {
    title: "Sun and Moon Convergence",
    description:
      "The meeting of the sun and moon represents the harmony between day and night, symbolizing balance and the continuous cycle of dreams (moon) and action (sun). It illustrates the merging of passion and introspection, where dreams meet the energy to bring them to life.",
    icon: <SunMoon size={60} color="#DECBA7" />,
  },
  {
    title: "Keyhole Shape",
    description:
      "The keyhole formed at the intersection of the rocket and celestial bodies signifies opportunity, unlocking potential, and discovery. It is a gateway to new experiences and knowledge, suggesting that “Tarunya” is the key to unlocking the youth’s potential and unleashing their passion.",
    icon: <LockKeyholeOpen size={60} color="#DECBA7" />,
  },
];

const visualIdentity2 = [
  {
    title: "Vibrant Colors",
    description:
      "The warm hues of orange, 'yellow', and red in the sun signify boundless energy, enthusiasm, and creativity, while the cooler blue tones bring a sense of calm, inspiration, and imagination, blending to represent the holistic growth of individuals at the fest.",
    icon: <Rainbow size={60} color="#DECBA7" />,
  },
  {
    title: "Fiery Sun",
    description:
      "The flames surrounding the sun symbolize the powerful and ever-expanding nature of ideas and passion, fusing together in a burst of creative energy.",
    icon: <SunMedium size={60} color="#DECBA7" />,
  },
  {
    title: "Space Theme",
    description:
      "The cosmic setting highlights exploration, innovation, and the endless possibilities available to the youth as they aim for the stars.",
    icon: <PiPlanetBold size={60} color="#DECBA7" />,
  },
];

function VisualIdentity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8  pt-4"
    >
      <div className="space-y-6">
        {visualIdentity1.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-secondary-yellow">{item.icon}</div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium tracking-widest text-amber-200">
                {item.title}:
              </h3>
              <p className="text-amber-500 text-sm md:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        {visualIdentity2.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-secondary-yellow">{item.icon}</div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium tracking-widest text-amber-200">
                {item.title}:
              </h3>
              <p className="text-amber-500  text-sm md:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default VisualIdentity;

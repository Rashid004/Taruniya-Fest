/** @format */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaHeart,
  FaMagic,
  FaLaughSquint,
  FaBolt,
} from "react-icons/fa";
import SponsorCard from "../components/Sponsor/SponsorsCard";

const featuredSponsor = {
  name: "Blinkit",
  title: "Instant Everything",
  image: "https://cdn.siasat.com/wp-content/uploads/2023/02/Blinkit.jpg",
  description:
    "Blinkit: Because waiting is so last season. We deliver your desires faster than you can say 'I want it now!'",
  icon: FaBolt,
};

const sponsors = [
  {
    name: "Myntra",
    title: "Fashion Forward",
    image: "https://ifp.world/wp-content/uploads/2021/05/Myntra-Logo.png",
    description:
      "Myntra, your go-to fashion destination, bringing style to your doorstep faster than you can say 'wardrobe malfunction'!",
    icon: FaRocket,
  },
  {
    name: "JioSaavn",
    title: "Tune Into Fun",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png",
    description:
      "JioSaavn, where music meets magic. We're not saying we're better than silence, but... okay, yes we are.",
    icon: FaMagic,
  },
  {
    name: "Dabur",
    title: "Naturally Nurturing",
    image:
      "https://w1.pngwing.com/pngs/57/180/png-transparent-india-food-dabur-dabur-international-logo-personal-care-fastmoving-consumer-goods-ayurveda-company.png",
    description:
      "Dabur: Because 'au naturel' sounds much fancier than 'we put plants in a bottle'. Your health, our playground!",
    icon: FaHeart,
  },
  {
    name: "Zomato",
    title: "Foodies Unite",
    image:
      "https://w7.pngwing.com/pngs/256/867/png-transparent-zomato-logo-thumbnail.png",
    description:
      "Zomato: Turning 'I'm hungry' into 'I'm happy' faster than you can say 'extra cheese'. We're not just an app, we're your food soulmate!",
    icon: FaLaughSquint,
  },
];

const SponsorsPage = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Awesome Sponsors
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SponsorCard
            key={featuredSponsor.name}
            sponsor={featuredSponsor}
            isHovered={hoveredSponsor === featuredSponsor.name}
            onHover={setHoveredSponsor}
            isFeatured={true}
          />
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.name}
              sponsor={sponsor}
              isHovered={hoveredSponsor === sponsor.name}
              onHover={setHoveredSponsor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

/** @format */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import SponsorCard from "../components/Sponsor/SponsorsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { featuredSponsor, sponsors } from "../constant/sponsorship";

const SponsorsPage = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  return (
    <section className="mt-16">
      <HelmetProvider>
        <Helmet>
          <title>Sponsorship | Tarunya Fest 2024</title>

          <meta
            name="description"
            content="Become a sponsor for Tarunya Fest 2024 and showcase your brand to a dynamic, creative audience. Support innovation, talent, and community growth by partnering with us for this grand event."
          />

          <meta
            name="keywords"
            content="Tarunya Fest sponsorship, sponsor Tarunya Fest, college fest sponsorship, brand partnership, event sponsors, Tarunya Fest 2024 sponsors, sponsor opportunities, brand visibility, support creativity, innovation sponsorship"
          />

          <meta property="og:title" content="Sponsorship | Tarunya Fest 2024" />
          <meta
            property="og:description"
            content="Join as a sponsor for Tarunya Fest 2024 and elevate your brand. Reach a creative and engaged audience while supporting talent and innovation."
          />
          <meta property="og:image" content="/images/tarunya.png" />
          <meta
            property="og:url"
            content="https://www.tarunyafest.nesedu.in/sponsors"
          />
          <meta property="og:type" content="website" />
        </Helmet>

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
      </HelmetProvider>
    </section>
  );
};

export default SponsorsPage;

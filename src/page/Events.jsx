/** @format */
import { motion } from "framer-motion";
import EventCard from "../components/EventCard/EventCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events } from "../constant/events";

function Events() {
  return (
    <HelmetProvider>
      <section className="mt-16">
        <Helmet>
          <title>Events | Tarunya Fest 2024</title>

          <meta
            name="description"
            content="Explore the diverse events at Tarunya Fest 2024, featuring thrilling competitions, engaging workshops, mesmerizing performances, and creative exhibitions. Celebrate talent, creativity, and excitement with us!"
          />
          <meta
            name="keywords"
            content="Tarunya Fest events, college competitions, creative workshops, cultural performances, exhibitions, Tarunya Fest 2024, exciting college events, fest schedule, cultural fest activities, Tarunya Fest highlights"
          />

          <meta property="og:title" content="Events | Tarunya Fest 2024" />
          <meta
            property="og:description"
            content="Discover the exciting lineup of events at Tarunya Fest 2024 – competitions, workshops, performances, and exhibitions. Join the celebration of creativity and talent!"
          />
          <meta property="og:image" content="/images/tarunya.png" />
          <meta
            property="og:url"
            content="https://www.tarunyafest.nesedu.in/events"
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
          <motion.h1
            className="main-heading"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Events
          </motion.h1>
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              link={`/events/${event.id}`}
            />
          ))}
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Events;

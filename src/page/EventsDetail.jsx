/** @format */

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { eventDetails } from "../constant/eventDetails";
import NotFoundPage from "../ui/NotFoundPage";

function EventsDetail() {
  const { eventId } = useParams();
  const event = eventDetails[eventId];

  if (!event)
    return (
      <NotFoundPage
        message="Event not found 🚫"
        link="/events"
        linkText="Back to Events"
      />
    );

  return (
    <HelmetProvider>
      <section className="px-6 sm:px-6 lg:px-8 h-full mt-28">
        <Helmet>
          <title>{event.heading} | Event Details | Tarunya Fest 2024</title>

          <meta
            name="description"
            content={`Discover the details of ${
              event.heading
            } at Tarunya Fest 2024. Explore events like ${event.events
              .map((item) => item.title)
              .join(
                ", "
              )}, and be part of a celebration of creativity and talent.`}
          />

          <meta
            name="keywords"
            content={`${event.heading}, ${event.events
              .map((item) => item.title)
              .join(
                ", "
              )}, Tarunya Fest events, ${event.heading.toLowerCase()} Tarunya Fest, college fest activities`}
          />

          <meta
            property="og:title"
            content={`${event.heading} | Event Details | Tarunya Fest 2024`}
          />
          <meta
            property="og:description"
            content={`Join us for ${
              event.heading
            } at Tarunya Fest 2024. Participate in exciting events like ${event.events
              .map((item) => item.title)
              .join(
                ", "
              )}, and experience the spirit of creativity, innovation, and fun!`}
          />
          <meta property="og:image" content="/images/tarunya.png" />
          <meta
            property="og:url"
            content={`https://www.tarunyafest.nesedu.in/events/${eventId}`}
          />
          <meta property="og:type" content="article" />
        </Helmet>

        <div className="max-w-6xl mx-auto w-full">
          {eventId ? (
            <>
              <h1 className="main-heading">{event.heading}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">
                {event.events.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className="bg-primaryDark bg-opacity-40 rounded-3xl  px-4 py-8 flex flex-col items-center gap-8 border-secondary-yellow hover:shadow-[0_20px_50px_rgba(255,191,0,0.25)] shadow-lg w-full h-auto overflow-hidden mt-8 ease-linear duration-300 group relative p-6  transform hover:scale-105 transition-all"
                  >
                    <h2 className="text-amber-200 text-2xl md:text-3xl font-medium text-wrap text-center tracking-wide">
                      {item.title}
                    </h2>
                    <hr className="border-amber-500 w-full" />
                    <p className="text-gray-300 text-base md:text-xl font-medium text-center w-full md:w-[95%] leading-[30px] ">
                      {item.description}
                    </p>
                    <Link to={item.link} target="_blank">
                      <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base md:text-lg   focus:outline-none rounded-lg shadow-lg hover:shadow-amber-500/20 transition duration-300">
                        Register Now
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div>Loading event details...</div>
          )}
        </div>
      </section>
    </HelmetProvider>
  );
}

export default EventsDetail;

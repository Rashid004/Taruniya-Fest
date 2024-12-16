/** @format */

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
const eventDetails = {
  literaryOratoryArts: {
    heading: "Literary/Oratory Arts",
    events: [
      {
        title: "Clash of Words (Debate)",
        description:
          "Engage in a debate, defending viewpoints on diverse topics.",
      },
      {
        title: "Quiztopia (Quiz)",
        description:
          "A challenging quiz to test general knowledge and awareness.",
      },
      {
        title: "Inkspire (Creative Writing)",
        description:
          "Creative writing competition to unleash imaginative stories.",
      },

      {
        title: "Shipwreck",
        description:
          "Use your wits to survive as you embody a famous personality.",
      },
    ],
  },
  eGames: {
    heading: "E-Games",
    events: [
      {
        title: "Bombay Battle Royale (Bgmi)",
        description:
          "Battle it out in BGMI, with survival and strategy as key.",
      },
    ],
  },
  sports: {
    heading: "Sports",
    events: [
      {
        title: "Checkmate Challenge (Chess)",
        description:
          "Compete in a chess tournament to showcase strategy and patience.",
      },

      {
        title: "Pitch Perfect (Cricket)",
        description: "A cricket match combining agility, skill, and teamwork.",
      },
      {
        title: "Goal Rush (Football)",
        description:
          "Participate in a football game showcasing skill and endurance.",
      },
      {
        title: "Tug Titans (Tug of war)",
        description: "Test strength and teamwork in this Tug of War challenge.",
      },
    ],
  },
  performingArts: {
    heading: "Performing Arts",
    events: [
      {
        title: "Dance It Out (Solo Dance)",
        description: "Show off your solo dance skills in any style.",
      },
      {
        title: "Groove Crew (Group Dance)",
        description: "Group dance showcasing choreography and unity.",
      },

      {
        title: "Tarunya Got Latent (Open Mic)",
        description:
          "Perform poetry, stand-up, or any talent in open-mic style.",
      },
      {
        title: "Fashion Frenzy (Fashion Show)",
        description: "Showcase fashion sense in this group fashion show.",
      },
    ],
  },
  psychologicalEvents: {
    heading: "Psychological Events",
    events: [
      // {
      //   title: "Reality vs. Myth",
      //   description:
      //     "Determine fact from fiction in this mind-bending challenge.",
      // },
      {
        title: "Guess the Disorder",
        description: "Identify psychological disorders based on given clues.",
      },
      {
        title: "Lie Detector",
        description: "",
      },
    ],
  },
  fineArts: {
    heading: "Fine Arts",
    events: [
      {
        title: "Canvas Crusaders (Poster Making)",
        description:
          "Design a poster based on the given theme, using visual elements.",
      },
      {
        title: "Face Canvas (Face Painting)",
        description: "Express creativity through unique face painting designs.",
      },
    ],
  },
  mediaEvents: {
    heading: "Media Events",
    events: [
      {
        title: "Shutter Island (Street photography)",
        description:
          "Capture the essence of the streets in this photography contest.",
      },
      {
        title: "Reel Talk (Reel Making)",
        description: "Create an impactful short reel on assigned topics.",
      },
      {
        title: "Brand the Reel (Branding)",
        description:
          "Showcase your creativity by branding a reel with a theme.",
      },
      {
        title: "Frame by Frame (Cinematography/Short film)",
        description:
          "Craft a short film or cinematic piece capturing a narrative.",
      },
    ],
  },
  preEvents: {
    heading: "Pre-Events",
    events: [
      {
        title: "Dream Run (Marathon)",
        description: "Participate in a marathon to test endurance and speed.",
      },
      {
        title: "Path Finders (Treasure Hunt)",
        description: "Treasure Hunt with clues hidden across the campus.",
      },
      {
        title: "Street Spirit (Street play)",
        description:
          "Perform a vibrant and impactful street play, addressing social issues and engaging the audience with powerful storytelling.",
      },
    ],
  },
};

function EventsDetail() {
  const { eventId } = useParams();
  const event = eventDetails[eventId];

  if (!event) return <div>Event not found</div>;

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="px-6 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        {eventId ? (
          <>
            <h1 className="main-heading">{event.heading}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {event.events.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="bg-primaryDark bg-opacity-40 rounded-3xl  px-4 py-8 flex flex-col items-center gap-8 border-secondary-yellow hover:shadow-[0_20px_50px_rgba(255,191,0,0.25)] shadow-lg w-full h-auto overflow-hidden mt-8 ease-linear duration-300 group relative p-6  transform hover:scale-105 transition-all"
                >
                  <h2 className="text-amber-200 text-2xl md:text-4xl font-medium text-wrap text-center tracking-wide">
                    {item.title}
                  </h2>
                  <hr className="border-amber-500 w-full" />
                  <p className="text-gray-300 text-base md:text-xl font-medium text-center w-full md:w-[95%] leading-[30px] ">
                    {item.description}
                  </p>
                  {/* {link && ( */}
                  <Link to="#">
                    <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base md:text-lg   focus:outline-none rounded-lg shadow-lg hover:shadow-amber-500/20 transition duration-300">
                      Register Now
                    </button>
                  </Link>
                  {/* )} */}
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div>Loading event details...</div>
        )}
      </div>
    </div>
  );
}

export default EventsDetail;

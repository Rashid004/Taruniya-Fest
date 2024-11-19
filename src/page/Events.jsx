/** @format */
import { motion } from "framer-motion";
import EventCard from "../components/EventCard/EventCard";

/** @format */
const events = [
  {
    id: "preEvents",
    title: "Pre-Events",
    description:
      "These preliminary activities set the tone for the fest, building excitement and encouraging early participation. They provide a sneak peek into the main events, engaging participants and audiences with fun, energetic challenges that prepare everyone for the fest's main attractions.",
  },
  {
    id: "literaryOratoryArts",
    title: "Literary/Oratory Arts",
    description:
      "This department celebrates the power of words, intellect, and public speaking. Events include debates, quizzes, elocution, and creative writing, where participants engage in intellectually stimulating activities that challenge their knowledge, creativity, and ability to communicate ideas clearly and persuasively.",
  },
  {
    id: "performingArts",
    title: "Performing Arts",
    description:
      "Celebrating artistic expression, this department offers events in dance, music, theatre, and more. It’s a platform for performers to bring their talents to the stage, blending creativity, technical skills, and audience engagement to create memorable experiences.",
  },
  {
    id: "fineArts",
    title: "Fine Arts",
    description:
      "A space for visual artists to showcase their imagination and craftsmanship. Participants express themselves through mediums like painting, drawing, and traditional arts, focusing on creativity, aesthetic skill, and originality.",
  },
  {
    id: "psychologicalEvents",
    title: "Psychological Events",
    description:
      "Designed to challenge participants’ mental acuity, these events encourage analytical thinking, knowledge of psychological concepts, and creative problem-solving. Activities explore the mind's depths, testing logical reasoning and understanding of human behavior.",
  },
  {
    id: "sports",
    title: "Sports",
    description:
      "A showcase of physical prowess, teamwork, and strategy. From traditional sports like cricket and football to strength-based games like tug-of-war, this department brings together athletes to compete in a variety of events that celebrate skill, endurance, and sportsmanship.",
  },
  {
    id: "mediaEvents",
    title: "Media Events",
    description:
      "A creative arena for capturing moments and crafting stories, Media Events include photography, videography, and social media challenges. Participants can showcase their skills in framing, editing, and content creation, highlighting their ability to narrate impactful stories visually.",
  },
  {
    id: "eGames",
    title: "E-Games",
    description:
      "A fast-paced, competitive category for gaming enthusiasts, focusing on strategic, real-time challenges like battle royale and sports simulations. This department tests players' reflexes, decision-making, and teamwork in immersive digital environments.",
  },
];

function Events() {
  return (
    <section>
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
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
  );
}

export default Events;

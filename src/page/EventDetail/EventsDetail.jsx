/** @format */

import { useParams } from "react-router-dom";

const eventDetails = {
  crossover: {
    heading: "Crossover",
    events: [
      {
        title: "Fusion Fiesta",
        description:
          "A spectacular showcase of interdepartmental collaboration, blending various art forms into a cohesive performance.",
      },
      {
        title: "Talent Mash-up",
        description:
          "Participants from different departments team up to create unique performances that transcend traditional boundaries.",
      },
      {
        title: "Collaborative Canvas",
        description:
          "A large-scale art installation created by artists from multiple disciplines working together.",
      },
    ],
  },
  malharSpaces: {
    heading: "Malhar Spaces",
    events: [
      {
        title: "Improv Alley",
        description:
          "A spontaneous performance space where participants can showcase their improvisational skills in various art forms.",
      },
      {
        title: "Virtual Reality Experience",
        description:
          "An immersive VR installation that allows visitors to explore and interact with digital art in a virtual Malhar space.",
      },
      {
        title: "Flash Mob Central",
        description:
          "A designated area for surprise flash mobs, encouraging spontaneous dance and music performances throughout the event.",
      },
    ],
  },
  literaryArts: {
    heading: "Literary Arts",
    events: [
      {
        title: "Slam Poetry Showdown",
        description:
          "A high-energy poetry competition where participants perform their original works with passion and conviction.",
      },
      {
        title: "Flash Fiction Challenge",
        description:
          "Participants craft compelling short stories within a strict word limit and time constraint.",
      },
      {
        title: "Literary Cosplay",
        description:
          "A costume contest where participants dress up as their favorite literary characters and perform a short monologue.",
      },
      {
        title: "Storytellers' Circle",
        description:
          "An intimate gathering where participants share personal stories and anecdotes in a supportive environment.",
      },
    ],
  },
  entertainmentTheatricalsContests: {
    heading: "Entertainment, Theatricals and Contests",
    events: [
      {
        title: "Battle of the Bands",
        description:
          "A high-octane music competition showcasing the best upcoming bands across various genres.",
      },
      {
        title: "Improv Theatre League",
        description:
          "Teams compete in a series of improvisational theatre challenges, creating hilarious scenes on the spot.",
      },
      {
        title: "Malhar's Got Talent",
        description:
          "A grand talent show featuring a diverse range of performances from singing and dancing to magic and acrobatics.",
      },
    ],
  },
  fineArts: {
    heading: "Fine Arts",
    events: [
      {
        title: "Live Mural Painting",
        description:
          "Artists collaborate to create a massive mural over the course of the festival, with visitors watching the process unfold.",
      },
      {
        title: "Sculpture Garden",
        description:
          "An outdoor exhibition of student-created sculptures, showcasing various materials and techniques.",
      },
      {
        title: "Digital Art Showcase",
        description:
          "A gallery of cutting-edge digital artworks, including animated pieces and interactive installations.",
      },
    ],
  },
  indianPerformingArts: {
    heading: "Indian Performing Arts",
    events: [
      {
        title: "Classical Fusion Extravaganza",
        description:
          "A grand performance blending various Indian classical dance forms with contemporary music and choreography.",
      },
      {
        title: "Folk Tale Dramatization",
        description:
          "Theatrical performances bringing to life traditional Indian folk tales through music, dance, and drama.",
      },
      {
        title: "Bollywood Bonanza",
        description:
          "A high-energy dance competition featuring iconic Bollywood songs and choreography from different eras.",
      },
    ],
  },
  worldPerformingArts: {
    heading: "World Performing Arts",
    events: [
      {
        title: "Global Rhythms",
        description:
          "A music festival showcasing diverse genres from around the world, from K-pop to Latin jazz.",
      },
      {
        title: "International Dance-Off",
        description:
          "Dancers compete in various styles including hip-hop, salsa, ballet, and contemporary from different cultures.",
      },
      {
        title: "A Cappella World Tour",
        description:
          "Vocal groups perform songs from different countries and cultures, showcasing the power of the human voice.",
      },
    ],
  },
};

function EventsDetail() {
  const { eventId } = useParams();
  const event = eventDetails[eventId];

  if (!event) return <div>Event not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl font-bold text-center text-[#DECBA7] tracking-wider mt-8 mb-8">
        {event.heading}
      </h1>
      <div className="flex flex-col gap-8">
        {event.events.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#000000] bg-opacity-40 rounded-3xl shadow-md px-8 py-8 flex flex-col items-center gap-8 border-2 border-[#DECBA7]"
          >
            <h2 className="text-[#DECBA7] text-4xl font-medium">
              {item.title}
            </h2>
            <p className="text-[#DECBA7] text-xl font-medium text-center w-[90%] leading-[30px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsDetail;

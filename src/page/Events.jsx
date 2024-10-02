/** @format */

import { Link } from "react-router-dom";

/** @format */
const events = [
  {
    id: "crossover",
    title: "Crossover",
    description:
      "Malhar is about many aspects, like cooperation, collaboration, and a collected set of efforts striving towards a common goal. Crossover events fit into all the above-mentioned adjectives and are best defined as a fusion of talents. The Crossover events carry forward the legacy of Malhar by proving that despite having different departments, there is nothing better than when they come together to create a spectacle.",
  },
  {
    id: "malharSpaces",
    title: "Malhar Spaces",
    description:
      "Malhar Spaces speaks of collaboration, embodying the spirit of unity as we celebrate life. Sometimes, a twist is just what we need. Moving beyond our flagship and classic events, Malhar Spaces introduces novelty, nudging your creative thinking caps towards spontaneity. Embrace the unexpected and showcase your talent in new and exciting ways!",
  },
  {
    id: "literaryArts",
    title: "Literary Arts",
    description:
      "Stories give meaning to experience. One need not use big words or discuss heavy emotions to tell a tale that is impactful. Stories are meant to be entertaining, witty, and dramatic to be truly memorable. LA hopes to make the act of storytelling accessible, engaging, and enjoyable for everyone.",
  },
  {
    id: "entertainmentTheatricalsContests",
    title: "Entertainment, Theatricals and Contests",
    description:
      "Entertainment, Theatricals & Contests is guided by the principles of enjoyment and competition. Each event within the department ensures an exhilarating experience not only for the audience, but also the participants and the organizers. ETC hosts a wide range of events- from sporty field domination to unique forms of theatre. However, each event promises fun and unique experiences for all!",
  },
  {
    id: "fineArts",
    title: "Fine Arts",
    description:
      "Fine Arts is a department that celebrates the talent and passion of young artists, incorporating a holistic approach that fosters creativity and collaboration, offering a rich tapestry of human expression through several mediums.",
  },
  {
    id: "indianPerformingArts",
    title: "Indian Performing Arts",
    description:
      "IPA celebrates the rich and diverse cultural heritage of India through various forms of artistic expression, including classical and folk dances, music, and drama. It showcases the vibrant traditions and stories from different regions, reflecting India's historical and cultural depth. This year, the event features not only classical and folk performances but also a delightful 'tadka' of Bollywood music, ensuring continuous entertainment for the audience.",
  },
  {
    id: "worldPerformingArts",
    title: "World Performing Arts",
    description:
      "Welcome to WPA (wuh-pah), a place for music and dance enthusiasts to experience their moment of glory! Our vision this year is to blend simplicity with creativity, crafting unforgettable experiences that inspire and entertain. Join us in a world where every performance tells a story and every artist finds their voice. Come alive with passion at WPA - the heart of Malhar - Livin' la vida loca.",
  },
];

function Events() {
  return (
    <section>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-6xl font-bold text-center text-[#DECBA7] tracking-wider mt-8">
          Events
        </h1>
        {events.map((event) => (
          <div
            key={event.id}
            className="shadows-hover w-full h-auto bg-[#000000] rounded-3xl shadow-md overflow-hidden mt-8 px-12 py-8 flex flex-col items-center gap-8 border-2 border-[#DECBA7] transition-shadow ease-linear duration-300"
          >
            <h2 className="text-[#DECBA7] text-4xl font-medium">
              {event.title}
            </h2>
            <p className="text-[#DECBA7] text-xl font-medium text-center w-[90%] leading-[30px]">
              {event.description}
            </p>
            <Link to={`/events/${event.id}`}>
              <button className="bg-[#8A0000] text-[#DECBA7] px-8 py-4 font-medium text-xl rounded-[4px] transition-colors ease-linear duration-150 hover:text-[#decba7c4] hover:bg-[#ac1212]  focus:outline-none focus:border-[#decba7] focus:ring-[#decba7] focus:ring-2 ring-offset-1 ring-offset-[#ac1212]">
                View Events
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;

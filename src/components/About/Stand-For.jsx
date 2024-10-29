/** @format */

function StandFor() {
  return (
    <div className="w-full  h-full px-8 py-6  bg-primaryDark rounded-lg">
      <div className="flex items-start gap-8">
        {/* First Section */}
        <div className="w-full 2md:w-1/2 ">
          <h1 className="uppercase text-5xl text-secondary-yellow font-semibold mb-2 tracking-widest">
            Tarunya
          </h1>
          <h6 className="text-amber-600 text-lg font-medium tracking-wider">
            comes from the Sanskrit word
          </h6>
          <h3 className="flex items-center gap-2 text-amber-500 text-3xl font-medium my-2">
            <blockquote className="tracking-widest">“Taruna”</blockquote>
            <span className="text-amber-500">(तरुण)</span>
          </h3>
          <h6 className="text-secondary-yellow text-lg font-medium tracking-widest">
            meaning youth, vigor, and vitality.
          </h6>
          <p className="text-amber-600 text-base leading-relaxed mt-4">
            It symbolizes the zest and potential inherent in young individuals.
            “Tarunya” represents the boundless energy, creativity, and drive
            that define the youth, celebrating the fusion of passion and
            innovative ideas. This fest is where youthful dreams take flight,
            unlocking new opportunities and pushing the boundaries of
            imagination.
          </p>
        </div>

        {/* Second Section */}
        <div className="w-full 2md:w-1/2">
          <h1 className="uppercase text-4xl text-secondary-yellow font-semibold mb-4 tracking-widest">
            Where Passion Meets Youth
          </h1>
          <h6 className="text-amber-600 text-lg font-medium tracking-wider">
            The tagline reflects
          </h6>
          <h3 className="text-amber-500 text-2xl font-medium tracking-widest mb-2">
            The powerful union of raw passion
          </h3>
          <p className="text-amber-600 text-base leading-relaxed mb-2">
            With the energy of youth, it signifies that passion seeks the vigor
            of youth to come alive and reach its full potential.
          </p>
          <p className="text-amber-600 text-base leading-relaxed mb-2">
            At &ldquo;Tarunya&ldquo; this fusion occurs,
          </p>
          <p className="text-amber-600 text-base leading-relaxed">
            where creativity, ambition, and youthful energy combine to turn
            dreams into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StandFor;

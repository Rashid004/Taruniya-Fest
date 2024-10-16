/** @format */

function Home() {
  return (
    <section className="h-[80vh] relative">
      {/* Clouds Left-1 */}
      <div className="absolute left-[22%] right-0 top-10 z-[-1]">
        <img
          src="/home/cloudleft-1.png"
          alt="Cloud Left-1"
          className="w-[150px] sm:w-[100px] lg:w-[150px] object-cover"
        />
      </div>

      {/* Clouds Left-2 */}
      <div className="absolute -left-14 right-0 top-16 z-[-1]">
        <img
          src="/home/cloudleft-2.png"
          alt="Cloud left-2"
          className="w-[150px] sm:w-[100px] lg:w-[150px] object-cover"
        />
      </div>

      {/* Clouds Right-1 */}
      <div className="absolute -right-[6%] top-6 z-[-1]">
        <img
          src="/home/cloudright-1.png"
          alt="Cloud right-1"
          className="w-[350px] sm:w-[200px] md:w-[250px] lg:w-[350px] object-cover"
        />
      </div>

      {/* Clouds Right-2 */}
      <div className="absolute -right-[5%] top-[28%] z-[-1]">
        <img
          src="/home/cloudright-2.png"
          alt="Cloud right-2"
          className="w-[220px] sm:w-[150px] md:w-[180px] lg:w-[220px] object-cover"
        />
      </div>

      {/* Clouds Middle */}
      <div className="absolute right-1/4 top-[28%] z-[-1]">
        <img
          src="/home/cloudmiddle.png"
          alt="Cloud middle"
          className="w-[180px] sm:w-[100px] md:w-[140px] lg:w-[180px] object-cover"
        />
      </div>

      {/* Logo */}
      <div className="absolute right-0 left-0 translate-x-[40%] top-0 z-[-1]">
        <img
          src="/home/logo.png"
          alt="Logo of Navneet Fest"
          className="w-[350px] sm:w-[200px] md:w-[280px] lg:w-[350px] object-cover"
        />
      </div>

      {/* Left Building */}
      <div className="absolute left-0 right-0 top-0 z-[-1]">
        <img
          src="/home/leftbuilding.png"
          alt="left-building"
          className="w-[500px] sm:w-[250px] md:w-[400px] lg:w-[500px] object-cover"
        />
      </div>

      {/* Gateway of India */}
      <div className="absolute left-0 translate-x-[6%] right-0 top-[30%] z-[-1]">
        <img
          src="/home/gateway.png"
          alt="Gateway of India"
          className="w-[330px] sm:w-[150px] md:w-[250px] lg:w-[330px] object-cover"
        />
      </div>

      {/* Right Building */}
      <div className="absolute right-0 translate-x-[6%] top-[25%] z-[-1]">
        <img
          src="/home/buildingright.png"
          alt="building right"
          className="w-[600px] sm:w-[300px] md:w-[500px] lg:w-[600px] object-cover"
        />
      </div>

      {/* Clock Tower */}
      <div className="absolute right-[15%] top-3 z-[-1]">
        <img
          src="/home/clocktower.png"
          alt="Clock Tower"
          className="w-[74px] sm:w-[50px] lg:w-[74px] object-cover"
        />
      </div>

      {/* Line Background */}
      <div className="absolute left-0 right-0 bottom-[30%] z-[-1]">
        <img src="/home/linebg.png" alt="Line bg" className="w-full" />
      </div>

      {/* Cars and Bus */}
      <div className="absolute -left-32 top-[60%] translate-y-[65%] z-[-1]">
        <img
          src="/home/carleft-1.png"
          alt="car-left-1"
          className="w-[300px] sm:w-[200px] lg:w-[300px] object-cover"
        />
      </div>
      <div className="absolute left-40 top-[88%] z-[-1]">
        <img
          src="/home/carleft-2.png"
          alt="car-left-2"
          className="w-[300px] sm:w-[200px] lg:w-[300px] object-cover"
        />
      </div>
      <div className="absolute left-1/3 top-[65%] z-[-1] translate-y-1/2">
        <img
          src="/home/bus.png"
          alt="Bus"
          className="w-[600px] sm:w-[300px] md:w-[450px] lg:w-[600px] object-cover"
        />
      </div>
      <div className="absolute right-[16%] top-[80%] z-[-1] translate-y-1/2">
        <img
          src="/home/carright-1.png"
          alt="car-right-1"
          className="w-[300px] sm:w-[200px] lg:w-[300px] object-cover"
        />
      </div>
      <div className="absolute right-5 top-[70%] z-[-1] translate-y-1/2">
        <img
          src="/home/carright-2.png"
          alt="car-right-2"
          className="w-[300px] sm:w-[200px] lg:w-[300px] object-cover"
        />
      </div>
    </section>
  );
}

export default Home;

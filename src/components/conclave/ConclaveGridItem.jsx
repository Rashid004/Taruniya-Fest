/** @format */

const GridItem = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col max-w-5xl mx-auto ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }  items-center justify-between`}
    >
      <div className="w-full md:w-1/2 py-10">
        <div className="bg-black bg-opacity-50 py-8 px-6 rounded-3xl border-2 border-[#DECBA7] shadow-lg text-center">
          <h2 className="text-2xl font-bold text-[#DECBA7] mb-4">{title}</h2>
          <p className="text-[#DECBA7] mb-4">{description}</p>
          <button className="flex items-center text-[#DECBA7] hover:text-white transition-colors duration-300"></button>
        </div>
      </div>
      <div className="w-full md:w-[30%] h-full pt-10 ">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-1/2 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};
export default GridItem;

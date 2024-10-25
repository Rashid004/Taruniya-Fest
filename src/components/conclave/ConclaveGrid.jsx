/** @format */

import GridItem from "./ConclaveGridItem";

const gridData = [
  {
    id: 1,
    title: "Ananya Birla: A Young Visionary",
    description: "Ananya Birla, a businessperson and artist...",
    imageSrc:
      "https://www.grasim.com/Upload/Content_Files/ananya-birla-grasim.jpg",
    imageAlt: "Ananya Birla",
  },
  {
    id: 2,
    title: "Empowering Through Music and Business",
    description: "Ananya Birla's journey exemplifies...",
    imageSrc:
      "https://t3.ftcdn.net/jpg/06/54/82/40/360_F_654824007_NRuEegToWDvB1Ovb5ueizWG6w89ujWZz.jpg",
    imageAlt: "Ananya Birla performing",
  },
];

const ConclaveGrid = () => {
  // const [gridData, setGridData] = useState([]);

  // // Fetch data from an API or local JSON file
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/path-to-your-data.json"); // Adjust path as needed
  //       setGridData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {gridData.map((item, index) => (
        <GridItem
          key={item.id}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ConclaveGrid;

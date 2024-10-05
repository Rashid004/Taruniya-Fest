/** @format */
import GridItem from "./ConclaveGridItem";

const ConclaveGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <GridItem
        title="Ananya Birla: A Young Visionary"
        description="Ananya Birla, a businessperson and artist, was recently named on Economic Times' 40under40 and Fortune 40Under40. She launched Svatantra at 17, now the second-largest microfinance organization in India. With a team of over 16,000 and a GLP of 2 billion USD, Ananya is also a director on the Aditya Birla Group. She's the only English language singer to go platinum in India multiple times. An advocate for mental health, Ananya founded the Ananya Birla Foundation, working across various sectors."
        imageSrc="https://www.grasim.com/Upload/Content_Files/ananya-birla-grasim.jpg"
        imageAlt="Ananya Birla"
      />
      <GridItem
        title="Empowering Through Music and Business"
        description="Ananya Birla's journey exemplifies the incredible achievements possible for young people with passion and perseverance. Her work spans from disrupting norms in microfinance to achieving platinum status in the music industry. Named one of Business Today's Most Powerful Women 2023, Ananya continues to inspire and lead across multiple fields."
        imageSrc="https://t3.ftcdn.net/jpg/06/54/82/40/360_F_654824007_NRuEegToWDvB1Ovb5ueizWG6w89ujWZz.jpg"
        imageAlt="Ananya Birla performing"
        reverse={true}
      />
    </div>
  );
};

export default ConclaveGrid;

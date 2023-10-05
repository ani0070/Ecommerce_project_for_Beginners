import HeroSection from "./components/HeroSection";

import { useProductContext } from "./context/Productcontex";


const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Shopping Store",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
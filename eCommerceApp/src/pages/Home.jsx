// import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      {/* <Slider /> */}
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </>
  );
};

export default Home;

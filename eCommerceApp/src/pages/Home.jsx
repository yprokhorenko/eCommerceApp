// import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
// import Slider from "../components/Slider/Slider";

const Home = () => {
  return (   
    <>
      {/* <Slider /> */}
      <FeaturedProducts type="featured" desc="Elevate your style with our premium leather wallet. Crafted with precision, it offers both elegance and functionality. Organize your essentials in style." />
      <Categories />
      <FeaturedProducts type="trending" desc="Designed for both comfort and style, this is the perfect addition to your wardrobe. Whether you're dressing up or down, it's the versatile piece you need for any fashion-forward outfit." />
      <Contact />
    </>
  );
};

export default Home;

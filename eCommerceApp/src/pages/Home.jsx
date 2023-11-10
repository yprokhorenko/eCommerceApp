import ProductsBlock from "../components/HomePage/ProductsBlock";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
// import Slider from "../components/Slider/Slider";
import { useSelector } from 'react-redux';
import styled from "styled-components";

const Wrapper = styled.div`

`

const Home = () => {
  const featuredProducts = useSelector((state) => state.products.featuredProducts) 
  const freeShippingProducts = useSelector((state) => state.products.freeShippingProducts) 

  return (   
    <Wrapper className="home">
      {/* <Slider /> */}
      <ProductsBlock  type="featured" products={featuredProducts} desc="Elevate your style with our premium leather wallet. Crafted with precision, it offers both elegance and functionality. Organize your essentials in style." />
      <Categories />
      <ProductsBlock  type="Free Shipping" products={freeShippingProducts} desc="Designed for both comfort and style, this is the perfect addition to your wardrobe. Whether you're dressing up or down, it's the versatile piece you need for any fashion-forward outfit." />
      <Contact />
    </Wrapper>
  );
};

export default Home;

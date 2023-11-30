import ProductsBlock from "../components/HomePage/ProductsBlock";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
// import Slider from "../components/Slider/Slider";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import ProductsSlider from "../components/Slider/ProductsSlider";

const Wrapper = styled.div``;

const Home = () => {
  const featuredProducts = useSelector(
    (state) => state.products.featuredProducts
  );
  const freeShippingProducts = useSelector(
    (state) => state.products.freeShippingProducts
  );


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const isMobile = windowWidth <= 700;


  return (
    <Wrapper className="home">
      {/* <Slider /> */}

      {isMobile ? (
        <ProductsSlider
          type="featured"
          products={featuredProducts}
          desc="Elevate your style with our premium leather wallet. Crafted with precision, it offers both elegance and functionality. Organize your essentials in style."
        />
      ) : (
        <ProductsBlock
          type="featured"
          products={featuredProducts}
          desc="Elevate your style with our premium leather wallet. Crafted with precision, it offers both elegance and functionality. Organize your essentials in style."
        />
      )}
      <Categories />
      {isMobile ? (
        <ProductsSlider
          type="Free Shipping"
          products={freeShippingProducts}
          desc="Designed for both comfort and style, this is the perfect addition to your wardrobe. Whether you're dressing up or down, it's the versatile piece you need for any fashion-forward outfit."
        />
      ) : (
        <ProductsBlock
          type="Free Shipping"
          products={freeShippingProducts}
          desc="Designed for both comfort and style, this is the perfect addition to your wardrobe. Whether you're dressing up or down, it's the versatile piece you need for any fashion-forward outfit."
        />
      )}

      <Contact />
    </Wrapper>
  );
};

export default Home;

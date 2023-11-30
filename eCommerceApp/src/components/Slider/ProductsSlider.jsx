import styled from "styled-components";
// import Loading from "../Loading";
import React, { useRef, useState, useSelector } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { capitalizeWords } from "../../constants.js";
import { IoFingerPrintOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loading from "../Loading.jsx";

const Wrapper = styled.div`
  margin: 0 40px;
  .container {
    padding: 90px 0;
    max-width: 100%;
    margin: 0 auto;
  }

  .mySwiper {
    width: 220px;
    height: 290px;
  }

  .slider {
    /* width: 100%; */
  }

  .singleImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .slider {
    position: relative;
  }

  .name-price {
    display: flex;
    flex-direction: column;
  }
  .name {
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 0;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    padding: 0 20px;
    background-color: #fff;
  }

  .price {
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 0;
    color: #00a046;
    font-size: 26px;
    font-weight: bold;
    padding: 0 20px;
    background-color: #fff;
  }
  .finger {
    display: flex;
    color: #00a046;
    position: absolute;
    z-index: 1;
    left: 95px;
    bottom: 15px;
    font-size: 23px;
    background-color: #ffffff8d;
    padding: 5px;
    border-radius: 50%;
  }
  .finger:hover,
  .finger:active {
    color: #006e30;
  }
`;

const ProductsSlider = ({ type, desc, products }) => {
  console.log("products", products);
  if (
    !products ||
    products.length === 0 ||
    !products.every((product) => product.image)
  ) {
    return (
      <div
        style={{
          width: "100vw",
          height: "480px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Loading />
      </div>
    );
  }
  return (
    <Wrapper>
      <div className="container">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {products.map((product) => (
            <div className="slider" key={product.id}>
              <SwiperSlide style={{ position: "relative", zIndex: 1 }}>
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="singleImg"
                  />
                </Link>
                <div className="name-price">
                  <div className="name"> {capitalizeWords(product.name)}</div>
                  <div className="price"> ${product.price / 100}</div>
                </div>
                <Link to={`/products/${product.id}`} className="finger">
                  <IoFingerPrintOutline />
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default ProductsSlider;

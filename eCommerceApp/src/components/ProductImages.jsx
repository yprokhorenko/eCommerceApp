import React, { useState } from "react";
import styled from "styled-components";
import {FcNext,FcPrevious} from "react-icons/fc";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }

  .mainImg {
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
  }

  .mini-img {
    height: 65px;
    width: 65px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
  }

  .active {
    outline: 1px solid #2879fe;
    transform: scale(1.05);
  }

  .arrowButton {
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
    top: 40%;
    transform: translateY(-50%);
    background: #bbbbbbef;
    border: none;
    padding: 10px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
    cursor: pointer;
    &:active {
      background: #979797ed;
      transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
    }
  }


  .leftArrow {
    left: 10px;
  }

  .rightArrow {
    right: 10px;
  }

  @media (max-width: 930px) {
    .container {
      margin: 0 auto !important;
    }
    .mainImg {
      height: 350px;
      width: 500px;
    }
  }
`;

const ProductImages = ({ images = [] }) => {
  const [mainIndex, setMainIndex] = useState(0);

  const handleNextImage = () => {
    if (images.length === 0) return;

    setMainIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    if (images.length === 0) return;

    setMainIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Wrapper>
      <div className="container">
        <img
          className="mainImg"
          src={images[mainIndex]?.url}
          alt={images[mainIndex]?.filename}
        />
        <div className="gallery">
          {images.map((image, index) => (
            <img
              className={`mini-img ${index === mainIndex ? "active" : ""}`}
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMainIndex(index)}
            />
          ))}
        </div>
        {images.length > 0 && (
          <>
            <button className="arrowButton leftArrow" onClick={handlePrevImage}>
            <FcPrevious/>
            </button>
            <button className="arrowButton rightArrow" onClick={handleNextImage}>
            <FcNext/>
            </button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductImages;

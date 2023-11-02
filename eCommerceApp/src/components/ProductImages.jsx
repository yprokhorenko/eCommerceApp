import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  }

  @media (max-width: 930px) {
    .container {
       margin: 0 auto !important;
    }
    .mainImg {
      height: 350px;
      width: 500px ;
    }
  }
`;

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  console.log("images", images);

  return (
    <Wrapper>
      <div className="container">
        <img className="mainImg" src={main.url} alt="" />
        <div className="gallery">
          {images.map((image, index) => {
            return (
              <img
                className={`mini-img ${image.url === main.url ? "active" : ""}`}
                src={image.url}
                alt={image.filename}
                key={index}
                onClick={() => {
                  setMain(images[index]);
                }}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductImages;

import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }

  .mainImg {
    width: 600px;
    height: 600px;
    object-fit: cover;
    border-radius: 4px;
  }

  .mini-img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
  }

  .active {
    outline: 1px solid #2879fe;
  }
`;

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
//   console.log("main", main);

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

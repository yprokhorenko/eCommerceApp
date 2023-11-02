import React from "react";
import Card from "../Card";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    /* background-color: red; */
  }
  .container > div {
    margin: 0 30px;
  }

  @media (max-width: 1200px) {
    .container {
      margin: 0 40px;
    }
  }

  @media (max-width: 970px) {
    .container {
      justify-content: center;
    }
  }
`;

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container">
        {products.map((product) => {
          return <Card item={product} key={product.id}  />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;

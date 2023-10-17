import React from "react";
import Card from "../Card";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
  /* border: 2px solid green; */
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 60px;
    justify-content: flex-start ;
  }
`;

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container">
        {products.map((product) => {
          return <Card item={product} key={product.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;

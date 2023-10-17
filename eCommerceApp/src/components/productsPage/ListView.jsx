import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Wrapper = styled.div`
  .container {
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
 
`;

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container">
        {products.map((product) => {
          return <Card item={product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ListView;

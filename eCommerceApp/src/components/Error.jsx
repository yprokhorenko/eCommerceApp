import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    font-size: 33px;
    color: black;
  }
`;

const Error = () => {
  return (
    <Wrapper className="container">
      <h1 className=""> 404</h1>
    </Wrapper>
  );
};

export default Error;

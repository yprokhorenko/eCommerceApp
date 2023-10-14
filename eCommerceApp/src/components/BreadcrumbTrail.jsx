import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section``;

const BreadcrumbTrail = ({ title, product }) => {
  return <Wrapper>

    <div className="">
        <h3> 
            <Link to="/">Home</Link> {product && ( <Link to="/products"> / Products / </Link> )}
            {title}
        </h3>
    </div>
  </Wrapper>;
};

export default BreadcrumbTrail;

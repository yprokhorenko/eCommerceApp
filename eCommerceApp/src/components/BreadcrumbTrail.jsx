import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {capitalizeWords} from "../constants.js"

const Wrapper = styled.section`
.container {
  margin-top: 50px;
}

.activeBread {
  color: #00A046;

}

.links {
  color: #333;
  font-weight: 500;
  letter-spacing: 3px ;
}


`;

const BreadcrumbTrail = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="links">
          <Link to="/"> Home / </Link>
          {product && <Link to="/products">Products / </Link>}
          <span className="activeBread">
            {capitalizeWords(title)}
          </span>
        </h3>
      </div>
    </Wrapper>
  );
};

export default BreadcrumbTrail;

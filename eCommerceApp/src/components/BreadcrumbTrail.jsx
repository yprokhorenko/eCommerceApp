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
  font-weight: 400;
  letter-spacing: 1px ;
  font-size: 16px;

}

@media (max-width: 930px) {
  .container {
  margin-top: 0px;
}
}
@media (max-width: 1050px) {
  .links {
font-size: 12px;
letter-spacing: 1px ;
gap: 8px !important;
}
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

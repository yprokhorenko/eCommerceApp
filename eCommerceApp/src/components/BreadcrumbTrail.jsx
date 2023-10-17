import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
.container {
  margin-top: 50px;
}

.links {
  color: #00A046;
  font-size: 16px;
  font-weight: 500;
}

.activeBread {
  color: #333
}

`;

const BreadcrumbTrail = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="links">
          <Link to="/">Home /  </Link>
          {product && <Link to="/products"> / Products / </Link>}
          <span className="activeBread">{title}</span>
        </h3>
      </div>
    </Wrapper>
  );
};

export default BreadcrumbTrail;

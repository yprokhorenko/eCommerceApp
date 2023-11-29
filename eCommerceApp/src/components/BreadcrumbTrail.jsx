import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { capitalizeWords } from "../constants.js";

const Wrapper = styled.section`
  .container {
    margin: auto;
    margin-top: 75px;
    width: 100%;
    color: #4e4c4c88;
  }
  .breadcrumbs .crumb a {
    color: #4e4c4c88;
  }

  .activeBread {
    color: #00a046;
  }

  .breadcrumbs {
    display: flex;
    gap: 10px;
  }

  .breadcrumbs > * {
    display: inline-block;
    margin-right: 10px;
  }

  .breadcrumbs .crumb:after {
    content: "/";
    margin-left: 10px;
  }

  .breadcrumbs .crumb:last-child:after {
    content: none;
  }

  .crumb {
    margin-right: 5px;
    font-size: 14px;
  }

  .active {
    color: #00a046;
  }
  .breadcrumbs .crumb:last-child.active {
    display: none;
  }

  .breadcrumbs .crumb:last-child a {
    color: #333333d6;
  }

  
`;

const BreadcrumbTrail = () => {
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      const path = `/${array.slice(0, index + 1).join("/")}`;
      return (
        <div
          className={`crumb ${path === location.pathname ? "active" : ""}`}
          key={crumb}
        >
          <Link to={path}>{capitalizeWords(crumb)}</Link>
        </div>
      );
    });

  return (
    <Wrapper>
      <div className="container">
        <div className="breadcrumbs">
          {location.pathname != "/" && (
            <div className="crumb">
              <Link to="/" style={{ color: "#4e4c4c88" }}>
                Home
              </Link>
            </div>
          )}
          {crumbs}
        </div>
      </div>
    </Wrapper>
  );
};

export default BreadcrumbTrail;

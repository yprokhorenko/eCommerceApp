import React from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #dbdbdb90; */

  .container {
    width: 80%;
    display: flex;
    /* border: 1px solid blue; */
    min-height: 500px;
    min-width: 450px;
    max-width: 1200px;

  }

  .left-panel {
    width: 23%;
    padding: 15px;
    color: #727272;
    /* border: 1px solid green; */
    background-color: #dbdbdb90;
    border-radius: 0px;
    min-width: 200px;
  }

  .right {
    flex: 1;
    padding: 20px;
  }

  .sidenav {
    display: flex;
    flex-direction: column;

    .active {
      color: #333;
      .container .left-panel {
        padding: 0px;
      }
    }
    .item {
      padding: 7px 12px;
    }

    .item:hover {
      color: #2e2e2efd;
    }
  }
`;

const Cabinet = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="left-panel">
          <div className="sidenav">
            <NavLink
              to="/cabinet/personal-info"
              activeClassName="active"
              className="item"
            >
              Personal Information
            </NavLink>

            <NavLink
              to="/cabinet/wishlist"
              activeClassName="active"
              className="item"
            >
              Wishlist
            </NavLink>
          </div>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default Cabinet;

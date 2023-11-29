import React from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

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
    background-color: #dbdbdb90;
    border-radius: 0px;
    min-width: 200px;
  }
  @media (max-width: 600px) {
    .left-panel {
  
    }
  }
  .right {
    flex: 1;
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

  @media (max-width: 665px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: initial !important;

    }
    .left-panel {
      width: 80vw;
      margin-bottom: 20px;
    }
    .sidenav {
      display: flex;
      gap: 20px;
      flex-direction: row;
    
    }
    .right {
      width: 80vw !important;
      display: flex;
      align-items: center !important;
      justify-content: center !important;
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
          <Outlet/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cabinet;

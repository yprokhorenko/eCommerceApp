import { HiX } from "react-icons/hi";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import facebook from "../assets/facebook-mini.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    height: 100%;
    width: 300px;
    z-index: 31;
    top: 0;
    left: 0;
    transition: 0.5s all ease;
    box-shadow: rgba(0, 0, 0, 0.1);
    backface-visibility: hidden;
    color: rgb(68, 68, 68);
    padding: 20px;
    background-color: #ffffff;

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 15;
      width: 100%;

      .header-image {
        cursor: pointer;
        width:40px;
          border: 1px solid white;
          border-radius: 50%;
      }
    }

 

    .sidebar-nav {
      margin: 30px 0;

      .nav-single-link {
        text-align: left;
        transition: all 0.1s;
        display: flex;
        justify-content: start;
        align-items: center;

        a {
          font-size: 14px;
          display: block;
          padding: 20px;
          text-transform: uppercase;

          svg {
            margin-right: 10px;
            font-size: 24px;
            vertical-align: sub;
          }
        }

        &:hover {
          color: #444;
          transform: scale(1.1);
          transition: all 0.1s;
        }
      }
    }

    .sidebar-closing-btn {
      font-size: 30px;
      color: #004f9d;
      background-color: transparent;
      cursor: pointer;
      border: none;
      transition: transform 0.2s ease;

      &:hover {
        color: #680000;
        transform: scale(1.2);
        transition: transform 0.2s ease;
      }
    }
  }
  .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9;
      display: ${(props) => (props.isOpen ? "block" : "none")};
  }

  @media (max-width: 600px) {
    .sidebar {
    width: 230px;
  }
 
`;

const SidebarHeader = ({ menuItems, setIsSidebarOpen, isSidebarOpen }) => {
  const handleSidebarClose = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Wrapper isOpen={isSidebarOpen}>
      <div
        className="overlay"
        isOpen={isSidebarOpen}
        onClick={handleSidebarClose}
      >
        {" "}
      </div>

      <aside
        style={{
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
        }}
        className="sidebar"
      >
        <div className="sidebar-header">
          <div className=" ">
            <img src={facebook} alt="logo" className="header-image" />
          </div>
          <button className="sidebar-closing-btn" onClick={handleSidebarClose}>
            <HiX />
          </button>
        </div>

        <ul className="sidebar-nav">
          {menuItems.map((link) => {
            const { id, url, name, icon } = link;
            return (
              <li key={id} className="nav-single-link">
                <span >{icon}</span>
                <Link to={url} onClick={()=> {setIsSidebarOpen(!isSidebarOpen)}}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

export default SidebarHeader;

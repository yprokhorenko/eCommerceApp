import { HiX } from "react-icons/hi";
import styled from "styled-components";
import { useDispatch,useSelector  } from "react-redux";

const Wrapper = styled.div`
  .sidebar-overlay {
    position: fixed;
  height: 100%;
  width: 350px;
  z-index: 11;
  top: 0;
  left: 0;
  transition:  0.8s all cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: translate(-100%);
  box-shadow: rgba(0, 0, 0, 0.1);
  backface-visibility: hidden;
  color: rgb(68, 68, 68);
  padding: 20px;
  background-color: #fff;

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;


      .header-image {
        cursor: pointer;
        width: 220px;
      }

    
    }

  
    .sidebar-nav {
      margin: 30px 0;

      .nav-single-link {
        text-align: left;
        transition: all 0.1s;

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

  .show-sidebar {
    transition:  0.9s  cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: translate(0);

    }

`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 9; 
  display: ${(props) => (props.isOpen ? "block" : "none")};

`;



const SidebarHeader = ({ menuItems, facebook,setIsSidebarOpen,isSidebarOpen }) => {
  console.log("menuItems", menuItems);
  const handleSidebarClose = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <Wrapper >
            <Overlay isOpen={isSidebarOpen} onClick={handleSidebarClose} />

      <aside
        className={`${
          isSidebarOpen ? "sidebar-overlay show-sidebar" : "sidebar-overlay"
        }`}
      >
        <div className="sidebar-header">
          <div className=" ">
            <img src={facebook} alt="logo" className="header-image" />
          </div>
          <button className="sidebar-closing-btn" onClick={handleSidebarClose} >
            <HiX />
          </button>
        </div>

        <ul className="sidebar-nav">
          {menuItems.map((link) => {
            const { id, url, name } = link;
            return (
              <li key={id} className="nav-single-link">
                <a href={url}>{name}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

export default SidebarHeader;

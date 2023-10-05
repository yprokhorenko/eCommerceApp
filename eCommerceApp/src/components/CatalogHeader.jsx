import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { setIsCatalogOpen } from "../redux/navbarSlice";
// import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
.catalog {
    position: absolute;
    top: 70px;
    left: 230px;
    width: 1000px;
    background-color: #dadada;
    border-radius: 4px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .catalog li {
    list-style: none;
    margin: 5px 0;
  }

  .catalog a {
    text-decoration: none;
    font-size: 16px;
    color: #333;
    padding: 10px 20px;
    width: 100%;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .catalog a:hover {
    background-color: #333;
    color: #fff;
  }
    
  
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 9; 
  }
`;



const CatalogHeader = ({ catalog }) => {
  console.log("catalog", catalog);
//  const dispatch = useDispatch();
//  const isCatalogOpen = useSelector((state)=> state.navbar.isCatalogOpen)
  return (
    <Wrapper>
      {/* <div className={`${
          isCatalogOpen ? "overlay show-sidebar" : "overlay"
        }`}></div> */}
      <div className=" catalog" onClick ={() => {}}>
        {catalog.map((item) => {
          const { id, name, link } = item;
          return (
            <li className="" key={id}>
              <NavLink to={link}>{name}</NavLink>
            </li>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default CatalogHeader;

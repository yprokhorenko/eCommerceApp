import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`

.catalog {
    position: absolute;
    top: 56px;
    margin: 0 auto;
    max-width: 900px;
    width: 60vw;
    background-color: white;
    color: black;
    border-radius: 4px;
    height: 300px;
  
    padding: 10px;
    z-index: 22;
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
    
  

`;
const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 9; 
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;



const CatalogHeader = ({ catalog, isCatalogOpen, setIsCatalogOpen }) => {
  
  return (
    <Wrapper>
      <Overlay isOpen={isCatalogOpen}  />
      <div className={`${
          isCatalogOpen ? "overlay catalog" : "overlay"
        }`}></div>
      <div className="catalog">
        {catalog.map((item) => {
          const { id, name, link } = item;
          return (
            <li key={id} onClick={(e) => {
              setIsCatalogOpen(!isCatalogOpen);
            }}>
              <NavLink to={link}>{name}</NavLink>
            </li>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default CatalogHeader;

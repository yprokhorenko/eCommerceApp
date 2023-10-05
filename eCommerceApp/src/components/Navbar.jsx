import React, { useState } from "react";
import headerLang from "../assets/header-lang.png";
import { NavLink, useLocation } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import {TbCategory2,TbMenu2} from "react-icons/tb"
import {
  MdOutlineSearch,
  MdOutlinePermIdentity,
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import facebook from "../images/facebook.svg";
import Cart from "./Cart";
import styled from "styled-components";
import { setIsCartOpen } from "../redux/cartSlice";
import SidebarHeader from "./SidebarHeader";
import { setIsCatalogOpen } from "../redux/navbarSlice";
import CatalogHeader from "./CatalogHeader";
import SearchBar from "./navbar/SearchBar";
import SearchResultsList from "./navbar/SearchResultsList";

const navRight = [
  { id: 1, name: "Man", link: "/man" },
  { id: 2, name: "Woman", link: "/woman" },
  { id: 3, name: "Children", link: "/children" },
  { id: 4, name: "Accessories", link: "/accessories" },
];

const navLeft = [
  { id: 5, name: "Homepage", link: "/" },
  { id: 6, name: "About", link: "/about" },
  { id: 7, name: "Contact", link: "/contact" },
  { id: 8, name: "Stores", link: "/stores" },
];

const Wrapper = styled.div`
  .navbar {
    background: #221F1F;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    position: absolute;
    z-index: 2;
  }

  .navbar_container {
    width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    align-items: center;
    gap: 23px;
    justify-content: center  ;
  }


  .logo-img {
    width: 240px;
  }

  .icon {
    font-size: 20px;
    display: flex;
  }

  .cart-icon {
    position: relative;
  }

  .cart-icon span {
    position: absolute;
    color: white;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00A046;
    font-size: 13px;
  }

  @media screen and (max-width: 1260px) {
    .right-nav,
    .left_nav {
      gap: 10px;
      font-size: 14px;
    }

    .logo-img {
      width: 110px;
    }

    .left {
      gap: 10px;
    }

    .logo-img {
      width: 110px;
      margin: 0 20px;
    }
  }
 
  .sidebar-btn {
    font-size: 28px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    background-color: #221F1F;
    
  }

  .catalog-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    font-size: 20px;
    padding: 8px 14px;
    background-color: #4E4C4C;
    border-radius: 7px;
    color: #F2F2F2;
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover {
      background-color: #a5a5a5d2;
      transition: 0.3s ease all;

    }
  }
  .arrow {
  transition: transform 0.2s ease-in-out;
}

.arrow.open {
  transform: rotate(180deg);
}

.catalog {
}

.search-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  position: relative;
}
.store-logo {
  display: flex;
}

`;

export default function Navbar() {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const isCatalogOpen = useSelector((state)=> state.navbar.isCatalogOpen);

  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showList,setShowList] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCatalogOverlayClick = () => {
    dispatch(setIsCatalogOpen(!isCatalogOpen));
  };

return (
    <Wrapper>
      <div className="navbar">
        <div className="navbar_container">
                                                                 {/*     S I D E    M E N U     */}

            <button className="sidebar-btn">
              <TbMenu2
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              />
              {isSidebarOpen && (
                <SidebarHeader menuItems={navLeft} facebook={facebook} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
              )}
            </button>

            <NavLink exact to="/" className="store-logo">
              <img className="logo-img" src={facebook} alt="Logo" />
            </NavLink>

                                                                 {/*     C    A    T    A     L     O      G     */}
            <div className="catalog"> 
                <button className="catalog-btn" onClick={handleCatalogOverlayClick}>
                  <TbCategory2 style={{ fontSize: "25px" }} /> <p style={{ fontSize: "16px" }}>Catalog</p>
                </button>
                {isCatalogOpen && <CatalogHeader catalog={navRight} />}
            </div>
                                                                {/*     S E A R C H    B A R     */}
            
            <div className="search-bar-container">
                <SearchBar setResults={setResults} input={input} setShowList={setShowList} setInput={setInput} /> 
                {results && results.length > 0  && showList &&  ( <SearchResultsList setInput={setInput} showList={showList} results={results} setShowList={setShowList}  />)} 
            </div>

                                                                {/*     I C O N S    P A N E L    */}
            <> 
                {/* <NavLink to="/search" className="search-icon icon">
                  <MdOutlineSearch />{" "}
                </NavLink> */}
                <NavLink to="/profile" className="profile-icon icon">
                  <MdOutlinePermIdentity />
                </NavLink>
                <NavLink to="/favorite" className="favorite-icon icon">
                  <MdOutlineFavoriteBorder />
                </NavLink>
                <NavLink onClick={() => dispatch(setIsCartOpen({}))} className="cart-icon icon">
                    <MdOutlineShoppingCart />
                    {products.length > 0 && <span>{products.length}</span>}
                </NavLink>
            </>
            
            {isCartOpen && <Cart />}
        


        </div>
      </div>
    </Wrapper>
  );
}

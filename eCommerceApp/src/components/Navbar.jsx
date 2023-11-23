import React, { useState,useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import {TbCategory2,TbMenu2} from "react-icons/tb"
import {
  MdOutlineSearch,
  MdOutlinePermIdentity,
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
  MdRadioButtonUnchecked,
} from "react-icons/md";
import facebook from "../images/facebook.svg";
import Cart from "./Cart";
import styled from "styled-components";
import { setIsCartOpen } from "../redux/cartSlice";
import SidebarHeader from "./SidebarHeader";
import CatalogHeader from "./CatalogHeader";
import SearchBar from "./navbar/SearchBar";
import SearchResultsList from "./navbar/SearchResultsList";
// import { useAuth0 } from "@auth0/auth0-react";

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
    position: fixed;
    z-index: 2;

  }

  .navbar_container {

    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    align-items: center;
    gap: 30px;
    justify-content: center  ;
    position: relative;
  }

  @media (max-width: 1200px) {
     .navbar_container {
      gap: 20px !important; 
    }
  }
 


  .logo-img {
    width: 200px;
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
    font-size: 14px;
    
  }

  @media screen and (max-width: 1250px) {
    .right-nav,
    .left_nav {
      gap: 10px;
      font-size: 14px;
    }

    .logo-img {
      position: absolute;
      bottom: 5px;
      left: 50px;
      clip: rect(0px, 40px, 40px, 0px);
  }

 
   

    .catalog-btn {
      margin-left: 20px;
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
  /* background-color: green; */
  align-items: center;
  min-width: 200px;
  position: relative;
}
.store-logo {
  display: flex;
}

@media (max-width: 790px) {
  .catalog-text {
    display: none;
  }
   .minDisplay {
    display: none ;
   }
   .search-bar-container {
   }
   .store-logo {
    margin-right: 20px;
   }
   .cart-icon {
    margin-left: -50px;
   }
}
@media (max-width: 500px) {
  
   .cart-icon {
    margin-left: -38px;
   }
}

`;

export default function Navbar() {
  // const [myUser, setMyUser] = useState(null);
  // const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  // console.log("isAuthenticated",isAuthenticated)
  // console.log("myUser",myUser)
  

  const dispatch = useDispatch();

  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showList,setShowList] = useState();


  const onNavbarClickHandler = (event) => {

          if (isCatalogOpen) {
            if (!event.target.classList.contains("catalog-btn")) {
              setIsCatalogOpen(false);
            }
          }
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     setMyUser(user);
  //   } else {
  //     setMyUser(false);
  //   }
  // }, [isAuthenticated]);

return (
  <Wrapper>
    <div className="navbar" onClick={onNavbarClickHandler}>
      <div className="navbar_container">
        {/*     S I D E    M E N U     */}

        <button className="sidebar-btn">
          <TbMenu2 onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          {isSidebarOpen && (
            <SidebarHeader
              menuItems={navLeft}
              facebook={facebook}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          )}
        </button>

        <NavLink exact to="/" className="store-logo">
          <img className="logo-img" src={facebook} alt="Logo" />
        </NavLink>

        {/*  --------------------------   C    A    T    A     L     O      G   --------------------------   */}
        <div className="catalog minDisplay">
          <button
            className="catalog-btn"
            onClick={(e) => {
              setIsCatalogOpen(!isCatalogOpen), e.stopPropagation();
            }}
          >
            <TbCategory2 style={{ fontSize: "25px" }} />{" "}
            <p className="catalog-text" style={{ fontSize: "16px" }}>
              Catalog
            </p>
          </button>
          {isCatalogOpen && (
            <CatalogHeader
              catalog={navRight}
              setIsCatalogOpen={setIsCatalogOpen}
              isCatalogOpen={isCatalogOpen}
            />
          )}
        </div>
        {/*     S E A R C H    B A R     */}

        <div className="search-bar-container">
          <SearchBar
            setResults={setResults}
            input={input}
            setShowList={setShowList}
            setInput={setInput}
          />
          {results && results.length > 0 && showList && (
            <SearchResultsList
              setInput={setInput}
              showList={showList}
              results={results}
              setShowList={setShowList}
            />
          )}
        </div>

        {/*     I C O N S    P A N E L    */}
        <>
          {/* <NavLink to="/search" className="search-icon icon">
                  <MdOutlineSearch />{" "}
                </NavLink> */}
          <NavLink to="/cabinet" className="profile-icon icon minDisplay">
            <MdOutlinePermIdentity />
          </NavLink>
          <NavLink to="/cabinet/wishlist" className="favorite-icon icon minDisplay">
            <MdOutlineFavoriteBorder />
          </NavLink>
          <NavLink
            onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
            className="cart-icon icon"
          >
            <MdOutlineShoppingCart />
            {products.length > 0 && <span>{products.length}</span>}
          </NavLink>
        </>

        {isCartOpen && (
          <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        )}

        {/* {myUser ? (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        ) : (
          <button onClick={()=> loginWithRedirect()}>Login</button>
        )} 
        {myUser && <><img src={myUser.picture} alt=""   /> <p>{myUser.nickname}</p> </>} */}
      </div>
    </div>
  </Wrapper>
);
}

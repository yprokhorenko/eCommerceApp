import React, { useState } from "react";
import headerLang from "../assets/header-lang.png";
import { NavLink, useLocation } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import {
  MdOutlineSearch,
  MdOutlinePermIdentity,
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import facebook from "../images/facebook.png";
import Cart from "./Cart";
import styled from "styled-components";
import { setIsCartOpen } from "../redux/cartSlice";

const navLeft = [
  { id: 1, name: "Man", link: "/man" },
  { id: 2, name: "Woman", link: "/woman" },
  { id: 3, name: "Children", link: "/children" },
  { id: 4, name: "Accessories", link: "/accessories" },
];

const navRight = [
  { id: 5, name: "Homepage", link: "/" },
  { id: 6, name: "About", link: "/about" },
  { id: 7, name: "Contact", link: "/contact" },
  { id: 8, name: "Stores", link: "/stores" },
];

const Wrapper = styled.div`
  .navbar {
    background: #f2f2f2;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    color: black;
    position: absolute;
    z-index: 2;
  }

  .navbar_container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
  }

  .left,
  .left_nav {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 30px;
  }

  // .center {}

  // .store-logo {}

  .logo-img {
    width: 130px;
  }

  .right-nav {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    a {
      padding-left: 30px;
    }
  }

  .usd,
  .eng {
    display: flex;
    align-items: center;
    justify-content: center;
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
    background-color: rgba(0, 123, 255, 0.918);
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
  /* .modal-wrapper {
    position: absolute;
    top: 0;
    right: 0;
  } */
`;

export default function Navbar() {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  return (
    <Wrapper>
      <div className="navbar">
        <div className="navbar_container">
          <div className="left">
            <div className="lang">
              <span className="eng">
                <img
                  src={headerLang}
                  style={{ height: "30px" }}
                  alt="english"
                />
                <RiArrowDownSLine />
              </span>
            </div>
            <div className="currency">
              <span className="usd">
                <span>USD</span>
                <RiArrowDownSLine />
              </span>
            </div>
            <ul className="left_nav">
              {navLeft.map((item) => {
                const { id, name, link } = item;
                return (
                  <li className="left_nav_item" key={id}>
                    <NavLink to={link}>{name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="center">
            <NavLink exact to="/" className="store-logo">
              <img className="logo-img" src={facebook} alt="Logo" />
            </NavLink>
          </div>
          <ul className="right-nav">
            {navRight.map((item) => {
              const { id, name, link } = item;
              return (
                <li className="right_nav_item" key={id}>
                  <NavLink to={link}>{name}</NavLink>
                </li>
              );
            })}
            <NavLink to="/search" className="search-icon icon">
              <MdOutlineSearch />{" "}
            </NavLink>
            <NavLink to="/profile" className="profile-icon icon">
              <MdOutlinePermIdentity />
            </NavLink>
            <NavLink to="/favorite" className="favorite-icon icon">
              <MdOutlineFavoriteBorder />
            </NavLink>
            <NavLink
              onClick={() => dispatch(setIsCartOpen({}))}
              className="cart-icon icon"
            >
              <MdOutlineShoppingCart /> {products.length > 0 && <span>{products.length}</span>} </NavLink>
            {/* {cartOpen && (
              <div className="modal-wrapper">
                <Cart />
              </div>
            )} */}
            {isCartOpen && <Cart />}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

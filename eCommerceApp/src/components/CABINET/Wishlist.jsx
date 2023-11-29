import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToFavorite } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { capitalizeWords } from "../../constants";
import { AiOutlineDelete } from "react-icons/ai";

const Container = styled.div`
  /* background-color: red; */
  /* margin: 0 auto; */
  min-height: 500px;
  margin-left:30px;
  width: 100%;
  padding: 0 20px;
  font-family: Arial, sans-serif;
 
  .wishlist-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
  }

  .wishlist-item {
    width: 120px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f0f0f090;
    box-shadow: 0px 0px 15px -3px rgba(165, 165, 165, 0.479);
  }

  .product-details {
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    margin-bottom: 8px;

  }

  .product-name {
    font-size: 13px;
    color: #333;
    margin-bottom: 5px;
  }

  .product-description {
    font-size: 11px;
    color: #666;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  .product-price {
    font-size: 14px;
    color: #00A046;
    font-weight: bold;
  }

  .product-image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  .remove-button {
    color: #ffffff;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    margin-top: auto;
    border-radius: 50%;
    margin: 0 auto;

  }
  .remove-icon {
    color: #ff0000b0;
    font-size: 16px;
  }
  .remove-icon:hover {
    color: #ff0000;
  }

  @media (max-width: 665px) {
  margin-left: 0px !important;
 }
 .wishlist-container {
  display: flex;
  justify-content: center ;
 }
`;

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.cart.favoriteProducts);
  const dispatch = useDispatch();

  const handleRemove = (e, id) => {
    e.preventDefault();
    e.stopPropagation(); 
    dispatch(addToFavorite({ id, remove: true }));
  };

  return (
    <Container>
      <div className="wishlist-container">
        {wishlistItems?.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`} className="wishlist-item">
            <img className="product-image" src={item.image} alt={item.name} />
            <div className="product-details">
              <span className="product-name">{capitalizeWords(item.name).slice(0, 10)}...</span>
              <span className="product-description">
                {item.description?.slice(0, 20)}...
              </span>
              <span className="product-price">${item.price / 100}</span>
            </div>
            <button onClick={(e) => handleRemove(e, item.id)} className="remove-button">
              <AiOutlineDelete className="remove-icon"/>
            </button>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Wishlist;

import React, { useState  } from "react";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import styled from "styled-components";
import {FaCheck} from 'react-icons/fa'
import AmountButtons from "../AmountButtons";

const Wrapper = styled.div`
  .firstTwo {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .add {
    width: 140px;
    padding: 10px;
    height: 31px;
    background-color: #085de6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    font-weight: 500;
    opacity: 0.9;
    &:active {
      opacity: 1;
    }
    .add-btn-content {
      display: flex;
      gap: 10px;
      font-size: 12px;
    }
  }

  .btn-success {
    background-color: #00a046;
  }

  .colors {
    display: flex;
    gap: 15px;
    height: 25px;
    align-items: center;
    margin-bottom: 20px;
    margin: 0 20px;
    span {
      color: #333333ca;
      font-size: 14px;
    }
  }

  .colorsButtons {
    display: flex;
    gap: 4px;
  }

  .colorBtn {
    height: 20px;
    width: 20px;
    border: none;
    border-radius: 5px;
    opacity: 0.8;
    cursor: pointer;
  }

  .activeColorBtn {
    opacity: 1;
  }

  .faCheckIcon {
    font-size: 10px;
    color: white;
  }
`;

const AddToCartSection = ({
  product,
  handleAddToCart,
  checkIsAddedToCart,
  setAmount, amount,setMainColor, mainColor
}) => {

   
   
            
    

  return ( 
    <Wrapper >

    <div className="firstTwo">
                                     {/* Amount buttons */}
      <AmountButtons product={product} setAmount={setAmount} amount={amount}  />
                                     {/* colors buttons */}

        <div className="colors">
          <span>Colors:</span> 
          <div className="colorsButtons">
              {product.colors.map((color, index)=> {
                  return (
                    <button
                      key={index}
                      className={`${mainColor === color? 'colorBtn activeColorBtn': 'colorBtn'}  `}
                      style={{ background: color }}
                      onClick= {()=> setMainColor(color)}
                    >
                      {mainColor === color ? <FaCheck className="faCheckIcon" /> : null }
                    </button>
                  );
              })}
          </div>
        </div>

      </div>


                                     {/* add to cart button */}

      {product.stock < 1 ? (
        "Out of stock"
      ) : (
        <button
          className={`add ${checkIsAddedToCart ? "btn-success" : ""}`}
          onClick={handleAddToCart}
        >
          {checkIsAddedToCart ? (
            <div className="add-btn-content">
              <HiShoppingCart /> <span>ADDED</span>
            </div>
          ) : (
            <div className="add-btn-content">
              <HiOutlineShoppingCart/> <span>ADD TO CART</span>
            </div>
          )}
        </button>
      )}
    </Wrapper>
  );
};

export default AddToCartSection;

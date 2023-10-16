import React, { useState  } from "react";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import styled from "styled-components";
import {FaCheck} from 'react-icons/fa'

const Wrapper = styled.div`
     .quantity {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 30px;

            button {
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: none;
            }
        }
        .add {
            width: 270px;
            padding: 10px;
            background-color: #2879fe;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;
            cursor: pointer;
            border: none;
            font-weight: 500;
             
            .add-btn-content {
                display: flex;
                gap: 10px;
                font-size: 17px;
            }
           
        }
        .btn-success {
            background-color: #00A046;
        }

        .colors {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-bottom: 20px;
        }

        .colorsButtons {
            display: flex;
            gap: 3px;
        }

        .colorBtn {
            height: 20px;
            width: 20px;
            border: none;
            border-radius: 9px;
            opacity: 0.3;
        }

        .activeColorBtn {
            opacity: 1;
        }

        .faCheckIcon {
            font-size: 10px;
            color: white;
        }

`

const AddToCartSection = ({
  product,
  handleAddToCart,
  checkIsAddedToCart,
  setQuantity,
  quantity
  
}) => {

    const [mainColor, setMainColor] = useState(product.colors[0]);
    console.log("mainColor",mainColor)

  return (
    <Wrapper>
                                     {/* quantity buttons */}
      <div className="quantity">
        <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}> - </button>
        {quantity}
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>

                                       {/* colors buttons */}

      <div className="colors">
        <p>Colors:</p> 
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
              <HiOutlineShoppingCart /> <span>ADD TO CART</span>
            </div>
          )}
        </button>
      )}
    </Wrapper>
  );
};

export default AddToCartSection;

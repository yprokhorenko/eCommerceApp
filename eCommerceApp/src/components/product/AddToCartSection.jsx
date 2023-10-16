import React, { useState  } from "react";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import styled from "styled-components";
import {FaCheck} from 'react-icons/fa'
import AmountButtons from "../AmountButtons";

const Wrapper = styled.div`
    
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
            opacity: 0.5;
            cursor: pointer;
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
  setAmount, amount
}) => {

    const [mainColor, setMainColor] = useState(product.colors[0]);
    console.log("mainColor",mainColor)
   
   
            
    

  return (
    <Wrapper>
                                     {/* Amount buttons */}
     <AmountButtons product={product} setAmount={setAmount} amount={amount}  />
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

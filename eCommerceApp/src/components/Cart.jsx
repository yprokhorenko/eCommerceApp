import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import {  removeItem, resetCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {useState} from "react";
import { increaseamount, decreaseamount } from "../redux/cartSlice";
import { capitalizeWords } from "../constants";

const Wrapper = styled.section`
      position: absolute;
      display: flex;
      justify-content: center;
  .cart {
    visibility: none;
    width: 500px;
    min-height: 200px;
    
    position: absolute;
    border-radius: 6px;
    z-index: 44;
    top: 1px;
    /* right: 15%; */
    color: black;
    // border-radius: 4px;
    padding: 20px 10px;
    background-color: #f2f2f2;
        top: 0px;

  

    .cart_title {
      text-align: center;
    }
  }

  .amount {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: none;
            }
        }

  .cart-overlay {
  
    position: fixed;
    margin-top: 70px;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    /* backdrop-filter: blur(4px);  */
  }


 

  .cart_item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .cart_title {
    margin-bottom: 15px;
  }

  .cart_total {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }

  .subtotal_figure {
    text-align: right;
    width: 50%;
  }

  .subtotal {
    text-align: left;
    width: 50%;
  }

  .cart_checkout {
    padding: 10px 8px;
    max-width: 80%;
    background-color: #2879fe;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    font-weight: 300;
    border-radius: initial;
    margin: 0 auto;
    text-transform: uppercase;
    white-space: wrap;
  }

  .cart_reset {
    margin-top: 15px;
    background: none;
    color: red;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  .cartImg_link {
    width: 70px;
    height: 90px;
    object-fit: cover;
  }

  .cart_container {
    // margin: 10px 15px;
    max-height: 310px;
    overflow: auto;
  }

  .cart_main {
    display: flex;
    justify-content: space-between;
  }

  .cart_info {
    margin-left: 10px;
  }

  .cart_name {
    margin-bottom: 5px;
  }

  .cart_desc {
    font-size: 12px;
    margin-bottom: 6px;
  }

  .cart_btns {
    color: rgba(253, 0, 0, 0.5);
    margin-left: 20px;
    display: flex;
    align-items: center;
    font-size: 22px;
  }

  .cart_btns_delete {
    font-size: 22px;

    &:hover {
      color: rgba(253, 0, 0, 1);
      cursor: pointer;
    }

  }

  .name-color {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  .product-color {
      width: 15px;
      height: 15px;
      border-radius: 5px;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    @media (max-width: 540px) {
      .cart {
          width: 90vw;
          transform: scale(0.9);
      }

      .amount {
        display: flex;
        flex-direction: column;
      }
      .cart_main {
        width: 250px;
        min-width: 100px;
      }
    }
  
`;

const Cart = ({isCartOpen,setIsCartOpen}) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const productStock = useSelector((state) => state.products.product.stock);
    console.log("productStock",productStock)
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {total += item.amount * item.price
  })
      return total.toFixed(2)
  };

  const handleCloseCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    
  };

  const handleOverlayClick = (e) => {
    if (!e.target.closest(".cart")) {
      handleCloseCart();
      // e.stopPropagation()
    }
  };

  return (
    <Wrapper  >
      {isCartOpen && (
        <div className="cart-overlay" onClick={handleOverlayClick}>
        <div className="cart">
          <h3 className="cart_title">Products in your cart:</h3>
          <div className="cart_container">
            {products?.map((item) => (
              <div className="cart_item" key={item.id}>
                <Link  Link to={`/products/${item.originalID}`} className="cart_main" onClick = {handleCloseCart}>
                  <div className="cart_img">
                    <img src={item.image} alt="" className="cartImg_link" />
                  </div>
                  <div className="cart_info">
                      <div className="name-color">
                          <h4 className="cart_name">{capitalizeWords(item.name)}</h4>
                          <button className="product-color" style={{backgroundColor: item.mainColor}}> </button>
                      </div>
                      <p className="cart_desc">{item.description ? item.description.substring(0, 50) : ""}</p>
                    <p className="cart_price"> {item.amount} x ${item.price/100}</p>
                  </div>
                </Link>
                <div className="">
                  <div className="amount">
                      <button onClick={() => dispatch(decreaseamount({ id: item.id, productStock }))}> - </button>
                      {item.amount} 
                      <button onClick={() => dispatch(increaseamount({ id: item.id, productStock }))} > + </button>
                  </div>
                </div>
                <div className="cart_btns" onClick={()=> {
                  
                  dispatch(removeItem(item.id))
                 } } >
                  <AiOutlineDelete className="cart_btns_delete"  />
                </div>
              </div>
            ))}
          </div>
          <div className="cart_total">
            <h3 className="subtotal">Subtotal:</h3>
            <h3 className="subtotal_figure">$ {totalPrice()/100}</h3>
          </div>
          <button className="cart_checkout">proceed to checkout</button>
          <button className="cart_reset" onClick={()=> dispatch(resetCart(), handleCloseCart())}>Reset Cart</button>
        </div> 
      </div> 
)}    
    </Wrapper>
  );
};

export default Cart;

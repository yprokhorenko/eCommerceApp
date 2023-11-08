import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  MdOutlineShoppingCart,
} from "react-icons/md";
import { addToCart } from "../redux/cartSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {BsArrowUpRightCircle} from "react-icons/bs"
import { setIsCartOpen} from "../redux/cartSlice";
import {capitalizeWords} from "../constants.js"
import Stars from "./Stars";


const Wrapper = styled.div`
  .card {
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 10;
    margin-bottom: 50px;
}

   &:hover {
    .toProduct-icon {
      transition: all ease 0.5s;
      transform: scale(1.2);
      cursor: pointer;
    }
   }

.card_img {
    position: relative;
    height: 300px;
    width: 100%;
    overflow: hidden;
    border-radius: 3px;

    .image-main {
        transition: all 0.3s ease;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    .image-sec {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    .image-main:hover {
        opacity: 0;
    }

}

.card-price {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    .old_price {
        color: #999;
        text-decoration: line-through;
        margin-right: 5px;
        font-size: 20px;
    }

    .price {
        color: #333;
        font-weight: bold;
        text-align: start;
        margin-bottom: 4px;
        font-size: 15px;
    }
}

.new-season {
    position: absolute;
    background-color: white;
    padding: 3px;
    font-size: 14px;
    z-index: 1;
    top: 5px;
    left: 5px;
    color: yellowgreen;
}


.card-title {
    font-weight: bold;
    margin-top: 10px;
}

.card-title {
    font-size: 16px;
}

.buy-icon {
  font-size: 20px;
  color: #00A046;
  cursor: pointer;
  position: relative;
}
.checked-icon {
  position: absolute;
  top: -7px;
  right: -9px;
  font-size: 16px;
}

.toProduct {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 26px;
}

.toProduct-icon {
  font-size: 18px;
  color: #00a046;
  transition: all ease 0.5s;
}
  
`


export default function Card({item}) {
// const products = useSelector((state) => state.products.products) 
           
   const [isAddedToCart, setIsAddedToCart] = useState(true);
   const [amount, setAmount] = useState(1);
   const id = useParams().id;
   const dispatch = useDispatch();
   const cartItems = useSelector((state)=> state.cart.products )  
   const isCartOpen = useSelector((state) => state.cart.isCartOpen); 

        // const handleAddToCart = (product) => {
        //   const existingProduct = cartItems.find((item) => item.id === product.id);
        //   if (!existingProduct) {
        //     dispatch(
        //       addToCart({
        //         id: product.id,
        //         name: product.name,
        //         description: product.description,
        //         price: product.price,
        //         image: product.image,
        //         amount: 1,
        //       })
        //     );
        //   }
        //   setIsAddedToCart(true);
        //   if (isItemInCart && isAddedToCart) {
        //     dispatch(setIsCartOpen(!isCartOpen));
        //   }
        // }; 
 
   const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);


  return (
    <Wrapper>
      <div className="card">
        <NavLink to={`/product/${item.id}`} className="card_link">
          <div className="card_img">
            {item?.shipping && (
              <span className="new-season">Free Shipping</span>
            )}

            <img src={item.image} alt="" className="image-main" />
            <img src={item.image} alt="" className="image-sec" />
          </div>
          <h3 className="card-title">{capitalizeWords(item.name)}</h3>
        </NavLink>
        <div className="card-price">
          <div className="price-block">
            {/* <span className="old_price">
              {item.oldPrice ? `$${item.oldPrice}` : null}
            </span> */}
            <span className="price">${item.price / 100}</span>
          </div>

          <Link to={`/product/${item.id}`} className="toProduct">
            <BsArrowUpRightCircle className="toProduct-icon" />
          </Link>
          {/* <div className="buy-icon" onClick={() => handleAddToCart(item)}>
            <MdOutlineShoppingCart />
            {isItemInCart && <HiCheckCircle className="checked-icon" />}{" "}
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
}
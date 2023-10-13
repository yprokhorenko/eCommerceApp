import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  MdOutlineShoppingCart,
} from "react-icons/md";
import { addToCart } from "../redux/cartSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import {HiCheckCircle} from "react-icons/hi"
import { setIsCartOpen} from "../redux/cartSlice";


const Wrapper = styled.div`
  .card {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 10;
    margin-bottom: 50px;
}

.card_img {
    position: relative;
    height: 350px;
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
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .old_price {
        color: #999;
        text-decoration: line-through;
        margin-right: 5px;
        font-size: 20px;
    }

    .price {
        color: #333;
        font-weight: bold;
        font-size: 20px;
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
  font-size: 23px;
  color: #00A046;
  cursor: pointer;
  position: relative;
}
.checked-icon {
  position: absolute;
  top: -7px;
  right: -9px;
  font-size: 20px;
}
  
`




export default function Card({item}) {
  const products = useSelector((state) => state.products.products) 

  console.log("card comp",products)
   const [isAddedToCart, setIsAddedToCart] = useState(true);
   const [quantity, setQuantity] = useState(1);
   const id = useParams().id;
   const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
   const dispatch = useDispatch();
   const cartItems = useSelector((state)=> state.cart.products )  
   const isCartOpen = useSelector((state) => state.cart.isCartOpen); 


const handleAddToCart = (product) => {
  const existingProduct = cartItems.find((item) => item.id === product.id);
console.log("product", product)
  if (!existingProduct) {
    dispatch(addToCart({ 
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: 1, 
    }));
  }
  setIsAddedToCart(true);
  if (isItemInCart && isAddedToCart) {
      dispatch(setIsCartOpen(!isCartOpen));
    }
    } 
 
const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);


  return (
      <Wrapper>
        
          <div className="card">
           <NavLink to={`/product/${item.id}`} className="card_link" >
                <div className="card_img">
                  {item?.shipping && <span className="new-season">Free Shipping</span>}
                  
                  <img src={item.image} alt="" className="image-main" />
                  <img src={item.image} alt="" className="image-sec" />
                </div>
                <h3 className="card-title">{item.title}</h3>
            </NavLink >
            <div className="card-price">
              <div className="">
                  <span className="old_price">{item.oldPrice ? `$${item.oldPrice}` : null}</span>
                  <span className="price">${item.price/100}</span>
              </div>
              <div className="buy-icon" onClick={()=> handleAddToCart(item)}> 
              <MdOutlineShoppingCart/>
              
              {isItemInCart && <HiCheckCircle className="checked-icon"/> }   </div>
            </div>
          </div>
        
      </Wrapper>
  )
}
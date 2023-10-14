import { useState,useEffect } from "react";
import "./Product.scss";
import {
  MdFavoriteBorder,
  MdBalance
} from "react-icons/md";
import { HiOutlineShoppingCart,
  HiShoppingCart} from "react-icons/hi" 
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch,useSelector  } from "react-redux";
import { setIsCartOpen} from "../redux/cartSlice";
import { getSingleProduct } from "../redux/productsSlice";
import { single_product_url } from "../constants";
import Loading from "../components/Loading";
import BreadcrumbTrail from "../components/BreadcrumbTrail"
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";

export default function Product() {
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(()=> {
    dispatch(getSingleProduct(`${single_product_url}${id}`));
  }, [id])
  
  const product = useSelector((state)=>state.products.product)
  console.log("product",product)
  const productLoading = useSelector((state)=>state.products.productLoading)

  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.products);
  const checkIsAddedToCart = cartItems.some((cartItem) => cartItem.id === product.id);
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === product.id);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen); 

  const handleAddToCart = () => {
           const existingProduct = cartItems.find((item) => item.id === product.id);
              if (!existingProduct) {
              dispatch(addToCart({
                id: product.id,
                name: product.name, 
                description: product.description, 
                price: product.price, 
                image: product.url, 
                quantity 
              })); }
              setIsAddedToCart(true);
              if (isItemInCart && isAddedToCart) {
                dispatch(setIsCartOpen(!isCartOpen));
              
            };}

        if (productLoading) {
              return <Loading/>
             }
  return (
    <div className="product">
      <div className="left">
       <ProductImages images={product.images} />
      </div>
         
      <div className="right">
        <BreadcrumbTrail title={product.name} product />
        <h1>{product?.name}</h1>
        <Stars stars={product.stars} reviews={product.reviews} />
        <span className="price">${product?.price/100}</span>
        <p>{product?.description}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button> 
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div> 
        {product.stock < 1 ? "Out of stock" : (
  <button className={`add ${checkIsAddedToCart ? 'btn-success' : ''}`} onClick={handleAddToCart}>
    {checkIsAddedToCart ? (
      <div className="add-btn-content"><HiShoppingCart /> <span>ADDED</span></div>
    ) : (
      <div className="add-btn-content"><HiOutlineShoppingCart  /> <span>ADD TO CART</span></div>
    )}
  </button>
)}
        
        <div className="links">
          <div className="item">
            <MdFavoriteBorder /> ADD TO WISH LIST
          </div>
          <div className="item">
            <MdBalance /> ADD TO COMPARE
          </div>
        </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./Product.scss";
import {
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdBalance,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";


export default function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const images = [
    "http://localhost:1337" + data?.attributes?.img?.data?.attributes?.url,
    "http://localhost:1337" + data?.attributes?.img2?.data?.attributes?.url,
  ];
  const dispatch = useDispatch();

     // console.log(data)
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            className="image"
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            className="image"
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImg(1)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div> 
        <button className="add" onClick={()=> dispatch(addToCart({
         id: data.id,
         title: data.attributes.title, 
         desc: data.attributes.desc, 
         price: data.attributes.price, 
         img: "http://localhost:1337" + data?.attributes?.img?.data?.attributes?.url, 
         quantity 
        }) )}>
          <MdOutlineShoppingCart /> ADD TO CART
        </button>
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

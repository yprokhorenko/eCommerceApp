import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdBalance } from "react-icons/md";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../redux/cartSlice";
import { getSingleProduct } from "../redux/productsSlice";
import { single_product_url } from "../constants";
import Loading from "../components/Loading";
import BreadcrumbTrail from "../components/BreadcrumbTrail";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCartSection from "../components/product/AddToCartSection";
import { capitalizeWords } from "../constants.js";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;

  @media (max-width: 930px) {
    .product {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 600px;
    }

    .right {
      margin-top: 0px !important;
      padding: 20px;
    }
    .left {
    }
  }

  .product {
    padding: 10px 50px;
    display: flex;
    gap: 10px;
    margin-top: 60px;

    .left {
      display: flex;
      margin-right: 30px;
    }

    .addToCart {
      margin: 30px 0;
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: -50px;
      padding: 10px;

      .card-title {
        margin-top: 20px;
      }
      .price {
        font-size: 20px;
        color: #00A046;
        font-weight: 500;
      }

      p {
        font-size: 14px;
        text-align: justify;
        margin-top: 10px;
        font-weight: 200;
        font-weight: lighter;
        letter-spacing: -1px;

      }

      .links {
        margin-top: 20px;
        display: flex;
        gap: 20px;
        .item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2879fe;
          font-size: 14px;
          cursor: pointer;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: gray;
        font-size: 14px;
        margin-top: 30px;

        hr {
          width: 200px;
          border: 1px solid rgb(238, 237, 237);
        }
      }

      hr {
        border: 1px solid rgb(238, 237, 237);
      }
    }
  }
`;

export default function Product() {
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(getSingleProduct(`${single_product_url}${id}`));
  }, [id]);
  const product = useSelector((state) => state.products.product);
  const [mainColor, setMainColor] = useState(null);

  const productLoading = useSelector((state) => state.products.productLoading);

  const [isAddedToCart, setIsAddedToCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.products);
  const checkIsAddedToCart = cartItems.some(
    (cartItem) => cartItem.id === product.id+mainColor
  );

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setMainColor(product.colors[0]);
    }
  }, [product]);

  const isItemInCart = cartItems.some((cartItem) => cartItem.id === product.id+mainColor);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const [amount, setAmount] = useState(1);


  const handleAddToCart = () => {
    const existingProduct = cartItems.find((item) => item.id === product.id+mainColor);
    if (!existingProduct) {
      dispatch(
        addToCart({
          id: product.id+mainColor,
          originalID: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.images[0].url,
          mainColor: mainColor,
          amount,
        })
      );
    }
    setIsAddedToCart(true);
    if (isItemInCart && isAddedToCart) {
      dispatch(setIsCartOpen(!isCartOpen));
    }
  };



  if (productLoading) {
    return <main style={{height: "100vh",paddingTop: "200px"}} >
      <Loading />
    </main>;
  }


  return (
    <Wrapper>
    <div className="product">
      <div className="left">
        <ProductImages images={product.images} />
      </div>

      <div className="right">
        <BreadcrumbTrail title={product.name} product={product} />
        <h3 className="card-title">{capitalizeWords(product.name)}</h3>
        <Stars stars={product.stars} reviews={product.reviews} />
        <span className="price">${product?.price / 100}</span>
        <p>{product?.description}</p>

        <div className="addToCart">
          {product && product.images && (
            <AddToCartSection
              handleAddToCart={handleAddToCart}
              checkIsAddedToCart={checkIsAddedToCart}
              product={product}
              setMainColor={setMainColor}
              setAmount={setAmount}
              amount={amount}
              mainColor={mainColor}
            />
          )}
        </div>

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
    </Wrapper>
  );
}

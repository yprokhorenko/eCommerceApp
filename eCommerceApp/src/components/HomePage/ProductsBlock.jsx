import Card from "../Card";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import Loading from "../Loading";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
  .productsContainer {
    max-width: 1260px;
    margin: 100px auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      gap: 20px;

      .top-title {
        flex: 1;
      }

      .top-desc {
        flex: 2;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 50px;
  }

  @media (max-width:1225px) {
    .bottom  {
      justify-content: center;
    }
  }

  @media (max-width:925px) {
    .top {
      width: 80vw;
      margin: 0 auto;
      gap: 10px;
    }
    .top-title {
      font-size: 20px;
      }
      .top-desc {
        font-size: 14px;

      }
    .bottom {
      justify-content: center !important;
    }
  }

`;

const ProductsBlock = ({ type, desc, products }) => {
  const [sliceEnd, setSliceEnd] = useState(4); 

  useEffect(() => {    // different number of items depending on the screen width
    function handleResize() {
      switch (true) {
        case window.innerWidth <= 925:
          setSliceEnd(4);
          break;
        case window.innerWidth <= 1225:
          setSliceEnd(3);
          break;
        default:
          setSliceEnd(4);
          break;
      }
    }

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const productsLoading = useSelector((state) => state.products.productsLoading);
  const productsError = useSelector((state) => state.products.productsError);

  return (
    <Wrapper>
      <div className="productsContainer">
        <div className="top">
          <h2 className="top-title">
            {type.charAt(0).toUpperCase() + type.slice(1)} Products
          </h2>
          <p className="top-desc">{desc}</p>
        </div>

        <div className="bottom">
          {productsError ? (
            "Something went wrong!"
          ) : productsLoading ? (
            <Loading />
          ) : (
            products
              .slice(0, sliceEnd) 
              .map((item) => <Card item={item} key={item.id} />)
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsBlock;
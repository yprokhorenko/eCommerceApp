import Card from "../Card";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const Wrapper = styled.section`
  .productsContainer {
    max-width: 1260px;
    margin: 100px auto;
    padding: 0 30px;
    
    .productsItems {
    }

    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;

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
    gap: 50px;
  }
`;

const ProductsBlock = ({ type, desc, products }) => {
  const productsLoading  = useSelector((state) => state.products.productsLoading);
  const productsError = useSelector((state) => state.products.productsError ) 
  
  return (
    <Wrapper>
      <div className="productsContainer">
     <div className="productsItems">
     <div className="top">
          <h2 className="top-title">
            {type.charAt(0).toUpperCase() + type.slice(1)} Products
          </h2>
          <p className="top-desc">{desc}</p>
        </div>
        <div className="bottom">
          {productsError
            ? "Something went wrong!"
            : productsLoading
            ? "Loading ..."
            : products.slice(0,4).map((item) => <Card item={item} key={item.id} />)}
        </div>
     </div>
      </div>
    </Wrapper>
  );
};

export default ProductsBlock;

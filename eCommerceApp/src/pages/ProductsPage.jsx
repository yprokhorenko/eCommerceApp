import BreadcrumbTrail from "../components/BreadcrumbTrail";
import Filters from "../components/productsPage/Filters";
import ProductList from "../components/productsPage/ProductList";
import styled from "styled-components";
import Sort from "../components/productsPage/Sort";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  .wrapper {
    display: flex;
    gap: 20px;
    flex-direction: row;
    margin: 30px auto 0;
  }
  .filtersSection {
    width: 230px;
    border: 2px solid grey;
  }
  .secondCol {
    width: 900px;
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 1199px) {
    .secondCol {
      width: 100%;
      padding-left: 100px;
    }
  }
`;

const ProductsPage = () => {
  const products = useSelector((state) => state.products.filtered_products);

  return (
    <Wrapper>
      <BreadcrumbTrail title="Products" />

      <div className="wrapper">
        <div className="filtersSection">
          <Filters />
        </div>
        <div className="secondCol">
          <Sort products={products} />

          <div className="list">
            <ProductList products={products} />
          </div>
        </div>
        ;
      </div>
    </Wrapper>
  );
};
export default ProductsPage;

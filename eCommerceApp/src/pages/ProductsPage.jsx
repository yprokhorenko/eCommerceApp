import BreadcrumbTrail from "../components/BreadcrumbTrail";
import Filters from "../components/productsPage/Filters";
import ProductList from "../components/productsPage/ProductList";
import styled from "styled-components";
import Sort from "../components/productsPage/Sort";
import { useDispatch, useSelector } from "react-redux";
import { startSort, updateSort } from "../redux/productsSlice";
import { useEffect } from "react";

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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filtered_products);
  const sort = useSelector((state) => state.products.sort);

  const handleUpdateSort = (e) => {
    // const name = e.target.name;
    const selectedValue = e.target.value;
    dispatch(updateSort(selectedValue))
  }

  useEffect(()=> {
    dispatch(startSort());
  },[sort])

  return (
    <Wrapper>
      <BreadcrumbTrail title="Products" />

      <div className="wrapper">
        <div className="filtersSection">
          <Filters />
        </div>
        <div className="secondCol">
          <Sort products={products} handleUpdateSort={handleUpdateSort} sort={sort}/>

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

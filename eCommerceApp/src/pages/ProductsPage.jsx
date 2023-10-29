import BreadcrumbTrail from "../components/BreadcrumbTrail";
import Filters from "../components/productsPage/Filters";
import ProductList from "../components/productsPage/ProductList";
import styled from "styled-components";
import Sort from "../components/productsPage/Sort";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, filterProducts, startSort, updateFilters, updateSort } from "../redux/productsSlice";
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
  const allProducts = useSelector((state) => state.products.products);

  const products = useSelector((state) => state.products.filtered_products);
  const sort = useSelector((state) => state.products.sort);
  const filters = useSelector((state) => state.products.filters);

  const handleUpdateSort = (e) => {
    // const name = e.target.name;
    const selectedValue = e.target.value;
    dispatch(updateSort(selectedValue))
  }

  useEffect(()=> {
    dispatch(filterProducts())
    //  706 14m
    dispatch(startSort());
  },[sort, filters])

  const updateFiltersComponent = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch(updateFilters({ name, value }));
  };
  
  const clearFilter = () => {
     dispatch(clearFilters())
  }



  return (
    <Wrapper>
      <BreadcrumbTrail title="Products" />

      <div className="wrapper">
        <div className="filtersSection">
          <Filters updateFiltersComponent ={updateFiltersComponent } clearFilter={clearFilter} />
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

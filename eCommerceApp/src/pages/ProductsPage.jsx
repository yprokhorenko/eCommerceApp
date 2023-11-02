import BreadcrumbTrail from "../components/BreadcrumbTrail";
import Filters from "../components/productsPage/Filters";
import ProductList from "../components/productsPage/ProductList";
import styled from "styled-components";
import Sort from "../components/productsPage/Sort";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, filterProducts, startSort, updateFilters, updateSort } from "../redux/productsSlice";
import { useEffect } from "react";
import Loading from "../components/Loading";

const Wrapper = styled.div`
  .trail {
    margin-left: 265px;
    margin-bottom: -15px;
  }
  @media (max-width: 1199px) {
    .trail {
      margin-left: 255px;
    }
  }
  @media (max-width: 970px) {
    .trail {
      margin-left: 189px;
    }
  }

  .wrapper {
    display: flex;
    gap: 20px;
    flex-direction: row;
    margin: 30px auto 0;
    width: 1150px;
  }
  .filtersSection {
    width: 250px;
    border: 0.5px solid #33333322;
    border-radius: 5px;
  }
  .secondCol {
    display: flex;
    width: 900px;
    flex-direction: column;
    border: 0.5px solid #33333322;
    border-radius: 5px;
    /* background-color: green; */
  }

  @media (max-width: 1200px) {
    .wrapper {
      width: 950px;
    }
    .secondCol {
      width: 750px;
    }
  }

  @media (max-width: 970px) {
    .secondCol {
      width: 450px;
    }
    .wrapper {
      width: 600px;
      display: flex;
      justify-content: center !important;
    }
    .filtersSection {
      width: 180px;
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

  const productsLoading = useSelector((state)=> state.products.productsLoading)

        if (productsLoading) {
          return (
            <main>
              <Loading />
            </main>
          );
        } 

  return (
    <Wrapper>
     <div className="trail">
     <BreadcrumbTrail title="Products" />
     </div>
      <div className="wrapper">
        <div className="filtersSection">
          <Filters updateFiltersComponent ={updateFiltersComponent } clearFilter={clearFilter} />
        </div>
        
        <div className="secondCol">
          <Sort products={products} handleUpdateSort={handleUpdateSort} sort={sort}/>
          <div className="list">
            <ProductList products={products}/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductsPage;

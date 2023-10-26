import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueValues } from "../../constants";
import { updateFilters } from "../../redux/productsSlice";

const Wrapper = styled.div`
  .container {
    padding: 20px;
  }

  .text-input {
    margin-bottom: 20px;
    padding: 4px 7px;
  }

  .form {
  }

  .categories {
    display: flex;
    flex-direction: column;
  }
  .category-button {
    text-align: left;
    border: none;
    background-color: transparent;
    padding: 5px;
    cursor: pointer;
  }

  .button-active {
    font-weight: bolder;
  }
`;

const Filters = ({ clearFilter, updateFiltersComponent }) => {
  const dispatch = useDispatch();
  const {
    text,
    company,
    category,
    color,
    min_price,
    max_price,
    price,
    shipping,
  } = useSelector((state) => state.products.filters);
  const products = useSelector((state) => state.products.products);

  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  return (
    <Wrapper>
      <div className="container">
        <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="search"
            className="text-input"
            value={text}
            onChange={updateFiltersComponent}
          />

          <div className="categories">
            <h5>Category</h5>
            {categories.map((item, index) => {
              return (
                <button
                  className={`category-button ${
                    category === item.toLowerCase() ? "button-active" : null
                  }  `}
                  key={index}
                  onClick={updateFiltersComponent}
                  type="button"
                  name="category"
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="companies">
            <h5>Company</h5>
            <select
              className={company}
              onChange={updateFiltersComponent}
              value={company}
              name="company"
            >
              {companies.map((item, index) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Filters;

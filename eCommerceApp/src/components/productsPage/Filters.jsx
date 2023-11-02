import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueValues } from "../../constants";
import { removeText, updateFilters } from "../../redux/productsSlice";
import {FaCheck} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
// import {capitalizeWords} from "../../constants.js"

const Wrapper = styled.div`
  button,
  input,
  select {
    cursor: pointer;
  }
  .container {
    padding: 20px;
    position: relative;
  }

  .text-input {
    border: none;
    outline: 0.5px solid silver;
    padding: 5px 8px;
    border-radius: 3px;
    width: 100%;
    z-index: 19;
    padding-right: 30px;
  }

  .input-reset {
    border: none;
    right: 38px;
    top: 36px;
    color: #333;
    background-color: red;
    z-index: 20;
    position: absolute;
    background-color: transparent;
  }

  .form-control {
    margin-bottom: 15px;
    background: #6d6d6d1c;
    padding: 10px 15px;
    border-radius: 5px;
  }

  .filter-title {
    padding: 5px 0;
    color: #333;
    margin-bottom: 4px;
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
  }

  .button-active {
    font-weight: bolder;
  }
  .colors {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .faCheckIcon {
    font-size: 11px;
    color: white;
  }

  .color-btn {
    border-radius: 5px;
    width: 20px;
    height: 20px;
    border: none;
    opacity: 0.7;
  }

  .all-btn {
    background-color: transparent;
    border: none;
    outline: 1px solid silver;
    border-radius: 3px;
    width: 20px;
    height: 20px;
  }

  .company {
    background-color: red;
  }
  .company-select {
    border: none;
    outline: 0.5px solid silver;
    padding: 4px 8px;
    border-radius: 3px;
    width: 100%;
  }

  .company-option {
  }

  .price {
    text-align: center;
  }

  .price-label {
    font-size: 15px;
  }

  .price-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 970px) {
    .input-range {
      width: 100%;
    }
    .price-label {
      width: 100%;
    }
  }

  .active {
    opacity: 1;
  }

  .shipping {
    display: flex;
    justify-content: space-between;
  }

  .shipping-label {
    font-size: 14px;
  }

  .clear-btn-block {
    text-align: center;
  }
  .clear-btn {
    padding: 5px 15px;
    border-radius: 3px;
    border: none;
  }
  .clear-btn:hover {
    background-color: #3333333b;
  }
  .clear-btn:active {
    background-color: #3333331a;
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
          {/* text search  */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="text-input"
              value={text}
              autocomplete="off"
              onChange={updateFiltersComponent}
              style={{ color: "#333" }}
            />
            {text && (
              <button
                className="input-reset"
                onClick={() => {
                  dispatch(removeText());
                }}
              >
                <MdClose />
              </button>
            )}
          </div>

          {/* category search  */}

          <div className="form-control">
            <h5 className="filter-title">Category</h5>
            <div className="categories">
              {categories.map((item, index) => {
                return (
                  <button
                    className={`  category-button ${
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
          </div>
          {/* company search  */}

          <div className="form-control">
            <h5 className="filter-title">Company</h5>
            <div className="company">
              <select
                className="company-select"
                onChange={updateFiltersComponent}
                value={company}
                name="company"
              >
                {companies.map((item, index) => {
                  return (
                    <option className="company-option" value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* colors search  */}

          <div className="form-control">
            <h5 className="filter-title">Colors</h5>
            <div className="colors">
              {colors.map((item, index) => {
                if (item === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFiltersComponent}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    onClick={updateFiltersComponent}
                    name="color"
                    key={index}
                    style={{ background: item }}
                    className={` ${
                      color === item ? " color-btn active" : "color-btn"
                    }`}
                    data-color={item}
                  >
                    {color === item ? (
                      <FaCheck className="faCheckIcon" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* price search  */}

          <div className="form-control">
            <div className="price-block">
              <h5 className="filter-title">Price</h5>
              <span className="price-label"> $ {price / 100}</span>
            </div>

            <div className="price">
              <input
                className="input-range"
                type="range"
                name="price"
                onChange={updateFiltersComponent}
                value={price}
                min={min_price}
                max={max_price}
              />
            </div>
          </div>
          {/* free shipping  */}

          <div className="form-control">
            <div className="shipping">
              <label htmlFor="shipping" className="shipping-label">
                Free Shipping
              </label>
              <input
                type="checkbox"
                name="shipping"
                onChange={updateFiltersComponent}
                id="shipping"
                checked={shipping}
              />
            </div>
          </div>
        </form>
        <div className="clear-btn-block">
          <button className="clear-btn" type="button" onClick={clearFilter}>
            Clear Filters
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;

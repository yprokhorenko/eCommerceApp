import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueValues } from "../../constants";
import { updateFilters } from "../../redux/productsSlice";
import {FaCheck} from 'react-icons/fa'
import {capitalizeWords} from "../../constants.js"

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
     width:20px;
     height: 20px;
     border: none;
     opacity: 0.7;
  }
  .active {
      opacity: 1;

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
            placeholder="Search"
            className="text-input"
            value={text}
            onChange={updateFiltersComponent}
          />

          <div className="form-control">
            <h5>Category</h5>
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

          <div className="form-control">
            <h5>Company</h5>
            <div className="company">
              <select
                className={company}
                onChange={updateFiltersComponent}
                value={company}
                name="company"
              >
                {companies.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="form-control">
            <h5>Colors</h5>
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

          <div className="form-control">
            <h5>Price</h5>
            <div className="price">
              <p className="price-label"> ${price / 100}</p>
              <input
                type="range"
                name="price"
                onChange={updateFiltersComponent}
                value={price}
                min={min_price}
                max={max_price}
              />
            </div>
          </div>

          <div className="form-control">
            <div className="shipping">
              <label htmlFor="shipping">Free Shipping</label>
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
        <div className="clear-btn">
          <button className="" type="button" onClick={clearFilter}>
            Clear Filters
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;

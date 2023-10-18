import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }
  .form {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .sort-input {
    border: none;
    outline: none;
    font-size: 16px;
    padding-bottom: 2px;

  }
`;

const Sort = ({ products }) => {
  return (
    <Wrapper>
      <div className="container">
        <p className="productsAmount">{products.length} Products Found</p>
        <div className="">
          <form action="" className="form">
            <label htmlFor="sort">sort by</label>
            <select name="sort" id="sort" className="sort-input">
              <option value="price-lowest">price (lowest)</option>
              <option value="price-highest">price (highest)</option>
              <option value="name-a">name (a-z)</option>
              <option value="name-z">name (z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sort;

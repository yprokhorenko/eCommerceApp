import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
  }
  .form {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
  .sort-input {
    border: none;
    outline: 0.5px solid silver;
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 16px;
    padding-bottom: 2px;
    cursor: pointer;
  }

  .productsAmount {
    align-self: flex-end;
  }

  @media (max-width: 614px) {
    .productsAmount,
    label {
      font-size: 14px !important;
    }
    .container {
      display: flex !important;
      align-items: center !important;
      flex-direction: row-reverse;
    }
    .productsAmount {
      align-self: initial;
    }
  }
`;



const Sort = ({ products, handleUpdateSort, sort}) => {

 
  return (
    <Wrapper>
      <div className="container">
        <p className="productsAmount">{products.length} Products</p>
        <div className="">
          <form action="" className="form">
            <label htmlFor="sort">Sort by</label>
            <select name="sort" id="sort" className="sort-input" onChange={handleUpdateSort} value={sort}>
              <option value="price-lowest">Price (Lowest)</option>
              <option value="price-highest">Price (Highest)</option>
              <option value="name-a">Name(A-Z)</option>
              <option value="name-z">Name(Z-A)</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sort;

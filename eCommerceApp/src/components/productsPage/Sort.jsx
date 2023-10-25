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
    cursor: pointer;
  }
  .sort-input {
    /* border: none; */
    outline: 0.5px solic silver;
    padding: 3px 6px;
    font-size: 16px;
    padding-bottom: 2px;
    cursor: pointer;
  }
  
`;



const Sort = ({ products, handleUpdateSort, sort }) => {

 
  return (
    <Wrapper>
      <div className="container">
        <p className="productsAmount">{products.length} Products Found</p>
        <div className="">
          <form action="" className="form">
            <label htmlFor="sort">sort by</label>
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

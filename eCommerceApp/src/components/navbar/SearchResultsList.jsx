import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { useEffect } from "react";
// import { useState } from "react";
import {capitalizeWords} from "../../constants.js"

const Wrapper = styled.div`
  .search-result {
    padding: 10px 20px;
    display: flex;
    align-items: center;
  }

  .search-result:hover {
    background-color: #efefef;
  }

  .results-list {
    box-shadow: 0px 25px 9px -26px rgba(0, 0, 0, 0.1);
    left: 0;
    width: 85%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow-y: auto;
    color: black;
    position: absolute;
    border-top: 1px solid #ddd;
    max-height: 305px;
    overflow: scroll;
    overflow-x: hidden;
  }

  .searchItem-img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 4px;
    object-position: top;
    margin-right: 20px;
  }

  .searchTitlePrice {
    display: flex;
    flex-direction: column;
  }
  .search-item {
    display: flex;
    gap: 20px;
    cursor: pointer;
  }

`;

const SearchResultsList = ({ results, setShowList, setInput }) => {
    const handleChange = (e) => {
      setShowList(false);
      setInput("");
    };
  return (
    <Wrapper>
      <div className="results-list">
        {results.map((result) => {
          const { name, price, image, id } = result;
          return (
            <NavLink
              to={`/product/${id}`}
              onClick={handleChange}
              key={id}
              className="search-result"
            >
              <div>
                <img className="searchItem-img" src={image} alt="" />
              </div>
              <div className="searchTitlePrice">
                <h5>{capitalizeWords(name)}</h5>
                <span>${price / 100}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SearchResultsList;

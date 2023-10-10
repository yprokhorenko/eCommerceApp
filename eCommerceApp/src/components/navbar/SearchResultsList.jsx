import { useDispatch, useSelector } from "react-redux";
import { NavLink  } from "react-router-dom";
import styled from "styled-components";
// import { useEffect } from "react";
// import { useState } from "react";

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
    box-shadow: 0px 25px 9px -26px rgba(0,0,0,0.1);
    left: 0;
    width: 88.5%;
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

const SearchResultsList = ({  results, setShowList,setInput }) => {
   
  const handleChange = (e) => {
    setShowList(false)
    setInput("")

  }
  return (
    <Wrapper >
      <div className="results-list"  >
        { results.map((result, id) => {
          const { title, price, img  } = result.attributes;
          return (
            <div key={result.id} className="search-result" onClick={handleChange}  >
              <NavLink  to={`/product/${result.id}`} className="search-item"   >
                <div className="" >
                  <img 
                    className="searchItem-img"
                    src={"http://localhost:1337"+ img?.data?.attributes?.url}
                    alt="" 
                  />
                </div>
                <div className="searchTitlePrice" >
                  <span>{title}</span>
                  <span>$ {price}</span>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SearchResultsList;

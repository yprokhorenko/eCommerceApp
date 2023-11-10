import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";
import { HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
 
const Wrapper = styled.div`
  display: flex;
  width: 600px;

  @media (max-width: 1000px) {
    width: 380px;
    .search-btn {
      font-size: 14px !important;
    }
    .clear-btn {
      right: 70px !important;
    }
  }
  @media (max-width: 500px) {
    width: 250px;
    .clear-btn {
      right: 55px !important;
    }
  }

  .input-wrapper {
    width: 85%;
    height: 40px;
    border: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: ${(props) => (props.inputEmpty ? "6px" : "0")};
    padding: 0 15px;
    /* box-shadow: 0px 0px 3px #808080; */
    background-color: white;
    display: flex;
    align-items: center;
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    margin-left: 7px;
    width: 85%;
  }

  input:focus {
    outline: none;
  }

  #search-icon {
    color: #4e4c4c;
    font-size: 14px;
  }

  .clear-btn {
    border: none;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 100px;
    display: flex;
    align-items: center;
    color: #3e77aa;
  }

  .search-btn {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    width: 15%;
    border: none;
    align-items: center;
    color: white;
    background-color: #00a046;
    justify-content: center;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    cursor: pointer;
    transition: 0.2s ease all;
    &:hover {
      background-color: #00b950;
      transition: 0.2s ease all;
    }
    &:active {
      background-color: #00a046;
      transition: 0.2s ease all;
    }

  }

  @media (max-width: 790px) {
   .minDisplay {
     display: none ;
   }
   .input-wrapper {
    border-top-right-radius: 6px;
    border-bottom-right-radius: ${(props) => (props.inputEmpty ? "6px" : "0")};

      height: 40px;
      input {
      }
   }
}
`;

const SearchBar = ({setResults,setShowList, input, setInput}) => {
      const [hasResults, setHasResults] = useState(false); 
      const products = useSelector((state)=> state.products.products)

      const fetchData = (value) => {
        if (!products) return; 
        const results = products.slice(0,10).filter((product) => {
          const name = product.name;
          return (
            value &&
            name &&
            name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
        setHasResults(results.length > 0);

      };

   


      const handleChange = (value) => {
        setShowList(true)
        const trimmedValue = value.trim(); 
        setInput(trimmedValue); 
        fetchData(trimmedValue);
      };
  
    
    return (
                  <Wrapper inputEmpty={input.length === 0 || !hasResults}>
                    <div className="input-wrapper">
                      <FaSearch id="search-icon" />
                      <input
                        placeholder="Type to search..."
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                      />
                  {input.length>0 && <button type="button" className="clear-btn" onClick={() => 
                      handleChange("")} > <HiX /></button>}

                    </div>
                    <button className="search-btn minDisplay">Find</button>

                  </Wrapper>
    );
  };
  

export default SearchBar
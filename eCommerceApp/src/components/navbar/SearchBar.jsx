import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";
import { HiX } from "react-icons/hi";
 
const Wrapper = styled.div`
 display: flex;
.input-wrapper {
  width: 100%;
  height: 40px;
  border: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: ${props =>
     props.inputEmpty ? "6px" : "0"};
  
  padding: 0 15px;
  /* box-shadow: 0px 0px 3px #808080; */
  background-color: white;
  display: flex;
  align-items: center;
}

input {
  background-color: transparent;
  border: none;
  height: 100%;
  font-size: 1rem;
  width: 100%;
  margin-left: 7px;
  width: 550px;

}

input:focus {
  outline: none;
}

#search-icon {
  color: #4E4C4C;
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
 color: #3E77AA;
}

.search-btn {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    width: 90px;
    border: none;
    align-items: center;
    color: white;
    background-color: #00A046;
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
        background-color: #00A046;
        transition: 0.2s ease all;
    }
}
`

const SearchBar = ({setResults,setShowList, input, setInput}) => {
      const [hasResults, setHasResults] = useState(false); 

      // const { data, loading, error } = useFetch(
      //   `/products/?populate=*`
      // );
      // console.log("data1",data)
      
      // const fetchData = (value) => {
      //   if (!data) return; 
      //   const results = data.filter((product) => {
      //     const title = product.attributes.title;
      //     return (
      //       value &&
      //       title &&
      //       title.toLowerCase().includes(value.toLowerCase())
      //     );
      //   });
      //   const limitedResults = results.slice(0, 10);
      //   setResults(limitedResults);
      //   setHasResults(limitedResults.length > 0);

      // };
    
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
                    <button className="search-btn">Find</button>

                  </Wrapper>
    );
  };
  

export default SearchBar
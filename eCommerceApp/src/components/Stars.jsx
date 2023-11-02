import React from 'react'
import styled from 'styled-components'
import {BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs';

const Wrapper = styled.div`
  .container {
    width: 240px;
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 7px 0;
  }
  .stars {
    color: orange;
    font-size: 14px;
    cursor: pointer;
    width: 40%;
  }
  .reviews {
    font-size: 11px !important;
    cursor: pointer;
    width: 60%;
    color: #3339;
  }
`;

const Stars = ({stars, reviews}) => {
    const tempStars = Array.from({length: 5}, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index}> {stars>= index +1 ? ( <BsStarFill/> ) : stars >= number ? ( <BsStarHalf/>) : (<BsStar/>)} </span>
        )
    }) 
    
  return (
    <Wrapper>
        <div className="container">
            <div className="stars"> {tempStars}</div>
            <div className="reviews">({reviews} customer reviews)</div>
        </div>
    </Wrapper>
  )
}

export default Stars
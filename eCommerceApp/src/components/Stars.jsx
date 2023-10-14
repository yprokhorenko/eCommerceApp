import React from 'react'
import styled from 'styled-components'
import {BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs';

const Wrapper = styled.div`
    .container {
       display: flex;
       gap: 20px;
       align-items: center;
    }
    .stars {
        color: orange;
        font-size: 14px;
        cursor: pointer;
    }
    .reviews {
        font-size: 13px !important;
        cursor: pointer;
    }
`

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
            <p className="reviews">({reviews} customer reviews)</p>
        </div>
    </Wrapper>
  )
}

export default Stars
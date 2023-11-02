import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .amount {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    color: #333333ca;
    width: 95px;
    height: 25px;



    button {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      color: #333333ca;
      transition: ease all 0.2s;


      &:active {
        background-color: #33333360;
        scale: 1.2;
      }
    }
  }
`;

const AmountButtons = ({product,amount, setAmount}) => {

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > product.stock) {
        tempAmount = product.stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="amount">
        <button onClick={decrease}>-</button>
        {amount}
        <button onClick={increase}>+</button>
      </div>
    </Wrapper>
  );
};

export default AmountButtons;

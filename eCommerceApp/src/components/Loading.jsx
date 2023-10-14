import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  .dspldp {
    position: absolute;
    color: black;
    font-size: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1000px;
    width:1000px;
  }
`;
const Loading = () => {
  return <Wrapper className="">

    <div className="dspldp">Loading</div>
  </Wrapper>;
};

export default Loading;

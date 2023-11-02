import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = ({ products }) => {
  if (products < 1) {
    return <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <p >Sorry, there's no products!</p>
    </div>
  }

  return (
    <div>
      <GridView products={products} />
      {/* <ListView products={products}/> */}
    </div>
  );
};

export default ProductList;

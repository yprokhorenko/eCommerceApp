import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = ({ products }) => {
  if (products < 1) {
    return <p className="no-products">Sorry, there's no products!</p>;
  }

  return (
    <div>
      <GridView products={products} />
      {/* <ListView products={products}/> */}
    </div>
  );
};

export default ProductList;

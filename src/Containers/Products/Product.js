import React, { useState, useEffect } from "react";
import ProductItem from "../../Components/Product/ProductItem";
import * as Constants from "../../Share/Constants/Constant";

const Products = (props) => {
  const [products] = useState(Constants.PRODUCT_MOCK_DATA);

  useEffect(() => {
    console.log("PRODUCTS  MOUNTED", products);
  }, [products]);

  const productData = products.map((p) => {
    return <ProductItem key={p.id} product={p} />;
  });

  return <React.Fragment>{productData}</React.Fragment>;
};
export default Products;

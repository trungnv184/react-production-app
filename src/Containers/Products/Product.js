import React, { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { ProductContext } from "../../Context/product-context";

const Products = (props) => {
  const { products, toggleProduct } = useContext(ProductContext);
  console.log("Product Render");
  let productData = <Spinner />;
  if (products && products.length > 0) {
    productData = products.map((p) => {
      return (
        <ProductCard
          key={p.id}
          product={p}
          setFavorite={() => toggleProduct(p.id)}
        />
      );
    });
  }

  return <React.Fragment>{productData}</React.Fragment>;
};

export default Products;

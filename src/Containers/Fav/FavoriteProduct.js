import React, { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ProductContext } from "../../Context/product-context";

const FavProduct = (props) => {
  const { products, toggleProduct } = useContext(ProductContext);
  let productData = null;
  if (products && products.length > 0) {
    productData = products
      .filter((p) => p.isFavorited)
      .map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          setFavorite={() => toggleProduct(p.id)}
        />
      ));
  }

  return <React.Fragment>{productData}</React.Fragment>;
};

export default FavProduct;

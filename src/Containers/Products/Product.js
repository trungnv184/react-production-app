import React, { useEffect, useCallback } from "react";
import ProductItem from "../../Components/Product/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../Store/Actions/index";

const Products = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const onLoadProducts = useCallback(() => {
    dispatch(productActions.loadProductList());
  }, [dispatch]);

  const onChangeProductStatus = (id, isFavorited) =>
    dispatch(productActions.setFavoriteProduct(id, isFavorited));

  useEffect(() => {
    onLoadProducts();
  }, [onLoadProducts]);

  useEffect(() => {
    console.log("[Products] Render");
  });

  let productData = null;
  if (productList && productList.length > 0) {
    productData = productList.map((p) => {
      return (
        <ProductItem
          key={p.id}
          product={p}
          setFavorite={() => onChangeProductStatus(p.id, !p.isFavorited)}
        />
      );
    });
  }

  return <React.Fragment>{productData}</React.Fragment>;
};

export default Products;

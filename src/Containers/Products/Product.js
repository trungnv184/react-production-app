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

  const onChangeProductStatus = useCallback(
    (id) => {
      dispatch(productActions.setFavoriteProduct(id));
    },
    [dispatch]
  );

  useEffect(() => {
    onLoadProducts();
  }, [onLoadProducts]);

  let productData = null;
  if (productList && productList.length > 0) {
    productData = productList.map((p) => {
      return (
        <ProductItem
          key={p.id}
          product={p}
          setFavorite={() => onChangeProductStatus(p.id)}
        />
      );
    });
  }

  return <React.Fragment>{productData}</React.Fragment>;
};

export default Products;

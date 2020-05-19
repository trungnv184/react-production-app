import React, { useEffect, useCallback } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../Store/Actions/index";
import Spinner from "../../Components/UI/Spinner/Spinner";

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

  let productData = <Spinner />;
  if (productList && productList.length > 0) {
    productData = productList.map((p) => {
      return (
        <ProductCard
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

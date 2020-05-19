import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Store/Actions/index";
import ProductCard from "../../Components/ProductCard/ProductCard";

const FavProduct = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.products.filter((p) => p.isFavorited)
  );

  const onChangeProductStatus = useCallback(
    (id) => {
      dispatch(actions.setFavoriteProduct(id));
    },
    [dispatch]
  );

  let productData = null;
  if (products && products.length > 0) {
    productData = products.map((p) => (
      <ProductCard
        key={p.id}
        product={p}
        setFavorite={() => onChangeProductStatus(p.id)}
      />
    ));
  }

  return <React.Fragment>{productData}</React.Fragment>;
};

export default FavProduct;

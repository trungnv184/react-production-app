import * as actionTypes from "./action-types";

export const loadProductList = () => {
  return {
    type: actionTypes.LOAD_PRODUCTS_LIST,
  };
};
export const setFavoriteProduct = (productId) => {
  return {
    type: actionTypes.SET_PRODUCT_FAVORITE,
    productId: productId,
  };
};

export const filterFavoriteProducts = () => {
  return {
    type: actionTypes.FILTER_FAVORITE_PRODUCTS,
  };
};

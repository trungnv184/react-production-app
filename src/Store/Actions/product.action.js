import * as actionTypes from "./action-types";

export const loadProductList = (products) => {
  return {
    type: actionTypes.LOAD_PRODUCTS_LIST,
    products: products,
  };
};

export const loadProductSucceed = (products) => {
  return {
    type: actionTypes.LOAD_PRODUCT_SUCCEED,
    products: products,
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

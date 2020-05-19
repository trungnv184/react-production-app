import * as actionTypes from "../Actions/action-types";
import * as Constants from "../../Share/Constants/Constant";

const loadProductList = (state, action) => {
  return [...Constants.PRODUCT_MOCK_DATA];
};
const setFavoriteProduct = (state, action) => {
  const { productId } = action;
  const newProductList = [...state];
  const productFoundIndex = newProductList.findIndex(
    (product) => product.id === productId
  );
  const currentStatus = newProductList[productFoundIndex].isFavorited;
  if (productFoundIndex >= 0) {
    newProductList[productFoundIndex].isFavorited = !currentStatus;
  }
  return newProductList;
};

const filterFavoriteProducts = (state) => {
  return state.filter((p) => p && p.isFavorited);
};

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_LIST:
      return loadProductList(state, action);
    case actionTypes.SET_PRODUCT_FAVORITE:
      return setFavoriteProduct(state, action);

    case actionTypes.FILTER_FAVORITE_PRODUCTS:
      return filterFavoriteProducts(state);
    default:
      return state;
  }
};

export default productReducer;

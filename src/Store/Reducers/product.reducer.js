import * as actionTypes from "../Actions/action-types";
import * as Constants from "../../Share/Constants/Constant";

const loadProductList = (state, action) => {
  return [...state, ...Constants.PRODUCT_MOCK_DATA];
};
const setFavoriteProduct = (state, action) => {
  const { productId, isFavorite } = action;
  const newProductList = [...state];
  const productFoundIndex = newProductList.findIndex(
    (product) => product.id === productId
  );
  if (productFoundIndex >= 0) {
    newProductList[productFoundIndex].isFavorited = isFavorite;
  }
  return newProductList;
};

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_LIST:
      return loadProductList(state, action);
    case actionTypes.SET_PRODUCT_FAVORITE:
      return setFavoriteProduct(state, action);
    default:
      return state;
  }
};

export default productReducer;

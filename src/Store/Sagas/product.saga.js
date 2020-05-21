import { put, takeEvery } from "redux-saga/effects";
import * as Constants from "../../Share/Constants/Constant";
import { loadProductList } from "../Actions/index";
import * as actionTypes from "../Actions/action-types";

function* loadProducts(id) {
  const products = Constants.PRODUCT_MOCK_DATA;
  yield put(loadProductList(products));
}

export default function* productsWatcher() {
  yield takeEvery(actionTypes.LOAD_PRODUCTS_LIST, loadProducts);
}

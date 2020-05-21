import { put, all, takeEvery, takeLatest } from "redux-saga/effects";
import * as constant from "../../Share/Constants/Constant";
import * as actionTypes from "../Actions/action-types";
import * as actions from "../Actions";

function* loadProducts() {
  const products = constant.PRODUCT_MOCK_DATA;
  yield put(actions.loadProductSucceed(products));
}

function* productActionWatcher() {
  yield takeEvery(actionTypes.LOAD_PRODUCTS_LIST, loadProducts);
}

export default function* productSaga() {
  //   yield all([productActionWatcher()]);
  yield takeLatest(actionTypes.LOAD_PRODUCTS_LIST, loadProducts);
}

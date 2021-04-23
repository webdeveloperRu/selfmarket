import { Store } from "../index";
export function getCategoriesSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "User successfully logged in";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.categories = res.data;
}

export function getCollectionsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "User successfully logged in";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.collections = res.data;
}

export function getProductsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "User successfully logged in";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.products = res.data;
}

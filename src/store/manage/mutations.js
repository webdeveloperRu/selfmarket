import { Store } from "../index";
/**
 *  ---------------------------@categories_mutations ---------------------------
 **/
export function getCategoriesSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Categories successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.categories = res.data;
}
/**
 *  ---------------------------@collections_mutation ---------------------------
 **/
export function getCollectionsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Collections successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.collections = res.data;
}

export function getTopCollectionsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Top Collections successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.topCollections = res.data;
}

/**
 *  ---------------------------@products_mutation ---------------------------
 **/
export function getProductsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Products successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.products = res.data;
}

export function filterProductsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Products successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.filterProducts = res.data;
}

export function addProductsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Products successfully added!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.products.push(res.data);
}

/**
 *  ---------------------------@favorites_mutation ---------------------------
 **/
export function getFavoritesSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Favorites successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.favorites = res.data;
}

export function addFavoriteSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Product succesfully added to favorites!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.favorites.push(res.data);
}

export function removeFavoriteSuccess() {
  Store.state.inRequest = false;
  Store.state.notificationText = "Product removed from favorites";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

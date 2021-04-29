import { Store } from "../index";
/**
 *  ---------------------------@categories_mutations ---------------------------
 **/
export function getCategoriesSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Categories successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.publicCategories = res.data.data;
}
/**
 *  ---------------------------@collections_mutation ---------------------------
 **/
export function getCollectionsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.publicCollections = res.data.data;
  if (state.publicCollections.length == 0)
    Store.state.notificationText = "There is no collections creatd!";
  else
    Store.state.notificationText =
      state.publicCollections.length + " collections found!";
}

export function getTopCollectionsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Top Collections successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.publicTopCollections = res.data;
}

export function addCollectionSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "New collection succesully added!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  console.log(res.data);
  state.publicCollections.push(res.data);
}
export function updateCollectionSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Collection succesully updated!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.currentCollection = res.data;
}

export function setCurrentCollection(state, collection) {
  state.currentCollection = collection;
}

/**
 *  ---------------------------@products_mutation ---------------------------
 **/

export function getProductsSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Products successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.publicProducts = res.data.data;
}

export function addProductSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Product successfully added!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.publicProducts.push(res.data);
}

export function updateProductSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Product successfully updated!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.currentProduct = res.data;
}

export function setCurrentProduct(state, product) {
  Store.state.inRequest = false;
  Store.state.notificationText = "current product changed";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.currentProduct = product;
}

/**
 *  ---------------------------@favorites_mutation ---------------------------
 **/
export function getFavoritesSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Favorites successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.myFavorites = res.data;
}

export function addFavoriteSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Product succesfully added to favorites!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.myFavorites.push(res.data);
}

export function removeFavoriteSuccess() {
  Store.state.inRequest = false;
  Store.state.notificationText = "Product removed from favorites";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

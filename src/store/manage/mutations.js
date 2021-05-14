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

export function getCollectionTagListSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.collectionTagList = state.collectionTagList.concat(res.data.data);

  if (state.collectionTagList.length == 0)
    Store.state.notificationText = "There is no collections creatd!";
  else
    Store.state.notificationText =
      state.collectionTagList.length + " collections found!";
  state.offsetCollectionTagList = state.collectionTagList.length;
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

export function setOffsetCollectionTagList(state, offset) {
  state.offsetCollectionTagList = offset;
}

export function initCollectionTagList(state) {
  state.collectionTagList = [];
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

export function getProductByIDSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "Products successfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.currentProduct = res.data;
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

export function addProductImageSuccess() {
  Store.state.inRequest = false;
  Store.state.notificationText = "product image added!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

export function removeProductImageSuccess() {
  Store.state.inRequest = false;
  Store.state.notificationText = "selected image removed!";
  Store.state.notificationType = "positive";
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

/**
 *  ---------------------------@favorites_mutation ---------------------------
 **/
export function orderProductSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "product succesfully ordered!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.myOrders.push(res.data);
  state.currentOrder = res.data;
}

export function getMyOrdersSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "orders succesfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.myOrders = res.data;
}

export function RESET_MODULE(state) {
  state.publicCategories = [];

  state.publicCollections = [];
  state.publicTopCollections = [];

  state.publicProducts = [];
  state.currentProduct = [];

  state.myFavorites = [];

  state.currentCollection = null;
  state.offsetCollectionTagList = 0;

  state.currentOrder = [];
  state.myOrders = [];
}

/**
 *  ---------------------------@homepage_data ---------------------------
 **/

export function getHomepageDataSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "orders succesfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  state.homepageData = res.data;
}

/**
 *  ---------------------------@rankings ---------------------------
 **/

export function getRankingsStatusSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "rankings succesfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  if (res.data.data.length != 0)
    state.collectionRankings = state.collectionRankings.concat(res.data.data);
  state.offsetRankings = state.collectionRankings.length;
}

export function getRankingsCategoryIDSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "rankings succesfully got!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
  if (res.data.data.length != 0)
    state.collectionRankings = state.collectionRankings.concat(res.data.data);
  state.offsetRankings = state.collectionRankings.length;
}

export function initCollectionRankings(state) {
  state.collectionRankings = [];
  state.offsetRankings = 0;
}

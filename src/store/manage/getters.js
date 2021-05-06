/**
 *  ---------------------------@collections_getters ---------------------------
 **/
export function publicCollections(state) {
  return state.publicCollections;
}

export function publicTopCollections(state) {
  return state.publicTopCollections;
}

export function currentCollection(state) {
  return state.currentCollection;
}

export function collectionTagList(state) {
  return state.collectionTagList;
}

export function offsetCollectionTagList(state) {
  return state.offsetCollectionTagList;
}
/**
 *  ---------------------------@categories_getters ---------------------------
 **/
export function publicCategories(state) {
  return state.publicCategories;
}

/**
 *  ---------------------------@products_getters ---------------------------
 **/

export function publicProducts(state) {
  return state.publicProducts;
}

export function currentProduct(state) {
  return state.currentProduct;
}

/**
 *  ---------------------------@favorites_getters ---------------------------
 **/
export function myFavorites(state) {
  return state.myFavorites;
}

/**
 *  ---------------------------@orders_getters ---------------------------
 **/
export function myOrders(state) {
  return state.myOrders;
}

export function currentOrder(state) {
  return state.currentOrder;
}

/**
 *  ---------------------------@homepagedata_getters ---------------------------
 **/
export function homepageData(state) {
  return state.homepageData;
}

/**
 *  ---------------------------@rankings ---------------------------
 **/
export function collectionRankings(state) {
  return state.collectionRankings;
}

export function offsetRankings(state) {
  return state.offsetRankings;
}

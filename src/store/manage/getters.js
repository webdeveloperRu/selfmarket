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

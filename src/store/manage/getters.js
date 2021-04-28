/**
 *  ---------------------------@collections_getters ---------------------------
 **/
export function publicCollections(state) {
  return state.publicCollections;
}

export function publicTopCollections(state) {
  return state.publicTopCollections;
}

export function myCollections(state) {
  return state.myCollections;
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

export function publicFilterProducts(state) {
  return state.publicFilterProducts;
}

/**
 *  ---------------------------@favorites_getters ---------------------------
 **/
export function myFavorites(state) {
  return state.myFavorites;
}

import axios from "axios";
import apiurl from "../baseApiUrl";
import { authHeader } from "../authHeader";
const API_URL_CATEGORIES = apiurl.API_URL + "categories/";
const API_URL_COLLECTIONS = apiurl.API_URL + "collections/";
const API_URL_PRODUCTS = apiurl.API_URL + "products/";
const API_URL_FAVORITEES = apiurl.API_URL + "favorites/";

/**
 *  ---------------------------@categories_api ---------------------------
 **/

export async function getCategories(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_CATEGORIES)
    .then(response => {
      if (response.status == 200) {
        context.commit("getCategoriesSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

/**
 *  ---------------------------@collections_api ---------------------------
 **/
export async function getCollections(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_COLLECTIONS, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getCollectionsSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

export async function getTopCollections(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_COLLECTIONS + "top-collections-by-product", {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getTopCollectionsSuccess", response);
      }
    })
    .catch(err => {
      if (err.response) {
        context.commit("REQUEST_FAILED", err.response, {
          root: true
        });
      } else if (err.request) {
        context.commit("NETWORK_ERROR", null, {
          root: true
        });
      }
    });
}

/**
 *  ---------------------------@products_api ---------------------------
 **/
export async function getProducts(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_PRODUCTS, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getProductsSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

export async function filterProducts(context, filter) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_PRODUCTS + "filter", {
      headers: authHeader(),
      params: filter,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("filterProductsSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

export async function addProducts(context, product) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_PRODUCTS + "add", product, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("addProductsSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

/**
 *  ---------------------------@favorites_api ---------------------------
 **/
export async function getFavorites(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_FAVORITEES, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getFavoritesSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

export async function addFavorite(context, productID) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_FAVORITEES + productID + "/add", {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("addFavoriteSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

export async function removeFavorite(context, productID) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_FAVORITEES + productID + "/remove", {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("removeFavoriteSuccess");
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else {
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
        }
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

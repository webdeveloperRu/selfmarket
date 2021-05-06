import axios from "axios";
import apiurl from "../baseApiUrl";
import { authHeader } from "../authHeader";
const API_URL_CATEGORIES = apiurl.API_URL + "categories/";
const API_URL_COLLECTIONS = apiurl.API_URL + "collections/";
const API_URL_PRODUCTS = apiurl.API_URL + "products/";
const API_URL_FAVORITEES = apiurl.API_URL + "favorites/";
const API_URL_ORDERS = apiurl.API_URL + "orders/";
const API_URL_FRONTEND = apiurl.API_URL + "frontend/";
const API_URL_RANKINGS = apiurl.API_URL + "rankings/collection/";

/**
 *  ---------------------------@homepage_api ---------------------------
 **/
export async function getHomepageData(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_FRONTEND + "index")
    .then(response => {
      if (response.status == 200) {
        context.commit("getHomepageDataSuccess", response);
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
 *  ---------------------------@collections_api ---------------------------
 **/
export async function getCollections(context, filterParams) {
  var qs = require("qs");

  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_COLLECTIONS, {
      params: filterParams,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getCollectionsSuccess", response);
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

export async function getCollectionTagList(context, filterParams) {
  var qs = require("qs");

  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_COLLECTIONS, {
      params: filterParams,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getCollectionTagListSuccess", response);
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

export async function addCollection(context, collection) {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("category_id", collection.category_id);
  data.append("title", collection.title);
  data.append("description", collection.description);

  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_COLLECTIONS + "add", data, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("addCollectionSuccess", response);
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

export async function updateCollection(context, collection) {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("category_id", collection.category_id);
  data.append("title", collection.title);
  data.append("description", collection.description);
  data.append("seo_description", collection.seo_description);
  data.append("slug", collection.slug);
  data.append("avatar", collection.avatar);
  data.append("banner_img", collection.banner_img);

  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .put(API_URL_COLLECTIONS + "update/" + collection.id, data, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("updateCollectionSuccess", response);
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

export async function getProducts(context, filterParams) {
  var qs = require("qs");
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_PRODUCTS, {
      params: filterParams,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getProductsSuccess", response);
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

export async function addProduct(context, product) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_PRODUCTS + "add", product, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("addProductSuccess", response);
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

export async function updateProduct(context, product) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .put(API_URL_PRODUCTS, product, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("updateProductSuccess", response);
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
 *  ---------------------------@favorites_api ---------------------------
 **/
export async function getFavorites(context, user_id) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_FAVORITEES, {
      headers: authHeader(),
      params: user_id
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getFavoritesSuccess", response);
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

export async function addFavorite(context, [productID, user_id]) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(
      API_URL_FAVORITEES + productID + "/add",
      {
        user_id: user_id,
        product_id: productID
      },
      {
        headers: authHeader()
      }
    )
    .then(response => {
      if (response.status == 200) {
        context.commit("addFavoriteSuccess", response);
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
 *  ---------------------------@orders_api ---------------------------
 **/
export async function createNewOrder(context, productID) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(
      API_URL_ORDERS,
      { product_id: productID },
      {
        headers: authHeader()
      }
    )
    .then(response => {
      if (response.status == 200) {
        context.commit("createNewOrderSuccess", response);
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

export async function getMyOrders(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_ORDERS, {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getMyOrdersSuccess", response);
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
 *  ---------------------------@rankings_api ---------------------------
 **/

export async function getRankingsCategoryID(context, [categoryID, params]) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  var qs = require("qs");

  await axios
    .get(API_URL_RANKINGS + categoryID, {
      params: params,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getRankingsCategoryIDSuccess", response);
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

export async function getRankingsStatus(context, [status, params]) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  var qs = require("qs");

  await axios
    .get(API_URL_RANKINGS + status, {
      params: params,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getRankingsStatusSuccess", response);
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

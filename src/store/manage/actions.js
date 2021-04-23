import axios from "axios";
import apiurl from "../baseApiUrl";
import { authHeader } from "../authHeader";
const API_URL_CATEGORIES = apiurl.API_URL + "categories/";
const API_URL_COLLECTIONS = apiurl.API_URL + "collections/";
const API_URL_PRODUCTS = apiurl.API_URL + "products/";

export async function getCategories(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_CATEGORIES, {
      headers: authHeader()
    })
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

import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";

Vue.use(Vuex);
const Store = new Vuex.Store({
  modules: {
    auth
  },
  state: {
    notificationText: "",
    notificationType: "",
    inRequest: false
  },
  mutations: {
    REQUEST_FAILED(state, error) {
      state.inRequest = false;
      state.notificationType = "negative";
      if (error.status == 401) {
        if (error.data.message == "token is invalid") {
          store.dispatch("auth/logout");
        }
      }
      if (error.data.errors)
        state.notificationText = JSON.stringify(error.data.errors);
      else state.notificationText = JSON.stringify(error.data.message);
    },
    // Network Error
    NETWORK_ERROR(state) {
      state.inRequest = false;
      state.notificationType = "negative";
      state.notificationText = "Network Connection Error";
    },
    SET_IN_REQUEST(state, flag) {
      state.inRequest = flag;
    },

    RESET_MODULE(state) {
      state.inRequest = false;
      state.notificationText = "";
      state.notificationType = "";
    }
  },
  actions: {},
  getters: {
    notificationText: state => state.notificationText,
    inRequest: state => state.inRequest,
    notificationType: state => state.notificationType
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING
});

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  return Store;
}
export { Store };

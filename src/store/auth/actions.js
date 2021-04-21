import axios from "axios";
import apiurl from "../baseApiUrl";
const API_URL = apiurl.API_URL + "auth/";
export async function login(context, [user, remeberMe]) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL + "login", user)
    .then(response => {
      if (response.data.token) {
        if (remeberMe) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      }
      if (response.status == 200) {
        context.commit("loginSuccess", response);
      } else if (
        response.response.status == 401 &&
        response.response.data.message == "otp code is requested"
      ) {
        context.commit("setTwoFactorLogIn", {
          user,
          remeberMe
        });
        context.commit("loginFailed", response.response);
      } else {
        context.commit("loginFailed", response.response);
      }
    })
    .catch(err => {
      context.commit("loginFailed", err.response);
    });
}

export async function register(context, user) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL + "register", user)
    .then(response => {
      if (response.status == 200) {
        context.commit("registerSuccess", response);
      } else {
        if (response.response == undefined)
          context.commit("NETWORK_ERROR", null, {
            root: true
          });
        else
          context.commit("REQUEST_FAILED", response.response, {
            root: true
          });
      }
    })
    .catch(err => {
      context.commit("REQUEST_FAILED", err.response, {
        root: true
      });
    });
}

// export function logout(context) {}

// export function forgotPassword(context) {}

// export function resetPassword(context) {}

// export function changePassword(context) {}

// export function updateUser(context) {}

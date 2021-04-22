import axios from "axios";
import apiurl from "../baseApiUrl";
import { authHeader } from "../authHeader";
const API_URL_AUTH = apiurl.API_URL + "auth/";
export async function login(context, [user, remeberMe]) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_AUTH + "login", user)
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
    .post(API_URL_AUTH + "register", user)
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

export async function forgotPassword(context, email) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_AUTH + "forgot-password", email, {
      headers: {
        Auth: "allow"
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("forgotPasswordSuccess", [response, email.email]);
      } else {
        context.commit("forgotPasswordFailed", response.response);
      }
    })
    .catch(err => {
      context.commit("forgotPasswordFailed", err.response);
    });
}

export async function resetPassword(context, data) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_AUTH + "reset-password", data, {
      headers: {
        Auth: "allow"
      }
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("resetPasswordSuccess", [response, email.email]);
      } else {
        context.commit("resetPasswordFailed", response.response);
      }
    })
    .catch(err => {
      context.commit("resetPasswordFailed", err.response);
    });
}

export async function getTwoFactor(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .get(API_URL_AUTH + "twofa", {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("getTwoFactorSuccess", response);
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
export async function deleteTwoFactor(context) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .delete(API_URL_AUTH + "twofa", {
      headers: authHeader()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("deleteTwoFactorSuccess", response);
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
export async function setTwoFactor(context, otp) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .put(
      API_URL_AUTH + "twofa",
      {
        otp: otp
      },
      {
        headers: authHeader()
      }
    )
    .then(response => {
      if (response.status == 200) {
        context.commit("setTwoFactorSuccess", response);
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

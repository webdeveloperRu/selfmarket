import axios from "axios";
import apiurl from "../baseApiUrl";
import { authHeader } from "../authHeader";
import { authHeaderFormData } from "../authHeaderFormData";
const API_URL_AUTH = apiurl.API_URL + "auth/";
import { Router } from "../../router/index";

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
      context.commit("loginSuccess", response);
    })
    .catch(err => {
      if (err.response) {
        if (
          err.response.status == 401 &&
          err.response.data.message == "otp code is requested"
        ) {
          context.commit("setTwoFactorLogIn", {
            user,
            remeberMe
          });
          context.commit("loginFailed", err.response);
        } else {
          context.commit("loginFailed", err.response);
        }
      } else if (err.request) {
        context.commit("NETWORK_ERROR", null, {
          root: true
        });
      }
    });
}

export async function register(context, user) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .post(API_URL_AUTH + "register", user)
    .then(response => {
      context.commit("registerSuccess", response);
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

export async function logout(context) {
  await axios
    .get(API_URL_AUTH + "logout", { headers: authHeader() })
    .then(response => {
      if (response.status == 200) {
        Router.push("/login").catch(() => {});

        context.commit("manage/RESET_MODULE", null, {
          root: true
        });
        context.commit("RESET_MODULE");
      }
    })
    .catch(err => {
      context.commit("manage/RESET_MODULE", null, {
        root: true
      });
      context.commit("RESET_MODULE");

      if (err.response) {
        Router.push("/login").catch(() => {});

        context.commit("REQUEST_FAILED", err.response);
      } else if (err.request) {
        context.commit("NETWORK_ERROR", null, {
          root: true
        });
      }
    });
  Router.push({
    name: "login"
  });
}

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
      }
    })
    .catch(err => {
      if (err.response) {
        context.commit("forgotPasswordFailed", err.response);
      } else if (err.request) {
        context.commit("NETWORK_ERROR", null, {
          root: true
        });
      }
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
      }
    })
    .catch(err => {
      if (err.response) {
        context.commit("resetPasswordFailed", err.response);
      } else if (err.request) {
        context.commit("NETWORK_ERROR", null, {
          root: true
        });
      }
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

export async function updateUser(context, user) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  var FormData = require("form-data");
  var data = new FormData();

  data.append("email", user.email);
  data.append("full_name", user.full_name);
  data.append("tz", user.tz);
  data.append("avatar", user.avatar);
  data.append("account_header", user.account_header);
  await axios
    .put(API_URL_AUTH + "me", data, {
      headers: authHeaderFormData()
    })
    .then(response => {
      if (response.status == 200) {
        context.commit("updateUserSuccess", response);
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

export async function changePassword(context, [password, newpassword]) {
  context.commit("SET_IN_REQUEST", true, {
    root: true
  });
  await axios
    .put(
      API_URL_AUTH + "change-password",
      {
        password: password,
        new_password: newpassword
      },
      {
        headers: authHeader()
      }
    )
    .then(response => {
      if (response.status == 200) {
        context.commit("changePasswordSuccess", response);
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

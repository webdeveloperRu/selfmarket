import { Store } from "../index";
export function loginSuccess(state, res) {
  Store.state.inRequest = false;
  state.loggedIn = true;
  state.user = res.data;
  state.twofa_login = false;
  state.login_userinfo = null;
  Store.state.notificationText = "User successfully logged in";
  Store.state.notificationType = "positive";
}

export function loginFailed(state, error) {
  Store.state.inRequest = false;
  state.loggedIn = false;
  state.user = null;
  Store.state.notificationText = error.data.message;
  Store.state.notificationType = "negative";
}

export function logoutSuccess(state) {
  Store.state.inRequest = false;
  state.loggedIn = false;
  state.user = null;
  Store.state.notificationText = "";
  Store.state.notificationType = "positive";
}

export function logoutFailed(state) {
  Store.state.inRequest = false;
  state.loggedIn = false;
  state.user = null;
  Store.state.notificationText = "";
  Store.state.notificationType = "negative";
}

export function registerSuccess(state, user) {
  Store.state.inRequest = false;
  state.loggedIn = true;
  state.user = user;
  Store.state.notificationText = "User successfully registered!";
  Store.state.notificationType = "positive";
}

export function forgotPasswordSuccess(state, [res, useremail]) {
  state.res = user;
  Store.state.inRequest = false;
  state.emailCode = res.data.resetcode;
  state.emailResetPassword = useremail;
  Store.state.notificationText = "";
  Store.state.notificationType = "positive";
}

export function forgotPasswordFailed(state, error) {
  Store.state.inRequest = false;
  Store.state.notificationText = error.data.message;
  Store.state.notificationType = "negative";
  state.emailResetPassword = "";
}

export function resetPasswordSuccess(state) {
  Store.state.inRequest = false;
  state.emailCode = "";
  state.emailResetPassword = "";
  Store.state.notificationText = "Password successfully reset!";
  Store.state.notificationType = "positive";
}

export function resetPasswordFailed(state, error) {
  Store.state.inRequest = false;
  state.emailCode = "";
  state.emailResetPassword = "";
  Store.state.notificationText = error.data.message;
  Store.state.notificationType = "negative";
}

export function changePasswordSuccess() {
  Store.state.inRequest = false;
  Store.state.notificationText = "password changed successfuly";
  Store.state.notificationType = "positive";
}

export function updateUserSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "User successfully updated!";
  Store.state.notificationType = "positive";
  state.user.data = res.data;
  if (state.remeberMe) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
}

export function RESET_MODULE(state) {
  Object.assign(state, initialState);
}

export function userLogSuccess() {}

export function userLogFailed() {}

export function setTwoFactorLogIn(state, { user, remeberMe }) {
  state.login_userinfo = user;
  state.remeberMe = remeberMe;
}

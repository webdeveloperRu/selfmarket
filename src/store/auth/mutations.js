import { Store } from "../index";
export function loginSuccess(state, res) {
  Store.state.inRequest = false;
  state.loggedIn = true;
  state.user = res.data;
  state.twofa_login = false;
  state.loginUserInfo = null;
  Store.state.notificationText = "User successfully logged in";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

export function loginFailed(state, error) {
  Store.state.inRequest = false;
  state.loggedIn = false;
  state.user = null;
  Store.state.notificationText = error.data.message;
  Store.state.notificationType = "negative";
  Store.state.requestSuccess = false;
}

export function logoutSuccess(state) {
  Store.state.inRequest = false;
  state.loggedIn = false;
  state.user = null;
  Store.state.notificationText = "";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

export function logoutFailed(state) {
  Store.state.inRequest = false;
  state.loggedIn = false;
  state.user = null;
  Store.state.notificationText = "";
  Store.state.notificationType = "negative";
  Store.state.requestSuccess = false;
}

export function registerSuccess(state, user) {
  Store.state.inRequest = false;
  state.loggedIn = true;
  state.user = user;
  Store.state.notificationText = "User successfully registered!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

export function forgotPasswordSuccess(state, [res, useremail]) {
  state.res = user;
  Store.state.inRequest = false;
  state.emailCode = res.data.resetcode;
  state.emailResetPassword = useremail;
  Store.state.notificationText = "";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

export function forgotPasswordFailed(state, error) {
  Store.state.inRequest = false;
  Store.state.notificationText = error.data.message;
  Store.state.notificationType = "negative";
  state.emailResetPassword = "";
  Store.state.requestSuccess = false;
}

export function resetPasswordSuccess(state) {
  Store.state.inRequest = false;
  state.emailCode = "";
  state.emailResetPassword = "";
  Store.state.notificationText = "Password successfully reset!";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

export function resetPasswordFailed(state, error) {
  Store.state.inRequest = false;
  state.emailCode = "";
  state.emailResetPassword = "";
  Store.state.notificationText = error.data.message;
  Store.state.notificationType = "negative";
  Store.state.requestSuccess = false;
}

export function changePasswordSuccess() {
  Store.state.inRequest = false;
  Store.state.notificationText = "password changed successfuly";
  Store.state.notificationType = "positive";
  Store.state.requestSuccess = true;
}

export function updateUserSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.notificationText = "User successfully updated!";
  Store.state.notificationType = "positive";
  state.user.data = res.data;
  Store.state.requestSuccess = true;
  if (state.remeberMe) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
}
export function getTwoFactorSuccess(state, res) {
  Store.state.inRequest = false;
  Store.state.requestSuccess = true;
  state.twoFaKey = res.data.twoFAKey;
  Store.state.notificationText = "Success to get two factor key";
  Store.state.notificationType = "positive";
}

export function deleteTwoFactorSuccess(state) {
  Store.state.inRequest = false;
  Store.state.notificationType = "positive";
  Store.state.notificationText = "success to delete twofa key";
  state.twofaLogged = false;
}

export function setTwoFactorSuccess(state) {
  Store.state.inRequest = false;
  Store.state.notificationType = "positive";
  Store.state.notificationText = "success to set two factor log in";
  state.twofaLogged = true;
}
export function RESET_MODULE(state) {
  Object.assign(state, initialState);
}

export function userLogSuccess() {}

export function userLogFailed() {}

export function setTwoFactorLogIn(state, { user, remeberMe }) {
  state.loginUserInfo = user;
  state.remeberMe = remeberMe;
}

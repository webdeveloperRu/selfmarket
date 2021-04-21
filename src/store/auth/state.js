export default function() {
  const user = JSON.parse(localStorage.getItem("user"));
  const initialState = user
    ? {
        loggedIn: true,
        user,
        emailCode: "",
        emailResetPassword: "",
        twofaLogged: false,
        remeberMe: false
      }
    : {
        loggedIn: false,
        user: null,
        emailCode: "",
        emailResetPassword: "",
        twofaLogged: false,
        remeberMe: false
      };
  return initialState;
}

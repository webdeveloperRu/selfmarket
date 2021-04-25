import { Store } from "./index";

let authHeaderFormData = function() {
  let header = {
    apikey: Store.state.auth.user.token,
    "Content-Type": "application/json"
  };
  return header;
};
export { authHeaderFormData };

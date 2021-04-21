import { Store } from "./index";

let authHeader = function() {
    let header = {
        apikey: Store.state.auth.user.token,
        "Content-Type": "application/json"
    };
    return header;
};
export { authHeader };

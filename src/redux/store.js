import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
// import thunk from "redux-thunk";

const store = createStore(rootReducer, {}, composeWithDevTools());
export default store;

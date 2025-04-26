import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import clientReducer from "./client/clientReducer";
import productReducer from "./product/productReducer";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

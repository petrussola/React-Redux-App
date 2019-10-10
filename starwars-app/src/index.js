import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// STATE MANAGEMENT
import * as reducers from "./state/reducers";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

// MONSTER REDUCER

const masterReducer = combineReducers({
  count: reducers.countReducer
});

// STORE
const store = createStore(
  masterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

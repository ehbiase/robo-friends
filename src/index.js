import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import { searchRobots, requestRobots } from "./reducers";
import "./index.css";
import "tachyons";
import App from "./Containers/App";

/* const logger = createLogger(); */
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

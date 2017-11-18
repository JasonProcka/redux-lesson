import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxLogger from "redux-logger";
import { Provider } from "react-redux";

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(reduxLogger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();

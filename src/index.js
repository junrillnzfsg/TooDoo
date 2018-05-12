import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import todoApp from "./reducers/todoApp";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();
const store = createStore(todoApp, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 100)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

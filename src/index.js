import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from "./reducers/store";

let todoIndex = 0;

const appRender = () => {
  render(
    <App {...store.getState()} store={store} />,
    document.getElementById("root")
  );
};

store.subscribe(appRender);
appRender();

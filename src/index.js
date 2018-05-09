import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import todoApp from "./reducers/todoApp";

render(<App store={createStore(todoApp)} />, document.getElementById("root"));

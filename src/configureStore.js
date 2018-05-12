import { createStore } from "redux";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./localStorage";
import todoApp from "./reducers/todoApp";

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 100)
  );

  return store;
};

export default configureStore;

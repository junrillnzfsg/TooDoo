import { TODO_ACTIONS } from "../constants/actionTypes";
import todo from "./todo";

export default (state = [], action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...state, todo(undefined, action)];
    case TODO_ACTIONS.REMOVE_TODO:
      return;
    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

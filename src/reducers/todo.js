import { TODO_ACTIONS } from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TODO_ACTIONS.REMOVE_TODO:
      return state;
    case TODO_ACTIONS.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

import {
  VISIBILITY_FILTER_ACTIONS,
  VISIBILITY_STATE_ACTIONS
} from "../constants/actionTypes";

export default (state = VISIBILITY_STATE_ACTIONS.SHOW_ALL, action) => {
  switch (action.type) {
    case VISIBILITY_FILTER_ACTIONS.SET_VIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

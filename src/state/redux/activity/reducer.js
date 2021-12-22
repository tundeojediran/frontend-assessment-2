import { ADD_LOG } from "./types";
import { initialState } from "../initialState";

const activity = (state = initialState.activity, action) => {
  const now = new Date().getTime();
  switch (action.type) {
    case ADD_LOG:
      return Object.assign({}, state, { title: action.title, lastSeen: now });
    default:
      return state;
  }
};

export default activity;

import { SAVE_TRIP } from "./types";

const INIT_STATE = {
  departure: "",
  destination: "",
  date: "",
  time: "",
  tripType: "",
};

const trip = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_TRIP:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default trip;

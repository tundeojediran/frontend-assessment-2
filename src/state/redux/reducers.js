import { combineReducers } from "redux";
import trip from "./trip/reducer";
import activity from "./activity/reducer";
import bookingDetails from "./booking-details/reducer";
import contact from "./contact/reducer";
import busDetails from "./bus-details/reducer";

const reducers = combineReducers({
  activity,
  trip,
  bookingDetails,
  busDetails,
  contact,
});

export default reducers;

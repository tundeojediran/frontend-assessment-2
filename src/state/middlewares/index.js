import { addLog } from "../redux/activity/actions";
import { ADD_LOG } from "../redux/activity/types";

const activityMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  if (
    action.type !== ADD_LOG
  ) {
    dispatch(addLog(action.type));
  } else {
    next(action);
  }
};

export default activityMiddleware;

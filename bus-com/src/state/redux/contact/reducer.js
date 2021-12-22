import { SAVE_CONTACT_DETAILS } from "./types";

const INIT_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLineOne: "",
  addressLineTwo: "",
  city: "",
  postalCode: "",
  country: "",
  state: "", 
};

const contact = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_CONTACT_DETAILS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default contact;

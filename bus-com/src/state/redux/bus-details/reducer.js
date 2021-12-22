import { SAVE_BUS_DETAILS } from './types';

const INIT_STATE = {
  name: '',
  numberOfBuses: '',
  cost: '' ,
  serviceFee: '',
  gratuity: '',
  ficav: '',
  tripType: '',
  total: ''
};

const busDetails = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_BUS_DETAILS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default busDetails;

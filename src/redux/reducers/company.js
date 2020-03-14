import { SET_COMPANY_DATA } from '../actions/types';

const INITIAL_STATE = {
  company: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_COMPANY_DATA:
      return {
        ...state,
        company: payload,
      };

    default:
      return state;
  }
};

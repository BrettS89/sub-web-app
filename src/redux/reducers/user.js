import { SET_USER_DATA, SET_LOGIN_ERROR, SET_REGISTRATION_ERROR } from '../actions/types';

const INITIAL_STATE = {
  loginError: null,
  registrationError: null,
  userData: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_REGISTRATION_ERROR:
      return {
        ...state,
        registrationError: payload,
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };

    case SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };

    default:
      return state;
  }
};

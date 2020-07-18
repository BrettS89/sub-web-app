import { SET_USER_DATA, SET_LOGIN_ERROR, SET_REGISTRATION_ERROR, SET_FIRST_SUB_FALSE } from '../actions/types';

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
    
    case SET_FIRST_SUB_FALSE:
    return {
      ...state,
      userData: {
        ...state.userData,
        firstSubscription: false,
      },
    };

    default:
      return state;
  }
};

import { SET_SUBSCRIPTION, SET_USER_SUBSCRIPTIONS, SET_CREDITS } from '../actions/types';

const INITIAL_STATE = {
  userSubscriptions: [],
  subscription: null,
  credits: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_USER_SUBSCRIPTIONS:
      return {
        ...state,
        userSubscriptions: payload,
      };

    case SET_SUBSCRIPTION:
      return {
        ...state,
        subscription: payload,
      };

    case SET_CREDITS:
      return {
        ...state,
        credits: payload,
      };

    default:
      return state;
  }
};

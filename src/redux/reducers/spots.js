import { SET_SPOTS, SET_SPOT_ID } from '../actions/types';

const INITIAL_STATE = {
  spots: [],
  spotId: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_SPOTS:
      return {
        ...state,
        spots: payload,
      };

    case SET_SPOT_ID:
      return {
        ...state,
        spotId: payload,
      }

    default:
      return state;
  }
};

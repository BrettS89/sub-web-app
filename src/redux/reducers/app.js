import { APP_IS_LOADING, APP_IS_NOT_LOADING, OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, OPEN_CREDIT_CARD_MODAL, CLOSE_CREDIT_CARD_MODAL, CLOSE_FREE_BANNER, SHOW_FREE_BANNER } from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  loginModalOpen: false,
  creditCardModalOpen: false,
  showFreeBanner: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case APP_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case APP_IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        loginModalOpen: true,
      };

    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginModalOpen: false,
      };

    case OPEN_CREDIT_CARD_MODAL:
      return {
        ...state,
        creditCardModalOpen: true,
      };

    case CLOSE_CREDIT_CARD_MODAL:
      return {
        ...state,
        creditCardModalOpen: false,
      };

    case CLOSE_FREE_BANNER:
      return {
        ...state,
        showFreeBanner: false,
      };

    case SHOW_FREE_BANNER:
      return {
        ...state,
        showFreeBanner: true,
      };

    default:
      return state;
  }
};

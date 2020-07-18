import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  isLoggedInWatcher,
  loginWatcher,
  registerWatcher,
  addCreditCardWatcher,
];

function * registerWatcher() {
  yield takeLatest(actions.ON_REGISTER, registerHandler);
}

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * isLoggedInWatcher() {
  yield takeLatest(actions.CHECK_IS_LOGGED_IN, isLoggedInHandler);
}

function * addCreditCardWatcher() {
  yield takeLatest(actions.ADD_CREDIT_CARD, addCreditCardHandler);
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    yield put({ type: actions.SET_LOGIN_ERROR, payload: null });
    const { token, user } = yield call(api.login, form);
    localStorage.setItem('token', token);
    const freeBannerLocalStorage = localStorage.getItem('showFreeBanner') === 'false';
    const hideFreeBanner = freeBannerLocalStorage || !user.firstSubscription;
    if (hideFreeBanner) {
      yield put({ type: actions.CLOSE_FREE_BANNER }); 
    } else {
      yield put({ type: actions.SHOW_FREE_BANNER });
    }
    yield put({ type: actions.GET_CREDITS });
    yield put({ type: actions.SET_USER_DATA, payload: user });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    yield put({ type: actions.SET_LOGIN_ERROR, payload: e.message });
    console.log('loginHandler error: ', e.message);
  }
}

function * registerHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    yield put({ type: actions.SET_REGISTRATION_ERROR, payload: null });
    const { token, user } = yield call(api.register, form);
    localStorage.setItem('token', token);
    yield put({ type: actions.SET_USER_DATA, payload: user });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    yield put({ type: actions.SET_REGISTRATION_ERROR, payload: e.message });
    console.log('registerHandler error: ', e.message);
  }
}

function * isLoggedInHandler() {
  const freeBannerLocalStorage = localStorage.getItem('showFreeBanner') === 'false';
  try {
    var { user } = yield call(api.isLoggedIn);
    yield put({ type: actions.SET_USER_DATA, payload: user });
  } catch(e) {
    user = { firstSubscription: true };
    console.log('isLoggedInHandler error', e);
  }
  const hideFreeBanner = freeBannerLocalStorage || !user.firstSubscription;
  if (hideFreeBanner) {
    yield put({ type: actions.CLOSE_FREE_BANNER }); 
  } else {
    yield put({ type: actions.SHOW_FREE_BANNER });
  }
}

function * addCreditCardHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const { user } = yield call(api.addCreditCard, form);
    yield put({ type: actions.SET_USER_DATA, payload: user });
    navigate();
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert(e.message);
    console.log('addCreditCardHandler error: ', e);
  }
}
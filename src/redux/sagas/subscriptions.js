import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { userSubscriptionsState } from '../selectors';

export default [
  getSubscriptionsWatcher,
  subscribe,
  getUserSubscriptionsWatcher,
  cancelUserSubscriptionWatcher,
  getCreditsWatcher,
  useCreditWatcher,
];

function * getSubscriptionsWatcher() {
  yield takeLatest(actions.GET_SUBSCRIPTIONS, getSubscriptionsHandler);
}

function * subscribe() {
  yield takeLatest(actions.SUBSCRIBE, subscribeHandler);
}

function * getUserSubscriptionsWatcher() {
  yield takeLatest(actions.GET_USER_SUBSCRIPTIONS, getUserSubscriptionsHandler);
}

function * cancelUserSubscriptionWatcher() {
  yield takeLatest(actions.CANCEL_USER_SUBSCRIPTION, cancelUserSubscriptionHandler);
}

function * getCreditsWatcher() {
  yield takeLatest(actions.GET_CREDITS, getCreditsHandler);
}

function * useCreditWatcher() {
  yield takeLatest(actions.USE_CREDIT, useCreditHandler);
}

function * getSubscriptionsHandler({ payload }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const subscriptions = yield call(api.getSubscriptions, payload);
    yield put({ type: actions.SET_SUBSCRIPTIONS, payload: subscriptions });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('getSubscriptions error: ', e.message);
  }
}

function * subscribeHandler({ payload: { data, navigate } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const userSubscriptions = yield select(userSubscriptionsState);
    const { userSubscription } = yield call(api.subscribe, data);
    let userSubs;
    if (userSubscriptions) {
      userSubs = [...userSubscriptions, userSubscription];
    } else {
      userSubs = [userSubscription];
    }
    yield put({ type: actions.SET_USER_SUBSCRIPTIONS, payload: userSubs });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('subscribeHandle error', e.message);
  }
}

function * getUserSubscriptionsHandler() {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const { subscriptions } = yield call(api.getUserSubscriptions);
    yield put({ type: actions.SET_USER_SUBSCRIPTIONS, payload: subscriptions });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('getUserSubscriptionsHandler error', e.message);
  }
}

function * cancelUserSubscriptionHandler({ payload }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const { _id } = yield call(api.cancelUserSubscription, payload);
    const userSubscriptions = yield select(userSubscriptionsState);
    const filteredUserSubscriptions = userSubscriptions.filter(s => {
      return s._id !== _id;
    });
    yield put({ type: actions.SET_USER_SUBSCRIPTIONS, payload: filteredUserSubscriptions });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('cancelUserSubscriptionHandler error: ', e);
  }
}

function * getCreditsHandler() {
  try {
    const { subscriptions } = yield call(api.getCredits);
    console.log(subscriptions);
  } catch(e) {
    console.log('getCreditsHandler error: ', e);
  }
}

function * useCreditHandler({ payload }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const { creditId } = yield call(api.useCredit, payload);
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('useCreditHandler', e);
  }
}
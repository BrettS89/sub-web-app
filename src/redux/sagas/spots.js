import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  getSpotsWatcher,
];

function * getSpotsWatcher() {
  yield takeLatest(actions.GET_SPOTS, getSpotsHandler);
}

function * getSpotsHandler({ payload }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const { locations } = yield call(api.getSpots, {});
    yield put({ type: actions.SET_SPOTS, payload: locations });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('getSubscriptions error: ', e.message);
  }
}

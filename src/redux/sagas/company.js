import _ from 'lodash';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { companyState } from '../selectors';

export default [
  getCompanyDataWatcher,
  createItemWatcher,
];

function * getCompanyDataWatcher() {
  yield takeLatest(actions.GET_COMPANY_DATA, getCompanyDataHandler);
}

function * createItemWatcher() {
  yield takeLatest(actions.CREATE_ITEM, createItemHandler);
}

function * getCompanyDataHandler() {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const data = yield call(api.getCompanyData);
    yield put({ type: actions.SET_COMPANY_DATA, payload: data });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('getCompanyData error: ', e.message);
  }
}

function * createItemHandler({ payload }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const company = yield select(companyState);
    const companyClone = _.cloneDeep(company);
    const { item } = yield call(api.createItem, payload);
    companyClone.items.push(item);
    yield put({ type: actions.SET_COMPANY_DATA, payload: companyClone });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('createItemHandler error: ', e.message);
  }
}

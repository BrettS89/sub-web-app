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
  createSubscriptionWatcher,
  addLocationWatcher,
  publishCompanyWatcher,
  unpublishCompanyWatcher,
  addCompanyWatcher,
];

function * getCompanyDataWatcher() {
  yield takeLatest(actions.GET_COMPANY_DATA, getCompanyDataHandler);
}

function * createItemWatcher() {
  yield takeLatest(actions.CREATE_ITEM, createItemHandler);
}

function * createSubscriptionWatcher() {
  yield takeLatest(actions.CREATE_SUBSCRIPTION, createSubscriptionHandler);
}

function * addLocationWatcher() {
  yield takeLatest(actions.ADD_LOCATION, addLocationHandler);
}

function * publishCompanyWatcher() {
  yield takeLatest(actions.PUBLISH_COMPANY, publishCompanyHandler);
}

function * unpublishCompanyWatcher() {
  yield takeLatest(actions.UNPUBLISH_COMPANY, unpublishCompanyHandler);
}

function * addCompanyWatcher() {
  yield takeLatest(actions.ADD_COMPANY, addCompanyHandler)
}

function * addCompanyHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    if (form.email && form.password) {
      const { user, token } = yield call(api.register, form);
      yield put({ type: actions.SET_USER_DATA, payload: user });
      localStorage.setItem('token', token);
      delete form.email;
      delete form.firstName;
      delete form.lastName;
      delete form.password;
    }
    yield call(api.addCompany, form);
    navigate();
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert(e.message);
    console.log('getCompanyData error: ', e.message);
  }
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
    alert('There was an error creating this item.');
    console.log('createItemHandler error: ', e.message);
  }
}

function * createSubscriptionHandler({ payload }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const company = yield select(companyState);
    const companyClone = _.cloneDeep(company);
    const { subscription } = yield call(api.createSubscription, payload);

    companyClone.subscriptions.push(subscription);

    const subscriptionArr = companyClone.subscriptions.map(sub => {
			const subPlan = sub.plan.map(i => {
				const item = company.items.find(itm => {
					return itm._id.toString() === i.item.toString();
				});
				return {
					...i,
					...item,
				};
			});
			return {
				...sub,
				plan: subPlan,
			};
		});
    companyClone.subscriptions = subscriptionArr;
    
    yield put({ type: actions.SET_COMPANY_DATA, payload: companyClone });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert('There was an error creating this subscription.');
    console.log('createSubscriptionHandler error: ', e.message);
  }
}

function * addLocationHandler({ payload }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const company = yield select(companyState);
    const companyClone = _.cloneDeep(company);
    const { location } = yield call(api.addLocation, payload);
    companyClone.locations.push(location);
    yield put({ type: actions.SET_COMPANY_DATA, payload: companyClone });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert('There was an error creating this item.');
    console.log('createItemHandler error: ', e.message);
  }
}

function * publishCompanyHandler() {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const companyData = yield select(companyState);
    const companyClone = _.cloneDeep(companyData);
    const { company } = yield call(api.publishCompany);
    companyClone.company = company;
    yield put({ type: actions.SET_COMPANY_DATA, payload: companyClone });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert(e.message);
    console.log('publishCompanyHandler error: ', e.message);
  }
}

function * unpublishCompanyHandler() {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const companyData = yield select(companyState);
    const companyClone = _.cloneDeep(companyData);
    const { company } = yield call(api.unpublishCompany);
    companyClone.company = company;
    yield put({ type: actions.SET_COMPANY_DATA, payload: companyClone });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert(e.message);
    console.log('publishCompanyHandler error: ', e.message);
  }
}

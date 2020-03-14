import { all, fork } from 'redux-saga/effects';
import userSagas from './user';
import subscriptionSagas from './subscriptions';
import spotSagas from './spots';
import companySagas from './company';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(userSagas),
    ...forkList(subscriptionSagas),
    ...forkList(spotSagas),
    ...forkList(companySagas),
  ]);
}

import { all } from 'redux-saga/effects'
import { watcherCookieSaga } from '../features/cookieCount/sagas/watcherCookieSaga'
import { watcherUpgradeSaga } from '../features/upgrades/sagas/watcherUpgradeSaga'

export default function* rootSaga() {
  yield all([watcherCookieSaga(), watcherUpgradeSaga()])
}

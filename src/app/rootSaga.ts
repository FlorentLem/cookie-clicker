import { all } from 'redux-saga/effects'
import { watcherCookieSaga } from '../features/cookieCount/sagas/watcherCookieSaga'

export default function* rootSaga() {
  yield all([watcherCookieSaga()])
}

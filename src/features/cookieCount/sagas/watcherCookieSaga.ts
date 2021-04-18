import { takeEvery } from 'redux-saga/effects'
import { clickCookie } from '../cookieSlice'
import { addCookie } from './cookieSaga'

export function* watcherCookieSaga() {
  yield takeEvery(clickCookie.type, addCookie)
}

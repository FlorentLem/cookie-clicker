import { takeEvery } from 'redux-saga/effects'
import { addingCookie } from '../cookieSlice'
import { addCookie } from './cookieSaga'

export function* watcherCookieSaga() {
  yield takeEvery(addingCookie.type, addCookie)
}

import { PayloadAction } from '@reduxjs/toolkit'
import { put, select } from 'redux-saga/effects'
import { setCookie } from '../cookieSlice'
import { selectCurrentCookie } from '../selectors/cookie'

export function* addCookie(action: PayloadAction<number>) {
  const current: number = yield select(selectCurrentCookie)
  const newCurrentCookie = action.payload + current
  yield put(setCookie(newCurrentCookie))
}

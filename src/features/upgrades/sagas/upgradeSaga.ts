import { PayloadAction } from '@reduxjs/toolkit'
import { put, select } from 'redux-saga/effects'
import { setCookie } from '../../cookieCount/cookieSlice'
import { selectCurrentCookie } from '../../cookieCount/selectors/cookie'
import { selectCurrentPerSec } from '../selectors/persec'
import { Upgrade } from '../types/action'
import { setPerSec } from '../upgradesSlide'

export function* addPerSec(action: PayloadAction<Upgrade>) {
  const currentPerSec: number = yield select(selectCurrentPerSec)
  const newCurrentPerSec = action.payload.persec + currentPerSec

  const currentCookie: number = yield select(selectCurrentCookie)
  const newCurrentCookie = currentCookie - action.payload.price

  yield put(setCookie(newCurrentCookie))
  yield put(setPerSec(newCurrentPerSec))
}

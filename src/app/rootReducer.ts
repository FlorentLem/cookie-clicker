import { combineReducers } from 'redux'
import cookieReducer from '../features/cookieCount/cookieSlice'
import upgradeReducer from '../features/upgrades/upgradesSlide'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { PayloadAction } from '@reduxjs/toolkit'

const appReducer = combineReducers({
  cookie: cookieReducer,
  persec: upgradeReducer
})

const rootReducer = (state: any, action: PayloadAction) => {
  return appReducer(state, action)
}

export type RootState = ReturnType<typeof appReducer>

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

export default rootReducer

import { combineReducers } from 'redux'
import cookieReducer from '../features/cookieCount/cookieSlice'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { PayloadAction } from '@reduxjs/toolkit'

const appReducer = combineReducers({
  cookie: cookieReducer
})

const rootReducer = (state: any, action: PayloadAction) => {
  return appReducer(state, action)
}

export type RootState = ReturnType<typeof appReducer>

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

export default rootReducer

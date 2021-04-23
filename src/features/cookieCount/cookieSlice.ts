import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { CookieState } from './types/state'

const cookieSlice = createSlice({
  name: 'cookie',
  initialState: initialState as CookieState,
  reducers: {
    setCookie(state, action: PayloadAction<number>) {
      state.cookies = action.payload
    }
  }
})

export const addingCookie = createAction<number>('cookie/clickCookie')

export const { setCookie } = cookieSlice.actions

export default cookieSlice.reducer

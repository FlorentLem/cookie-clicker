import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { Upgrade } from './types/action'
import { CookiePerSec } from './types/state'

const upgradeSlice = createSlice({
  name: 'upgrade',
  initialState: initialState as CookiePerSec,
  reducers: {
    setPerSec(state, action: PayloadAction<number>) {
      state.persec = action.payload
    }
  }
})

export const chooseUpgrade = createAction<Upgrade>('upgrade/chooseUpgrade')

export const { setPerSec } = upgradeSlice.actions

export default upgradeSlice.reducer

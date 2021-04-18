import { createSelector } from 'reselect'
import { RootState } from '../../../app/rootReducer'

export const selectCurrentCookie = createSelector(
  (state: RootState) => state.cookie.cookies,
  cookies => cookies
)

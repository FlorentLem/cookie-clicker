import { createSelector } from 'reselect'
import { RootState } from '../../../app/rootReducer'

export const selectCurrentPerSec = createSelector(
  (state: RootState) => state.persec.persec,
  persec => persec
)

import { takeEvery } from 'redux-saga/effects'
import { chooseUpgrade } from '../upgradesSlide'
import { addPerSec } from './upgradeSaga'

export function* watcherUpgradeSaga() {
  yield takeEvery(chooseUpgrade.type, addPerSec)
}

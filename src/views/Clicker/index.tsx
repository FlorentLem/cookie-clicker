import React, { useEffect } from 'react'
import ClickerContainer from './ClickerContainer'
import Bubble from './components/Bubble'
import Cookie from './components/Cookie'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentCookie } from '../../features/cookieCount/selectors/cookie'
import { selectCurrentPerSec } from '../../features/upgrades/selectors/persec'
import { addingCookie } from '../../features/cookieCount/cookieSlice'

const Clicker = () => {
  const dispatch = useDispatch()
  const cookie = useSelector(selectCurrentCookie)
  const persec = useSelector(selectCurrentPerSec)

  useEffect(() => {
    if (persec === 0) return
    const interval = setInterval(() => {
      dispatch(addingCookie(persec))
    }, 100)
    return () => clearInterval(interval)
  }, [persec, dispatch])

  const style = {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    Position: 'relative'
  }
  return (
    <div style={style}>
      <Bubble
        newStyle={{
          position: 'absolute',
          top: 10,
          left: 350
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          className="bubble"
        >
          <div className="bubble">{cookie}</div>
          <div className="bubble">Cookies</div>
        </div>
      </Bubble>
      <ClickerContainer>
        <Cookie />
      </ClickerContainer>
      <Bubble
        newStyle={{
          position: 'absolute',
          bottom: 10,
          left: 350
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          className="bubble"
        >
          <div className="bubble">per sec:</div>
          <div className="bubble">{persec}</div>
        </div>
      </Bubble>
    </div>
  )
}

export default Clicker

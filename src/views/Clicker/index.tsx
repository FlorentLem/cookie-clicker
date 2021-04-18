import React from 'react'
import ClickerContainer from './ClickerContainer'
import Bubble from './components/Bubble'
import Cookie from './components/Cookie'
import { useSelector } from 'react-redux'
import { selectCurrentCookie } from '../../features/cookieCount/selectors/cookie'

const Clicker = () => {
  const cookie = useSelector(selectCurrentCookie)

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
        <div>{cookie} Cookies</div>
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
        <div>per sec: 2500</div>
      </Bubble>
    </div>
  )
}

export default Clicker

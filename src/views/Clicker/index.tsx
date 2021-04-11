import React from 'react'
import ClickerContainer from './ClickerContainer'
import Cookie from './components/Cookie'

const Clicker = () => {
  const style = {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div style={style}>
      <ClickerContainer>
        <Cookie />
      </ClickerContainer>
    </div>
  )
}

export default Clicker

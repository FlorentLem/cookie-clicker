import React from 'react'
import Button from '../../components/Button/Button'
import MenuContainer from './MenuContainer'

const Menu = () => {
  const style = {
    height: '100%',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFDEEA'
  }

  const tableau = [
    {
      content: 'loremloremloremloremloremlorem',
      price: 99999
    },
    {
      content: 'loremloremloremloremloremlorem',
      price: 99999
    },
    {
      content: 'loremloremloremloremloremlorem',
      price: 99999
    },
    {
      content: 'loremloremloremloremloremlorem',
      price: 99999
    },
    {
      content: 'loremloremloremloremloremlorem',
      price: 99999
    },
    {
      content: 'loremloremloremloremloremlorem',
      price: 99999
    },
    {
      content: 'loremloremloremloremloremlorem',
      price: 99999
    }
  ]

  return (
    <div style={{ ...style, flexDirection: 'column' }}>
      <h1>Upgrade</h1>
      <MenuContainer>ok</MenuContainer>
    </div>
  )
}

export default Menu

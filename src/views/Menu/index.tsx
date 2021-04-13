import React from 'react'
import MenuContainer from './MenuContainer'
import CardUpdgrades from './components/CardUpgrade'

const Menu = () => {
  const style: React.CSSProperties = {
    height: '100%',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFDEEA'
  }

  const tableau = [
    {
      content: 'Bakerie',
      price: 99999
    },
    {
      content: 'Bakerie',
      price: 99999
    },
    {
      content: 'Bakerie',
      price: 99999
    },
    {
      content: 'Bakerie',
      price: 99999
    },
    {
      content: 'Bakerie',
      price: 99999
    },
    {
      content: 'Bakerie',
      price: 99999
    },
    {
      content: 'Bakerie',
      price: 99999
    }
  ]

  return (
    <div style={{ ...style, flexDirection: 'column' }}>
      <h1
        style={{
          fontSize: '36px',
          color: 'white',
          borderBottom: '2px solid white'
        }}
      >
        Upgrade
      </h1>
      <MenuContainer>
        {tableau.map(t => {
          return <CardUpdgrades content={t.content} price={t.price} />
        })}
      </MenuContainer>
    </div>
  )
}

export default Menu

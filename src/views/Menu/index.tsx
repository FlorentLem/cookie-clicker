import React from 'react'
import MenuContainer from './MenuContainer'
import CardUpdgrades from './components/CardUpgrade'
import { v4 as uuidv4 } from 'uuid'

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
      content: 'Hoven',
      perSec: 10,
      price: 150
    },
    {
      content: 'Patisserie',
      perSec: 100,
      price: 1000
    },
    {
      content: 'Factory',
      perSec: 500,
      price: 5000
    },
    {
      content: 'Bakerie',
      perSec: 2000,
      price: 10000
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
          return (
            <CardUpdgrades
              key={uuidv4()}
              content={t.content}
              price={t.price}
              perSec={t.perSec}
            />
          )
        })}
      </MenuContainer>
    </div>
  )
}

export default Menu

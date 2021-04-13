import React from 'react'
import Button from '../../../../components/Button/Button'

interface Props {
  content: string
  price: number
}

const CardUpgrade: React.FC<Props> = ({ content, price }) => {
  const style: React.CSSProperties = {
    height: '80px',
    width: '90%',
    backgroundColor: '#FFDEEA',
    borderRadius: '6px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.247)'
  }
  return (
    <div style={style}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#646464'
        }}
      >
        <div
          style={{
            marginBottom: '10px'
          }}
        >
          Bakerie level +999: {content}
        </div>
        <div>Price: {price}</div>
      </div>
      <Button>Buy</Button>
    </div>
  )
}

export default CardUpgrade

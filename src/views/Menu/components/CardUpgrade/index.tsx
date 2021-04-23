import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button/Button'
import { selectCurrentCookie } from '../../../../features/cookieCount/selectors/cookie'
import { useDispatch } from 'react-redux'
import { chooseUpgrade } from '../../../../features/upgrades/upgradesSlide'

interface Props {
  content: string
  price: number
  perSec: number
}

const CardUpgrade: React.FC<Props> = ({ content, price, perSec }) => {
  const dispatch = useDispatch()
  const currentCookie = useSelector(selectCurrentCookie)
  const [count, setCount] = useState(1)

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
        <div>{content}</div>
        <div>Per sec: {perSec}</div>
        <div>Price: {price * count}</div>
      </div>
      <Button
        onClick={
          currentCookie >= price * count
            ? () => {
                setCount(count + 1)
                dispatch(
                  chooseUpgrade({ price: price * count, persec: perSec })
                )
              }
            : () => {}
        }
        newStyle={{
          cursor: currentCookie < price * count ? 'not-allowed' : 'pointer'
        }}
      >
        Buy
      </Button>
    </div>
  )
}

export default CardUpgrade

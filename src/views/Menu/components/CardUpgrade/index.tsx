import React from 'react'
import './style.scss'

interface Props {
  content: string
  price: number
}

const CardUpgrade: React.FC<Props> = ({ content, price }) => {
  return (
    <div>
      <div>Bakerie level +999: {content}</div>
      <div>Price: {price}</div>
    </div>
  )
}

export default CardUpgrade

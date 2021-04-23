import React from 'react'
import './style.scss'

type Props = {
  newStyle?: React.CSSProperties
  children: React.ReactNode
}

const Bubble = ({ children, newStyle }: Props) => {
  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '275px',
    width: '275px',
    borderRadius: '50%',
    backgroundColor: '#D6658D',
    color: 'white',
    fontSize: '36px'
  }

  return (
    <div className="bubble" style={{ ...style, ...newStyle }}>
      {children}
    </div>
  )
}

export default Bubble

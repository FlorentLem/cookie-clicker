import React from 'react'
import './style.scss'

interface Props {
  children: JSX.Element | string
  onClick: () => void
  newStyle?: React.CSSProperties
}

const Button: React.FC<Props> = ({ children, onClick, newStyle }) => {
  return (
    <button
      style={{ ...newStyle }}
      className="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

export default Button

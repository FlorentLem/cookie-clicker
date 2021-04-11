import React from 'react'
import './style.scss'

interface Props {
  children: JSX.Element | string
  onClick?: () => void
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={() => onClick}>
      {children}
    </button>
  )
}

export default Button

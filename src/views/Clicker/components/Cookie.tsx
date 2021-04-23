import React from 'react'
import './style.scss'
import { useDispatch } from 'react-redux'
import { addingCookie } from '../../../features/cookieCount/cookieSlice'

const Cookie = () => {
  const dispatch = useDispatch()

  const style = {
    marginLeft: '50px',
    backgroundImage: `url(https://cdn128.picsart.com/212176745002202.gif?to=min&r=640)`,
    height: '300px',
    width: '300px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer'
  }

  return (
    <div
      className="cookie"
      style={style}
      onClick={() => dispatch(addingCookie(1))}
    />
  )
}

export default Cookie

import React from 'react'
import cookie from '../../../assets/images/cookie-assets.png'

const Cookie = () => {
  const style = {
    backgroundImage: `url(${cookie})`,
    height: '300px',
    width: '300px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return <div style={style} />
}

export default Cookie

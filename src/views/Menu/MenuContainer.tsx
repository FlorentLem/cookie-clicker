import React, { FunctionComponent } from 'react'

const MenuContainer: FunctionComponent = ({ children }) => {
  const style: React.CSSProperties = {
    width: '80%',
    height: '80%',
    padding: '10px',
    backgroundColor: '#252525',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '6px'
  }

  return <div style={style}>{children}</div>
}

export default MenuContainer

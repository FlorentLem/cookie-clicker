import React, { FunctionComponent } from 'react'

const MenuContainer: FunctionComponent = ({ children }) => {
  const style = {
    minWidth: '80%',
    minHeight: '80%',
    backgroundColor: '#252525',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px'
  }

  return <div style={style}>{children}</div>
}

export default MenuContainer

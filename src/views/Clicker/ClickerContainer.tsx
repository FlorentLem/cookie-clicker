import React, { FunctionComponent } from 'react'

const ClickerContainer: FunctionComponent = ({ children }) => {
  const style = {
    minWidth: '500px',
    minHeight: '70%',
    backgroundColor: '#FFDEEA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px'
  }

  return <div style={style}>{children}</div>
}

export default ClickerContainer

import './App.scss'
import Clicker from './views/Clicker'
import Menu from './views/Menu'

function App() {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  }

  return (
    <div style={style}>
      <Clicker />
      <Menu />
    </div>
  )
}

export default App

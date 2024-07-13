import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FontAwesomeIcon icon={faBell} />
      </div>
      <h1 className="text-pink-400">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App

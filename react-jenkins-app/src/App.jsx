
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>My React Website</h1>

      <p>Welcome to my Jenkins CI/CD project!</p>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  )
}

export default App

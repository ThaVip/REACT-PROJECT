import { useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

console.log('All env vars:', import.meta.env);
console.log('Greeting:', import.meta.env.VITE_GREETING);
function App() {
  const greeting = import.meta.env.VITE_GREETING
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{greeting}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

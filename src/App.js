import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [error, setError] = useState(false)

  if(error) throw 'A simulated error in JS =D'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Error Boundaries Example!
        </p>
        <button className="App-button" onClick={() => setError(true)}>
          Dispatch JS error
        </button>
      </header>
    </div>
  )
}

export default App

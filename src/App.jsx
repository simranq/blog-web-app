import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Counter />
      <HelloWorld name="Jenn" />
      <Card />
    </>
  )
}

export default App;
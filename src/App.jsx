import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelloWorld name="Jenn"/>
      <Card />       
    </>
  )
}

export default App;

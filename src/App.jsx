import React, { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Card from './components/Card'
import Counter from './components/Counter'
import Input from './components/Input'
import ToggleButton from './components/ToggleButton'

function App() {

  return (
    <>

      <Counter />
      <ToggleButton />
      <Input />
      <HelloWorld name="Jenn" />
      <Card />
    </>
  )
}

export default App;
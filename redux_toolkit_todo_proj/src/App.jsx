import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add_todo from './components/Add_todo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <h1>Todo with Redux toolkit</h1>
    <Add_todo   />
    <Todos />
    </>
  )
}

export default App

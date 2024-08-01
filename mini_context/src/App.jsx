import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User_context_provider from './context/User_context_provider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <User_context_provider>
    <h1>Context Api</h1>
    <Login />     {/*  inn dono tags ko saari values in user context avb hongi, now these components can get and set them as they want   */}
    <Profile />
    </User_context_provider>
  )
}

export default App

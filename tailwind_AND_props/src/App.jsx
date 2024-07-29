import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let username = "Sadiq"
  let arr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-2xl mb-5   ' >Tailwind</h1>
      <Card  username = {username}  numbers = {arr}/>  
      <Card  username = "Ali" />  
      <Card />  
    </>
  )
}

export default App

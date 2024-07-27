import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , set_counter] = useState(5)
  
  //let counter = 5;

  const add_value = () => {
    if(counter === 10){
    set_counter(10)
    }
    else{
    set_counter(counter + 1)
    }
  }

  const sub_value = () => {
    if(counter === 0 ){
      set_counter(0)
      }
      else{
      set_counter(counter - 1)
      }
  }

  return (
    <>
        <h1>Counter project</h1>
        <h2>Value : {counter}</h2>
        <button
        onClick={add_value}
        >Up</button>
        <br />
        <button
        onClick={sub_value}
        >Down</button>
        
    </>
  )
}

export default App

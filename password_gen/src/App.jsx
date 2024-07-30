import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

function App() {

  const [length, set_length] = useState(8)
  const [numbers_included, set_numbers_included] = useState(false)
  const [characters_included, set_characters_included] = useState(false)
  const [password, set_password] = useState("")
  
  const password_generator = useCallback(() => {
    let password = ""
    let password_pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers_included){
      password_pool += "0123456789"
    }
    if(characters_included){
      password_pool += "~!@#$%^&*(){}"
    }
      console.log("L : ",length)
    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * ((password_pool.length-1) + 1)) ;
      password += password_pool[index]
      console.log(password)
      console.log("L : ",length)
      console.log(i)
    }

    console.log(password) 
    set_password(password)


  } , [length , numbers_included , characters_included , set_password])


  useEffect(()=>{
    password_generator()
  },[length , numbers_included , characters_included , set_password , password_generator])

  const password_reference = useRef(password)
  
  const copy_password = useCallback(()=>{
    password_reference.current?.select()
    password_reference.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
<>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-rose-600 text-2xl bg-lime-300'>
          <h1 className='text-black text-center my-3 '  >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref = {password_reference}
           />

           <button
           onClick={copy_password}
           className='outline-none bg-blue-500 text-black px-3 py-0.5 shrink-0.5 cursor-grab'

           >Copy</button>

        </div>

        <div className='flex text-sm gap-x-2' >   
            <div className='flex items-center gap-x-1' >
              <input 
              type="range" 
              min={2}
              max={14}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {set_length(e.target.value)}}
               />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numbers_included}
              id='number_input'
              onChange={() => {set_numbers_included((prev) => !prev)}}
               />
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={characters_included}
              id='character_input'
              onChange={() => {set_characters_included((prev) => !prev)}}
               />
              <label>Characters</label>
            </div>
              <button
                onClick={password_generator}
                type="button"
                class="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>

        </div>

    </div>



</>
  )
}

export default App

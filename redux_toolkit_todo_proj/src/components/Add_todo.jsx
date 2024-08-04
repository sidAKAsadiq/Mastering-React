import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_todo } from '../features/todo/todo_slice'

export default function Add_todo() {
    const [content , set_content] = useState("")
    const dispatch = useDispatch()

    const add_todo_temp = (e) => {
        console.log("In add todo temp")
        e.preventDefault()
        dispatch(add_todo(content))
        //cleaning content
        set_content("")
        
    }
    
    
    
    return (
    
<form  onSubmit={add_todo_temp} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label 
     for="text"
     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
     Add Task
     </label>
    <input 
    type="text"  
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Do laundary" 
    value={content}
    onChange={(e) => set_content(e.target.value)}
    required 
    />
  </div>
  <button 
  type="submit" 
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Submit
  </button>
</form>

  )
}

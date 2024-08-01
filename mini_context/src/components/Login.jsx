import React, { useContext, useState } from 'react'
import User_context from '../context/User_context'

function Login() {
   const [temp_username, set_temp_username] = useState("")
   const [temp_password, set_temp_password] = useState("")
  
   //fetching setter function from user context
   const {set_username} = useContext(User_context)
   const {set_password} = useContext(User_context)
   
   const submit_function = (e) => {
        e.preventDefault() //to prevent data loss from input tag
        //set_user({username , password})
        set_username(temp_username)
        set_password(temp_password)
   }


    return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={temp_username}
        onChange={(e) => set_temp_username(e.target.value)}
        placeholder='username'
        />
        <input 
        type="text"
        value={temp_password}
        onChange={(e) => set_temp_password(e.target.value)}
        placeholder='password'
        />
        <button 
        style={{backgroundColor : 'pink' }} 
        onClick={submit_function} >Submit</button>
    </div>
  )
}

export default Login
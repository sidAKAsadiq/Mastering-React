import React, { useContext } from 'react'
import User_context from '../context/User_context'

function Profile() {
  const {username} = useContext(User_context)
  const {password} = useContext(User_context)

  if(!username){
    return(
        <h1>No user found - Login</h1>
    )
  }
  return(
    <>
    <h1>User : {username}</h1>
    <h1>Pass : {password}</h1>
    </>
)
}

export default Profile
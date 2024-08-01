import React from "react";
import { useState } from "react";
import User_context from "./User_context"

const User_context_provider = ({children}) => {
    //e.g data jo jo bhi required hai
    //const [user, set_user] = useState(null)
    const [username , set_username] = useState(null)
    const [password , set_password] = useState(null)


    return(                    //value may send all data and their setters
        <User_context.Provider value={{username , set_username , password, set_password}}>
        {children} {/* idhar jo bhi pass hoga usko value(s) avb hogi */} 
        </User_context.Provider >
    )

}

export default User_context_provider
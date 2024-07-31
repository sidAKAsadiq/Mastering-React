import React from "react";
import { useParams } from "react-router-dom";

function User(){

    const {user_id} = useParams()
    

    return(
        <>
        <h1 className="bg-blue-500 text-white text-2xl  p-5 " >User ID : {user_id} </h1>
        </>
    )
}

export default User
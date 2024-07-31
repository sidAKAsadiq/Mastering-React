import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Github(){
    const data = useLoaderData()
     // const [data , set_data] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${github_id}`)
    //     .then((respons) => respons.json())
    //     .then((data) => set_data(data))
    // }, [])


    // console.log(data)

    return(
        <>
        <h1 className="bg-blue-500 text-white m-4 p-5 text-3xl text-center"    >Github followers : {data.followers? data.followers : data.message}<img src={data.avatar_url} alt="" /> </h1>
        
        </>
    )
}

export default Github

export const github_data_loader = async({params}) => {
    const {github_id} = params
    const response = await fetch(`https://api.github.com/users/${github_id}`)
    return response.json()
}
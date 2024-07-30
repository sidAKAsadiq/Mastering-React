import { useEffect, useState } from "react";

//creating our own custom hook
function useCurrencyInfo(currency){
    console.log("In hook curr : ",currency)
    const [data , set_data] = useState({})
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    console.log(url)

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>set_data(res[currency]))
    } , [currency])
    console.log("DATA : ", data)
    return data
}

export default useCurrencyInfo
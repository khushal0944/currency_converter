import { useEffect, useState } from 'react'

function UseCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=> response.json())
        .then((response)=> setData(response[currency]))
    },[currency])
    return data;
}

export default UseCurrencyInfo;
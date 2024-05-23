import { useState } from "react";
import { useEffect } from "react";
 

const useCurrencyInfo=(currency)=>{
    const [data,setData]=useState({});
    
    useEffect(()=>{
        const fetchData=async()=>{
            let fetchD=await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`);
            let json=await fetchD.json();
            setData(json[currency]);
        }
        fetchData();

    },[currency])

    console.log(data);
    return data;
}
export default useCurrencyInfo;
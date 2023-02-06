import { useReducer } from "react";
import { DataContext } from "./DataContext";
import { useState,useEffect } from "react";
import React from "react";

interface Props{
    children:any
}

const api = '8898e112-e83c-4637-847a-49ff450b9bea'


const reducer = (state:any,action:any) => {
    // switch(action.type){

    // }
}

export const DataContextProvider: React.FC<Props> = ({children}) => {
    const [data,setData]:any = useState({})
    useEffect(() => {
     const fetchData = async () => {
         const data = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${api}`)
         const json = await data.json();
         setData(json)
     }
     fetchData()
    },[])
    console.log(data,'data')
    const [state,dispatch] = useReducer(reducer,data)
    return (
        <DataContext.Provider value={[state,dispatch]}>{children}</DataContext.Provider>
    )
}
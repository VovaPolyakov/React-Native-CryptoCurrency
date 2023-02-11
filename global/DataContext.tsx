import { ApiContext } from "./Context";

import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useReducer } from "react";

const api = '8898e112-e83c-4637-847a-49ff450b9bea'


export const  DataContextProvider = ({children}:any) => {
    const reducer = () => {

    }
    const [data,setData]:any = useState([])
    useEffect(() => {
        axios
          .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${api}`)
          .then((res) => {
            setData(res.data)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [])
    console.log(data,'data')
    
    return (
        <ApiContext.Provider value={[data,setData]}>
            {children}
        </ApiContext.Provider>
    )
}



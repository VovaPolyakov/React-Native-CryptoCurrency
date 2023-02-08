import { Component, useReducer } from "react";
import { DataContext } from "./DataContext";
import { useState,useEffect } from "react";
import React from "react";


const api = '8898e112-e83c-4637-847a-49ff450b9bea'

// export const  DataContextProvider = ({children}:any) => {
//     const [data,setData]:any = useState(undefined)
//     useEffect(() => {
//      const fetchData = async () => {
//          const data = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${api}`)
//          const json = await data.json();
//          setData(json)
//      }
//      fetchData()
//     },[])
//     console.log(data,'data')
//     const [state,dispatch] = useReducer(reducer,data)
    
//     return (
//         <DataContext.Provider value={[state,dispatch]}>{children}</DataContext.Provider>
//     )
// }

interface IRecipeProps{
    children:any
}

export class DataContextProvider extends React.Component<IRecipeProps>{
    constructor(props:any) {
        super(props);
        this.state = {
            data:{}
        };
      }

      componentDidMount(){
        fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${api}`)
        .then(response => response.json())
        .then(data => this.setState({data:data}))
    }
 
    render(){

        return(
            <DataContext.Provider value={this.state}>{this.props.children}</DataContext.Provider>
        )
    }
}
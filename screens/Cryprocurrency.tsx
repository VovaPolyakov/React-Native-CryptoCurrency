import { View,Text, ActivityIndicator,StyleSheet, ScrollView } from "react-native"
import { useContext, useEffect, useState } from 'react';
import CryptoCurrencyCard from "../components/CryptoCurrencyCard";
import React from "react";
import Menu from "../components/Menu";
import { DataContext } from "../global/DataContext";

const api = '8898e112-e83c-4637-847a-49ff450b9bea'


const Cryptocurrency = () => {
    const [state,dispatch]:any = useContext(DataContext)

    console.log(state,'state')

    return(
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Crypto Currency</Text>
            <ScrollView>
                {/* {state.data? state.data.slice(0,8).map((item:any) => (
                    <CryptoCurrencyCard key={item.id} item={item}/>
                )) : <ActivityIndicator />} */}
            </ScrollView>
            <Menu/>
        </View>
    )
}
export default Cryptocurrency

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingLeft:20,
        paddingRight:20,
    },
    cryptoCurrencyCard:{

    },
    screenTitle:{
        fontSize:24,
        marginTop:8,
        marginBottom:10,
        fontWeight:'bold'
    }

})


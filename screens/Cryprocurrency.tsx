import { View,Text, ActivityIndicator,StyleSheet, ScrollView,TouchableOpacity } from "react-native"
import { useContext, useEffect, useState } from 'react';
import CryptoCurrencyCard from "../components/CryptoCurrencyCard";
import React from "react";
import { ApiContext } from "../global/Context";


const Cryptocurrency = () => {
    const [state,setData]:any = useContext(ApiContext)

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {state.length !== 0 ? state.data.slice(0,10).map((item:any) => (
                    <CryptoCurrencyCard key={item.id} item={item}/>
                )) : <ActivityIndicator />}
            </ScrollView>
        </View>
    )
}
export default Cryptocurrency

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
    },
    scrollView:{
        paddingBottom:20
    },
    cryptoCurrencyCard:{

    },
    screenTitle:{
        fontSize:24,
        marginTop:8,
        paddingTop:30,
        fontWeight:'bold'
    }

})


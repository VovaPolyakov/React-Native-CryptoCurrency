import React, { useEffect, useState } from 'react'
import { View,Text, ScrollView, ActivityIndicator,StyleSheet,TextInput } from 'react-native'
import { useContext } from 'react'
import { ApiContext } from '../global/Context'
import ChangeCryptoCard from '../components/ChangeCryptoCard'
import Icon from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


const Profile = () => {
  const [state,setData]:any = useContext(ApiContext)
  const [value,setValue] = useState('')
  return (
    <View style={styles.container}>
    <View style={styles.searchContainer}>
      <TextInput style={styles.input} placeholder='Search new crypto...'></TextInput>
    </View>
    <Text style={styles.screenTitle}>Change Crypto</Text>
    <ScrollView>
        {state.length !== 0 ? state.data.slice(0,10).map((item:any) => (
            <ChangeCryptoCard key={item.id} item={item}/>
        )) : <ActivityIndicator />}
    </ScrollView>
  </View>
  )
}
export default Profile

const styles = StyleSheet.create({
  container:{
      paddingTop:40,
      paddingLeft:20,
      paddingRight:20,
  },
  searchContainer:{

  },
  isSearch:{
    height:22,
    width:20,
    margin:5

  },
  cryptoCurrencyCard:{

  },
  screenTitle:{
      fontSize:24,
      marginTop:8,
      marginBottom:10,
      fontWeight:'bold'
  },
  input:{
    padding:10,
    fontSize:20,
    backgroundColor:'#dbdbdb',
    borderRadius:20
  }

})


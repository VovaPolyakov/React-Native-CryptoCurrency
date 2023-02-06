import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

interface Props{
    item:any
}
const CryptoCurrencyCard: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.cryptoCurrencyCard}>
        <Text style={styles.text} key={item.id}>{item.name}</Text>
        <Text style={styles.text}>{`${item.quote.USD.price.toFixed(2)}$`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    cryptoCurrencyCard:{
        padding:20,
        marginBottom:5,
        marginTop:10,
        backgroundColor:'black',
        color:'white',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        borderRadius:10,
    },
    text:{
        color:'white',
    }
})
export default CryptoCurrencyCard


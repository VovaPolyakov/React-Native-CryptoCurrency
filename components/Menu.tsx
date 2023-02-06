import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { RootStackParams } from '../App'

const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
  return (
    <View>
        <TouchableOpacity onPress={() => {
            //go to Crytocurrency
            navigation.navigate('Cryptocurrency');
        }}>
            <Text style={styles.link}>Cryptocurrency</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
            //go to Profile
            navigation.navigate('Profile');
        }}>
            <Text style={styles.link}>Profile</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,

    },
    link: {
        fontSize:16,
        marginTop:4,
        color:'#097ade',
        fontWeight:'bold'
    }

})
export default Menu

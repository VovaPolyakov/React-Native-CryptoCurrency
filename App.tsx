import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cryptocurrency from './screens/Cryprocurrency';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DataContextProvider } from './global/DataReducer';

export type RootStackParams = {
  Profile:any;
  Cryptocurrency:any;
};

const RootStack  = createBottomTabNavigator()


export default function App() {


  return (
    <DataContextProvider>
       <NavigationContainer>
          <RootStack.Navigator initialRouteName='Cryptocurrency'>
            <RootStack.Screen 
              name='Cryptocurrency'
              component={Cryptocurrency}
            />
            <RootStack.Screen 
              name='Profile'
              component={Profile}
            />
          </RootStack.Navigator>
      </NavigationContainer>
    </DataContextProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

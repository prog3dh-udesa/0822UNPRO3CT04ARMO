import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import TabNavigation from './TabNavigation'

const Stack = createNativeStackNavigator()

function MainNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen 
                name='Login' 
                component={Login}
                options={{
                    headerShown:false
                }}
            /> 
            <Stack.Screen
                name='Register'
                component={Register}
            />
            <Stack.Screen
                name='TabNavigation'
                component={TabNavigation}
                options={{
                    headerShown:false
                }}
            />
            {/* <Stack.Screen name='Login'>
                {(props) => <Login {...props} otraProp='Pepe' /> }
            </Stack.Screen> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default MainNavigation
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screens/Home/Home'
import Prueba from '../screens/Prueba/Prueba'
import {FontAwesome} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name={'Home'} 
        component={Home}
        options={{
            tabBarIcon: () => <FontAwesome name='home' color={'red'} size={32} />
        }}
        />
        <Tab.Screen name={'Prueba'} component={Prueba} />
    </Tab.Navigator>
  )
}
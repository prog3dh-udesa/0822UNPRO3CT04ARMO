import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {Component} from 'react'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import TabNavigation from './TabNavigation'
import { auth } from '../firebase/config'
const Stack = createNativeStackNavigator()

class MainNavigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            initialScreen:'Login'
        }
        console.log(this.state)
    }

    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            console.log(user)
            if(user !== null){
                this.setState({initialScreen:'TabNavigation'})
            }
        })
    }
    
    render(){
        
        console.log(this.state.initialScreen)
        return (
          <NavigationContainer>
              <Stack.Navigator
              initialRouteName={this.state.initialScreen}
              >
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
              {console.log('Pasa por aqui')}
          </NavigationContainer>
        )
    }
}


export default MainNavigation
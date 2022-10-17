import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import {auth} from '../../firebase/config'
class Login extends Component {

    constructor(){
        super()
        this.state={
            mail:'',
            pass:'',
            logueado: false
        }
    }

    loguear(mail, pass){
        auth.signInWithEmailAndPassword(mail, pass)
        .then( resp => this.setState( {logueado: true} ))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <View>
            <TextInput
             style={ styles.input}
             onChangeText={ text => this.setState( {mail:text} )}
             placeholder='Ingresa tu email'
             value={this.state.mail}
            />
            <TextInput
             style={ styles.input}
             onChangeText={ text => this.setState( {pass:text} )}
             placeholder='Ingresa tu password'
             value={this.state.pass}
            />
            <View>
                <TouchableOpacity onPress={()=> this.loguear(this.state.mail, this.state.pass)}>
                    <Text>Loguearme</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: 'red'
    }
})

export default Login
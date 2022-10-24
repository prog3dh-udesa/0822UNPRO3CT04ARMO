import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import {auth} from '../../firebase/config'


class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            mail:'',
            pass:'',
            logueado: false
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if(user !== null){
                this.props.navigation.navigate('TabNavigation')
            }
        })
    }

    loguear(mail, pass){
        auth.signInWithEmailAndPassword(mail, pass)
        .then( resp => this.props.navigation.navigate('TabNavigation'))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <View style={styles.container}>
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

            <View>
                <Text>Aun no tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register') }>
                    <Text>Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:32
    },
    input:{
        borderWidth:1
    }
})

export default Login
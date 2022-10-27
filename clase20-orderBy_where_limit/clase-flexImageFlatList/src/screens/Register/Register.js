import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { auth } from '../../firebase/config'

class Register extends Component {

    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            error:''
        }
    }

    registrar(email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then( resp => this.props.navigation.navigate('TabNavigation'))
        .catch( err => this.setState({error:err.message}))
    }

    render() {
        return (
        <View style={styles.container}>
            <View>
                <Text>Register</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Escribi tu email'
                    onChangeText={text => this.setState({email: text})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Escribi tu password'
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <View>
                    <TouchableOpacity onPress={()=> this.registrar(this.state.email, this.state.password)}>
                        <Text>Registrar usuario</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>Ya tienes una cuenta?</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text>Logueate</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.error !== '' ?
                    <Text>{this.state.error}</Text>:
                    ''
                }
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

export default Register
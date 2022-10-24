import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import {db, auth} from '../../firebase/config'


class Posts extends Component {
  
    constructor(){
        super()
        this.state={
            description:''
        }
    }

    enviarPost(text){
        db.collection('posts').add({
            owner:auth.currentUser.email,
            createdAt: Date.now(),
            description: text,
            likes:[],
            comments:[]
        })

    }
  
    render() {
        return (
        <View>
            <TextInput
            placeholder='Deja tu descripcion'
            onChangeText={text => this.setState({description: text})}
            value={this.state.description}
            keyboardType='default'
            style={styles.input}
            />
            <TouchableOpacity onPress={()=> this.enviarPost(this.state.description)}>
                <Text>Enviar posts</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        height:32,
        borderWidth:1
    }
})
export default Posts
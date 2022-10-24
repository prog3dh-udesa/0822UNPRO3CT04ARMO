import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {Component} from 'react'
import {db, auth} from '../../firebase/config'

class Posts extends Component {
  constructor(){
    super()
    this.state={
      commentValue: ''
    }
  }

  submitComment(text){
    db.collection('comments').add({
      owner:auth.currentUser.email,
      createdAt: Date.now(),
      comment: text
    })
    .then(()=> this.setState({commentValue: ''}))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <View>
        <Text>Deja tu primer comentario</Text>
        <View>
          <TextInput
            value={this.state.commentValue}
            placeholder='Dejanos tu opinion'
            keyboardType='default'
            onChangeText={text => this.setState({commentValue: text})}
            style={styles.input}
          />
          <View>
            <TouchableOpacity onPress={()=> this.submitComment(this.state.commentValue)} >
              <Text>Enviar comentario</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input:{
    borderColor:'blue',
    borderWidth:1,
    marginHorizontal:16,
    height:42
  }
})

export default Posts
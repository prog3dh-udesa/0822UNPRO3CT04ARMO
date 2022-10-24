import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {db, auth} from '../../firebase/config'
import firebase from 'firebase'
class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            isMyLike: false
        }
    }

    like(){
        db
        .collection('posts')
        .doc(this.props.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(resp => {
            this.setState({
                isMyLike:true
            })
        })
        .catch(err=> console.log(err))
    }

    unlike(){
        db.collection('posts')
        .doc(this.props.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(resp => {
            this.setState({
                isMyLike:false
            })
        })
        .catch(err => console.log(err))
    }

  render() {
    return (
      <View>
        <Text>{this.props.data.description}</Text>
        
        {
            this.state.isMyLike ?
                <TouchableOpacity onPress={()=> this.unlike()}>
                    <Text>Unlike</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=> this.like()}>
                    <Text>Like</Text>
                </TouchableOpacity>
        }
      </View>
    )
  }
}

export default Post
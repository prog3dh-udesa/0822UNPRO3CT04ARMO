import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {FontAwesome} from '@expo/vector-icons'


class Post extends Component {
constructor(props){
    super(props)
    this.state= {
        likesCount:0,
        commentsCount: 0,
        isMyLike:false
    }
}

    like(){
        this.setState({
            isMyLike:true
        }) 
    }


    unlike(){
       this.setState({
        isMyLike:false
       }) 
    }


  render() {
    console.log(this.props.data)

    return (
      <View style={styles.container}>
        <Text>{this.props.data.description}</Text>
        {
            this.state.isMyLike 
            ?
                <TouchableOpacity onPress={()=> this.unlike()}>
                    <Text>UnLike</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={()=>this.like()}>
                    <Text>Like</Text>
                </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default Post
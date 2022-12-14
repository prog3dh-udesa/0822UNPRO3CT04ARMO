import { Text, View, FlatList, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {products} from '../../api/allProducts'
import Card from '../../components/Card/Card'
import {db} from '../../firebase/config'
import Post from '../../components/Post/Post'
import { ActivityIndicator } from 'react-native-web'

class Home extends Component {
    constructor(){
        super()
        this.state={
            allPosts: []
        }
    }

    componentDidMount(){
        db.collection('posts').onSnapshot(docs => {
            let posteos = []
            docs.forEach(doc => {
                posteos.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            this.setState({
                allPosts: posteos
            })
        })
    }
  
    render() {
        return (
        <View>
            <Text>Home</Text>
            {
                this.state.allPosts.length > 0 ?
                    <FlatList
                        data={this.state.allPosts}
                        keyExtractor={(item)=> item.id.toString()}
                        renderItem={({item}) => <Post data={item.data} />}
                    />
                :
                <ActivityIndicator color='green' size={24} />
            }
        </View>
        )
    }
}

export default Home
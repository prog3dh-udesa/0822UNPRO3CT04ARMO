import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { db } from '../../firebase/config'


class Profile extends Component {

    constructor(){
        super()
        this.state={
            comments:[],
            loading:true
        }
    }

    componentDidMount(){
        db.collection('comments').onSnapshot(
            docs => {
                let allComments = []
                docs.forEach(doc => {
                    allComments.push({
                        id:doc.id,
                        data:doc.data()
                    })
                })

                this.setState({
                    comments: allComments,
                    loading:false
                }, ()=> console.log(this.state.comments))


            }
        )
    }

    render() {
        return (
        <View>
            <Text>Profile</Text>
        </View>
        )
    }
}

export default Profile
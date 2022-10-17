import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import {products} from '../../api/allProducts'
import Card from '../../components/Card/Card'
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'

class ProductsAll extends Component {
    constructor(){
        super()
        this.state={
            info: products
        }
    }
  
    render() {
        return (
        <View>
            <Text>ProductsAll</Text>
            {/* <Register /> */}
            <Login />
            {/* <FlatList
                data={this.state.info}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) => <Card info={item} />}
            /> */}
        </View>
        )
    }
}

export default ProductsAll
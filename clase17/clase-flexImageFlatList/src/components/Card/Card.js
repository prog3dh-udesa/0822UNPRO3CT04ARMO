import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View>
        <Image
            style={ styles.imagen}
            source={{uri: props.info.image}}
            resizeMode='contain'
        />
        <Text>{props.info.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imagen:{
        height:100
    }
})
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

function Home() {
  return (
    <>
        <View style={styles.container} >
        <Text>Home</Text>
        </View>
        <View style={styles.container2}>
            <Image
                style={styles.image}
                source={require('../../../assets/beder.jpg')}
                resizeMode='contain'
            />
            <Image
                style={styles.image}
                source={
                    {uri:'https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001'}
                }
                resizeMode='contain'
            />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    container2:{
        flex:3
    },
    image:{
        height:200
    }
})

export default Home
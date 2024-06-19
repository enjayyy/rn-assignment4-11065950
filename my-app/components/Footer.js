import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
    <View style={styles.footerContainer}>
      <Text>Footer</Text>
      <Text>Footer</Text>
      <Text>Footer</Text>
    </View>

    <Text style={styles.register}>Haven't an account? <Text style={{color:'#356899'}}onPress={() => Linking.openURL('#')}>Register</Text></Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer:{
        marginTop:30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        

    },
    register:{
        color:'#AFB0B6',
        marginTop:80,
        marginLeft:109,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    }

})
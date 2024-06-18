import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header} >
      <Text  style={styles.header1}>Jobizz</Text>
      <Text style={styles.header2}>Welcome Back 👋</Text>
      <Text style={styles.header3}>Let's log in.Apply to jobs!</Text>


    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        marginTop:110,
        marginLeft:20,
    },
    header1:{
        fontStyle:'Poppins',
        color:'#356899',
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 7,
    },

    header2:{
        fontStyle:'Poppins',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom:4,
    },

 header3:{
        fontStyle:'Poppins',
        marginLeft: 3,
        color:'#AFB0B6'
    },
})
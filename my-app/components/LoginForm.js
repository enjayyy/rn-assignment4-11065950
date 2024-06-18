import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <View style={styles.formContainer} >
      <TextInput style={styles.loginDetails} placeholder='Name'></TextInput>
      <TextInput style={styles.loginDetails} placeholder='Email'></TextInput>

    <TouchableOpacity style={styles.loginBtn}><Text style={{color: 'white'}} >Log in</Text></TouchableOpacity>

    <Text style={{fontSize: 12, marginTop: 21, marginLeft: 21, color:'#AFB0B6' }}>_________________ Or continue with __________________</Text>
    </View>
  ) 
}

export default LoginForm

const styles = StyleSheet.create({
    formContainer:{
        marginTop:50,
        paddingHorizontal: 8,
        marginRight: 20,
  
        
    },
    loginDetails:{
        borderRadius: 12,
        borderColor:'black',
        marginBottom:12,
        padding:17,
        borderWidth:1,
        borderColor:'black',
      
    },
   loginBtn:{
    borderRadius: 12,
    padding:17,
    backgroundColor:'#356899',
    fontSize:40,
    justifyContent: 'center',
    alignItems: 'center',
    
   }
})
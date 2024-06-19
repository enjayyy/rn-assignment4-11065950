import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginForm = ({}) => {
  const navigation =useNavigation();

  const [name,setName] =useState("");
  const [email,setEmail] =useState("");

  const HandleLogin=() => {
    if (name.trim()==="" || email.trim() ==="" )
      {
        Alert.alert("Please enter a valid email and name")
      }else{

        navigation.navigate('Home', {name, email});
      }
  }


  return (
    
    <View style={styles.formContainer} >
      <TextInput 
      style={styles.loginDetails} 
      placeholder='Name'
      value={name}
      onChangeText={text => setName(text)}>
      </TextInput>

      <TextInput 
      style={styles.loginDetails}
       placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}>
       </TextInput>

    <TouchableOpacity style={styles.loginBtn} onPress= {HandleLogin}><Text style={{color: 'white'}} >Log in</Text></TouchableOpacity>

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
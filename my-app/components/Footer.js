import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
   <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Image
           source={require('../assets/Applee.png')} // Replace with your icon URL or local path
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require('../assets/Google.png')}// Replace with your icon URL or local path
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require('../assets/Facebook.png')} // Replace with your icon URL or local path
          style={styles.icon}
        />
      </TouchableOpacity>
    
     </View>
    
    <Text style={styles.register}>Haven't an account? <Text style={{color:'#356899'}}onPress={() => Linking.openURL('#')}>Register</Text></Text>
 
  </View>
  )

}

export default Footer

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  iconRow: {
   
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 10,
  },
  icon: {
    width: 40, // Adjust the size as needed
    height: 40, // Adjust the size as needed
    borderRadius: 25, // This makes the image round
  },
  
    register: {
        color:'#AFB0B6',
        marginTop:20,
        marginLeft:109,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
      }

});
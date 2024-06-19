import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({route}) => {
  const {name, email}=route.params;
  return (
    <ScrollView>
      <SafeAreaView style={styles.userProfileContainer}>
      
      <View  >
      <Text style={styles.profileHeader1}>{name}</Text>
      <Text style={styles.profileHeader2}>{email}</Text>
      </View>

  <View>
      <Image
      style={styles.profilePic}
      source={require("./assets/profilepic.jpeg")}/>
</View>
      

     

      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  userProfileContainer:{
      marginTop: 50,
      marginLeft: 40,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",
   
    },
 
    profilePic:{
    width: 55,
    height: 55,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 40,
  },

  profileHeader1:{
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
  },

  
  profileHeader2:{
    fontSize: 19,
    fontWeight: '300',
    color: '#95969D',


  },
  

  });
  
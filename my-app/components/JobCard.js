import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const JobCard = ({ jobTitle, companyName, location, isFeatured,salary, icon, customStyle}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.card, customStyle, isFeatured && styles.featuredCard]}>
      <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
      </View>

     
        <View style={styles.topDetails}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.companyName}>{companyName}</Text>

        <View style={styles.bottomDetails}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>       {location}</Text>
        </View>


        
        </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 320,
    height:190,
    marginLeft:24,
    marginTop: 15,
    padding: 18,
    borderRadius: 24,
    marginRight: 1,

  },
  
  icon:{  
    width: 32,
    height: 32,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 3,
  },

  iconContainer: {
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    width:55,
    height:55,
    borderRadius: 12,
  },
  detailsContainer: {
    justifyContent: 'flex-start',
    
  },

  topDetails:{
    marginTop: 2,
  },

  bottomDetails:{
   flexDirection: 'row',
    marginTop:95,
    justifyContent:'space-between',
   

  }, 

  jobTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 16,
    color: 'white',
    fontWeight:'130',
  },
 salary:{
    color:'white',
    
 },
 location:{
    color: 'white',
    fontWeight:'100',
 }
 

});

export default JobCard;

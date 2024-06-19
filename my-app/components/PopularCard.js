import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PopularCard = ({ jobTitle, companyName, location, salary, isFeatured, icon, customStyle }) => {
  return (
    <View style={[styles.card, customStyle]}>
      <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.topRow}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
          <Text style={styles.salary}>{salary}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.companyName}>{companyName}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: 100, // Fixed height for vertical rendering
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    width: 60,
    height: 60,

  },


  icon:{  
    width: 70,
    height: 70,
    borderRadius: 40,
    overflow: 'hidden',
    marginLeft: 15,
    marginTop: 11,
   
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
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginBottom:13,
  },
  jobTitle: {
    fontSize: 17,
    fontWeight: '500',
  },
  companyName: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '200',


  },
  location: {
    fontSize: 16,
    color: 'darkgray',
    fontWeight: '200',


  },
  salary: {
    fontSize: 14,
    paddingLeft:30,

  },
});

export default PopularCard;

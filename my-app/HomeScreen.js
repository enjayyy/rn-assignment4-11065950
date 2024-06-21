import { SafeAreaView,FlatList, StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons';
import JobCard from './components/JobCard'; // Adjust the import path based on your file structure
import PopularCard from './components/PopularCard'; // Adjust the import path based on your file structure

const jobs = [
  {
    jobTitle: 'Software Engineer',
    companyName: 'Facebook',
    location: 'Accra, Ghana',
    salary:'$180,000',
    isFeatured: true,
    icon: require('./assets/Facebook.png'),
    customStyle: { backgroundColor: '#5386E4'}, // Custom style for this card

  },
  {
    jobTitle: 'Product Manager',
    companyName: 'Google',
    location: 'Accra, Ghana',
    salary:'$160,000',
    isFeatured: false,
    icon: require('./assets/Google.png'),
    customStyle: { backgroundColor: '#04284A'}, // Custom style for this card

  },

  {
    jobTitle: 'Data Scientist',
    companyName: 'Google',
    location: 'Nairobi, Kenya',
    salary: '$150,000',
    isFeatured: false,
    icon: require('./assets/Google.png'),
    customStyle: { backgroundColor: '#34A853' }, // Custom style for this card
  },
  {
    jobTitle: 'Backend Developer',
    companyName: 'Microsoft',
    location: 'Lagos, Nigeria',
    salary: '$140,000',
    isFeatured: true,
    icon: require('./assets/Microsoft.png'),    
    customStyle: { backgroundColor: '#F15156' }, // Custom style for this card
  },
  {
    jobTitle: 'UI/UX Designer',
    companyName: 'Apple',
    location: 'Johannesburg, South Africa',
    salary: '$130,000',
    isFeatured: false,
    icon: require('./assets/Applee.png'),    customStyle: { backgroundColor: '#FFBB00' }, // Custom style for this card
  },
  {
    jobTitle: 'DevOps Engineer',
    companyName: 'Amazon',
    location: 'Cairo, Egypt',
    salary: '$160,000',
    isFeatured: true,
    icon: require('./assets/amazon.png'),
    customStyle: { backgroundColor: '#FF9900' }, // Custom style for this card
  },
  {
    jobTitle: 'Front End Developer',
    companyName: 'Netflix',
    location: 'Casablanca, Morocco',
    salary: '$120,000',
    isFeatured: false,
    icon: require('./assets/Netflix.png'),    
    customStyle: { backgroundColor: '#E50914' }, // Custom style for this card
  },
  {
    jobTitle: 'Mobile Developer',
    companyName: 'Twitter',
    location: 'Kampala, Uganda',
    salary: '$125,000',
    isFeatured: true,
    icon: require('./assets/X.png'),    
    customStyle: { backgroundColor: '#1DA1F2' }, // Custom style for this card
  },
  {
    jobTitle: 'System Administrator',
    companyName: 'IBM',
    location: 'Tunis, Tunisia',
    salary: '$110,000',
    isFeatured: false,
    icon: require('./assets/ibm.jpg'),    
    customStyle: { backgroundColor: '#006699' }, // Custom style for this card
  },
  {
    jobTitle: 'AI Specialist',
    companyName: 'OpenAI',
    location: 'Algiers, Algeria',
    salary: '$200,000',
    isFeatured: true,
    icon: require('./assets/ai.png'),    
    customStyle: { backgroundColor: '#1C1C1C' }, // Custom style for this card
  },
  {
    jobTitle: 'Project Manager',
    companyName: 'Oracle',
    location: 'Dakar, Senegal',
    salary: '$135,000',
    isFeatured: false,
    icon: require('./assets/oracle.jpg'),    
    customStyle: { backgroundColor: '#F80000' }, // Custom style for this card
  }
  // Add more job objects as needed
];
const popularJobs = [
  {
    jobTitle: 'Jr Executive',
    companyName: 'Burger King',
    location: 'Algiers, Algeria',
    salary: '$200,000',
    isFeatured: true,
    icon: require('./assets/burgerk.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  
  {
    jobTitle: 'Engineer',
    companyName: 'DeepMind',
    location: 'Nairobi, Kenya',
    salary: '$220,000',
    isFeatured: true,
    icon: require('./assets/deepmind.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  {
    jobTitle: 'Data Analyst',
    companyName: 'Tesla',
    location: 'Cape Town, South Africa',
    salary: '$140,000',
    isFeatured: false,
    icon: require('./assets/Tesla.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  {
    jobTitle: 'Cybersecurity Expert',
    companyName: 'IBM',
    location: 'Lagos, Nigeria',
    salary: '$180,000',
    isFeatured: false,
    icon: require('./assets/burgerk.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  {
    jobTitle: 'Blockchain Developer',
    companyName: 'Coinbase',
    location: 'Cairo, Egypt',
    salary: '$160,000',
    isFeatured: true,
    icon: require('./assets/burgerk.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  {
    jobTitle: 'Full Stack Developer',
    companyName: 'Airbnb',
    location: 'Casablanca, Morocco',
    salary: '$150,000',
    isFeatured: false,
    icon: require('./assets/burgerk.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  {
    jobTitle: 'DevOps Engineer',
    companyName: 'Spotify',
    location: 'Accra, Ghana',
    salary: '$175,000',
    isFeatured: true,
    icon: require('./assets/burgerk.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  {
    jobTitle: 'Cloud Architect',
    companyName: 'Amazon Web Services',
    location: 'Dakar, Senegal',
    salary: '$210,000',
    isFeatured: false,
    icon: require('./assets/burgerk.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  },
  {
    jobTitle: 'Product Manager',
    companyName: 'Google',
    location: 'Tunis, Tunisia',
    salary: '$190,000',
    isFeatured: true,
    icon: require('./assets/burgerk.png'),   
    customStyle: { backgroundColor: '#FFFFFF' }, // Custom style for this card
  }
];


const HomeScreen = ({route}) => {
  const {name, email}=route.params;
  return (
    <ScrollView style={{color: 'white'}}>
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
            
    <View style={styles.searchContainer}>
    <TextInput 
    style={styles.searchInput} 
    placeholder='Search a job or position'> 
    </TextInput>
    <TouchableOpacity style={styles.filterIcon}>
    </TouchableOpacity>
    </View>

    <Text style={styles.title}> Featured Jobs</Text>
     <View>
     <FlatList
           data={jobs}
           renderItem={({ item }) => (
             <JobCard
               jobTitle={item.jobTitle}
               companyName={item.companyName}
               location={item.location}
               salary={item.salary}
               isFeatured={item.isFeatured}
               icon={item.icon}
               customStyle={item.customStyle}

          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
      />
     </View>

     <Text style={styles.title}> Popular Jobs</Text>
      <View>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          <PopularCard
            jobTitle={item.jobTitle}
            companyName={item.companyName}
            location={item.location}
            salary={item.salary}
            isFeatured={item.isFeatured}
            icon={item.icon}
            customStyle={item.customStyle}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      </View>
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

title:{
  marginLeft: 30,
  marginTop: 40,
  fontSize: 18,
  fontWeight: '600',

},

  profileHeader2:{
    fontSize: 19,
    fontWeight: '300',
    color: '#95969D',


  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 35,
  },
  searchInput: {
    width:275,
    color:'#95969D', 
     height: 50,
    fontWeight:'300', 
    backgroundColor: '#ececec',
    borderRadius: 11,
    paddingHorizontal: 8,
    marginRight: 20,
  },

  filterIcon:{
    width:55,
    color:'#95969D', 
     height: 50,
     fontWeight:'300', 
     backgroundColor: '#ececec',
     borderRadius: 11,
     paddingHorizontal: 8,
     marginRight: 20,

  }

  });
  
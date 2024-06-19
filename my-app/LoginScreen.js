import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";




export default function LoginScreen({}) {
  return (
    <View >
      <Header/>
      <LoginForm/>
      <Footer/>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import footerLinks from "./components/footerLinks";



export default function App() {
  return (
    <View >
      <Header/>
      <LoginForm/>
      <footerLinks/>
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

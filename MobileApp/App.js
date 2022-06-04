import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AttendanceScreen from './app/screens/AttendanceScreen';
import Time from './app/components/Time';
import PresentTime from './app/components/PresentTime';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

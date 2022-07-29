import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import AttendanceRecordScreen from './app/screens/AttendanceRecordScreen';
import InputLocationScreen from './app/screens/InputLocationScreen';
import AddEmployeeScreen from './app/screens/AddEmployeeScreen';
import FrequentLocation from './app/screens/FrequentLocation';

export default function App() {
  return (

    // <NavigationContainer>
    //   <AuthNavigator/>
    // </NavigationContainer>

    // <AttendanceRecordScreen/>
    // <WelcomeScreen/>
    // <RegisterScreen/>
    // <AttendanceScreen/>
    // <InputLocationScreen/>
    // <LiveLocationTracking/>
    <AddEmployeeScreen/>
    // <FrequentLocation/>
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

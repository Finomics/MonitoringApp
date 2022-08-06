import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AttendanceRecordScreen from "./app/screens/AttendanceRecordScreen";
import InputLocationScreen from "./app/screens/InputLocationScreen";
import AddEmployeeScreen from "./app/screens/AddEmployeeScreen";
import FrequentLocation from "./app/screens/FrequentLocation";
import AttendanceScreen from "./app/screens/AttendanceScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import DropDownBox from "./app/components/DropDownBox";
import LoginScreen from "./app/screens/LoginScreen";
import Icon from "./app/components/Icon";
import AdminHomeScreen from "./app/screens/AdminHomeScreen";
import EmployeeHomeScreen from "./app/screens/EmployeeHomeScreen";

// import Testing from "./app/components/Testing";


export default function App() {
  return (
    // <NavigationContainer>
    //   <AuthNavigator/>
    // </NavigationContainer>

    // <EmployeeHomeScreen/>
    // <AdminHomeScreen/>
    // <AttendanceRecordScreen/>
    // <WelcomeScreen/>
    // <RegisterScreen />
    // <RegisterScrAttendanceScreeneen />
    // <AttendanceScreen />
    // <InputLocationScreen/>
    // <LoginScreen/>
    // <DropDownBox/>
    // <LiveLocationTracking/>
    <AddEmployeeScreen/>
    // <FrequentLocation/>

    // <Testing/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

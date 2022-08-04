import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import InputLocationScreen from '../screens/InputLocationScreen';
import AttendanceRecordScreen from '../screens/AttendanceRecordScreen';
import AdminHomeScreen from "../screens/AdminHomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AddEmployeeScreen from "../screens/AddEmployeeScreen";
import FrequentLocation from "../screens/FrequentLocation";

const Stack = createNativeStackNavigator();

const AuthNavigator=()=> (
    <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='AdminHomeScreen' component={AdminHomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='AddEmployeeScreen' component={AddEmployeeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='AttendanceScreen' component={AttendanceScreen} options={{headerShown: false}}/>
        <Stack.Screen name='FrequentLocation' component={FrequentLocation} options={{headerShown: false}}/>
        <Stack.Screen name='InputLocationScreen' component={InputLocationScreen} options={{headerShown: false}}/>
        <Stack.Screen name='AttendanceRecordScreen' component={AttendanceRecordScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default AuthNavigator;
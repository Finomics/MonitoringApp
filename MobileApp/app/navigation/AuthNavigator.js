import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AttendanceScreen from '../screens/AttendanceScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator=()=> (
    <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name='AttendanceScreen' component={AttendanceScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default AuthNavigator;
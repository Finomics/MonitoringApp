import React, { useState, useEffect } from 'react';

import * as Device from 'expo-device';

import { StyleSheet, Alert } from 'react-native';
import moment from 'moment';
import * as Location from 'expo-location';


import Screen from './Screen';
import AppButton from './AppButton';



function PresentTime(props) {

    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = moment().utcOffset('+05:00').format(' hh:mm:ss A');
        setCurrentDate(date);
    }, []);

    const [location, setLocation] = useState();

    const getLocation = async () => {
        const result = await Location.requestForegroundPermissionsAsync();
        if (!result.granted){
            return;
        }else{
            const { coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync();
            setLocation({latitude, longitude});
        }
    }
    useEffect(()=>{
         getLocation();
    }, [])

    const handlePress=()=>{
        // console.log({currentDate})
        console.log(currentDate)
        console.log(location.latitude,',',location.longitude )
        console.log(Device.deviceName)
        // alert('Punch Time is '+ currentDate);
        
        Alert.alert(
            'Attendance Record',
            'Punch time is'+ currentDate + " at " + location.latitude +', '+ location.longitude + " location from "+Device.deviceName+" device." ,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );



    }
    return (
        <Screen>
            <AppButton title='Time Punch' onPress={(handlePress)}/>
        </Screen>
    );
}
const styles = StyleSheet.create({
    
})

export default PresentTime;
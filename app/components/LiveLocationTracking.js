import React from 'react';

import { View, StyleSheet, Text, ScrollView } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

import Screen from './Screen';

function LiveLocationTracking(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={{height: 80, flexDirection: 'row'}} >
                    <ScrollView
                        horizontal
                        style={{ backgroundColor: 'yellow'}}
                    >
                        <AppText style={{padding: 24}} >Date</AppText>
                        <AppText style={{padding: 24}} >Employee Name</AppText>
                        <AppText style={{padding: 24}} >Time In</AppText>
                        <AppText style={{padding: 24}} >Time Out</AppText>
                        <AppText style={{padding: 24}} >Hours</AppText>
                    </ScrollView>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ecf0f1'  
    },
    table:{
        // flex:1, 
        backgroundColor: colors.light
    },
    column:{
        // flexDirection: 'row',
        // width: '100%',
        // height: 10,
        backgroundColor: colors.danger,
    },
    date:{
        // width: '20%',
        // height: 30,
        backgroundColor: 'yellow',
        alignItems: 'center',
    },
    employeeName:{
        // width: '30%',
        // height: 30,
        backgroundColor: 'blue',
        // alignItems: 'center',
    },
    timeIn:{
        // width: '20%',
        // height: 30,
        backgroundColor: 'green',
        alignItems: 'center',
    },
    timeOut:{
        // width: '20%',
        // height: 30,
        backgroundColor: 'purple',
        alignItems: 'center',
    },
    hours:{
        // width: '10%',
        // height: 30,
        backgroundColor: 'orange',
        alignItems: 'center',
    }
})

export default LiveLocationTracking;
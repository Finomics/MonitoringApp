import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';

import firebase from '../firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';



import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AttendanceList from '../components/AttendanceList';


const attendanceData = [
    {
        name: 'Hassan', date: '18/06/22', punchIn: '9:15', punchOut: '5:15'
    },
    {
        name: 'Hammad', date: '18/06/22', punchIn: '8:15', punchOut: '4:15'
    },
  ]



function AttendanceRecordScreen(props) {
    const [employeData, setEmployeData] = useState();
    
    useEffect(()=>{
        const db = getDatabase();
        const reference = ref(db, '34387122');
        onValue(reference, (snapshot) => {
            const highscore  =  snapshot.val();
            const array = Object.values(highscore);
            setEmployeData(array);
            console.log(employeData,"empolyeeeeeqqqq")
        });
    },[])


    const [data, setData] = useState(attendanceData)

    console.log(data,"datt");

    return (
        <Screen>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logoName.png')}
                    style={styles.logoName} 
                />
            </View>
            <View style={styles.title}>
                <AppText>
                        Attendance Record
                </AppText>
            </View>
                <View style={styles.container}>
                    <DataTable style={{width: 350}}>
                        <DataTable.Header >
                            <DataTable.Title>Date</DataTable.Title>
                            <DataTable.Title>Punch-in</DataTable.Title>
                            <DataTable.Title>Punch-out</DataTable.Title>
                        </DataTable.Header>
                    </DataTable>

                    <FlatList
                        data={ employeData }
                        // keyExtractor={attendanceData => attendanceData.id.toString()}
                        // keyExtractor={data => data.id}
                        renderItem= {({item}) =>
                        
                            <AttendanceList
                                date={item.day}
                                punchIn={item.punchIn}
                                punchOut={item.punchOut}
                                
                            />
                    }/>
                </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    logoName:{
        width: '100%',
        height: 120,
    },
    logoContainer:{
        width: '100%',
    },
    title:{
        height: 30,
        alignSelf: 'center',
    },
    container: {
        // backgroundColor: 'yellow',
        marginHorizontal: 5,
        // alignContent: 'center',
        // alignSelf: 'center',
        // justifyContent: 'center',
      },
})

export default AttendanceRecordScreen;
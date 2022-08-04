import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';

function EmployeeHomeScreen({navigation}) {
    return (
        <Screen>
            
            <View style={styles.logoContainer}>
                    <Image  
                        source={require('../assets/logoName.png')}
                        style={styles.logoName}
                    />
            </View>

            <View style={{width: '100%', height: '50%', paddingHorizontal: 20}}>
                <View style={{width: '100%', height: '50%', flexDirection: 'row'}}>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon 
                            name='blank' 
                            // backgroundColor={colors.backGround}
                            iconColor={colors.primary}
                            size={150}
                            title='Empty'
                             onPress={()=> console.log('Empty')}
                        />
                    </View>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon 
                            name='map-marker-radius-outline' 
                            // backgroundColor={colors.backGround}
                            iconColor={colors.primary}
                            size={150}
                            title='Target Destination'
                            onPress={()=> navigation.navigate('AttendanceScreen')}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', height: '50%', flexDirection: 'row'}}>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon 
                            name='map-marker-check-outline' 
                            // backgroundColor={colors.secondary}
                            iconColor={colors.primary}
                            size={150}
                            title='Mark Attendance'
                             onPress={()=> navigation.navigate('AttendanceScreen')}//shuldbe PaymentScreen
                        />
                    </View>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon 
                            name='file-document-outline' 
                            // backgroundColor={colors.secondary}
                            iconColor={colors.primary}
                            size={150}
                            title='Record'
                            onPress={()=> navigation.navigate('AttendanceRecordScreen')}
                        />
                    </View>
                </View>

            </View>
            
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    logoContainer:{
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    logoName:{
        width: '90%',
        height: 130,
    },

})

export default EmployeeHomeScreen;
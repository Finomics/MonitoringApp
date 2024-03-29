import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';

function AdminHomeScreen({navigation}) {
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
                            name='account-multiple-plus-outline' 
                            // backgroundColor={colors.backGround}
                            iconColor={colors.primary}
                            size={150}
                            title='Add Employee'
                             onPress={()=> navigation.navigate('AddEmployeeScreen')}
                        />
                    </View>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon 
                            name='map-marker-account-outline' 
                            // backgroundColor={colors.backGround}
                            iconColor={colors.primary}
                            size={150}
                            title='Target Location'
                            onPress={()=> navigation.navigate('InputLocationScreen')}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', height: '50%', flexDirection: 'row'}}>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon 
                            name='map-marker-plus-outline' 
                            // backgroundColor={colors.secondary}
                            iconColor={colors.primary}
                            size={150}
                            title='Comman Location'
                             onPress={()=> navigation.navigate('FrequentLocation')}//shuldbe PaymentScreen
                        />
                    </View>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon 
                            name='file-document-edit-outline' 
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

export default AdminHomeScreen;
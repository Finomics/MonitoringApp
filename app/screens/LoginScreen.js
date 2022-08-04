import React from 'react';

import { Image, ScrollView, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import Icon from '../components/Icon';

import Screen from '../components/Screen';
import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../forms';

const validationSchema = Yup.object().shape({
    password: Yup.string().required().min(4).label("Password"),
    employID: Yup.string().required().min(4).label("Employ ID"),
});

function LoginScreen({navigation}) {
   
    const handleSubmit=(values)=>{
        console.log(values)
        navigation.navigate('AdminHomeScreen')
    }
    return (
        <Screen style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image  
                        source={require('../assets/logoName.png')}
                        style={styles.logoName}
                    />
                    <Icon 
                        name='account-tie-outline' 
                        backgroundColor={colors.bgColor}
                        iconColor={colors.secondary}
                        size={150}
                    />
                </View>
                <AppForm
                    initialValues={{password:'', employID:''}}
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize='none' 
                        autoCorrect={false}
                        icon='card-account-details-outline'
                        name='employID'
                        placeholder='Employ ID'
                        secureTextEntry={false} 
                        textContentType='password'
                    />
                    <AppFormField
                        autoCapitalize='none' 
                        autoCorrect={false}
                        icon='lock'
                        name='password'
                        placeholder='Password'
                        secureTextEntry={true} 
                        textContentType='password'
                    />
                    <SubmitButton title='Attendance'/>
                </AppForm>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        backgroundColor: colors.bgColor,
    },
    logoContainer:{
        width: '100%',
        height: 250,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    logoName:{
        width: '100%',
        height: 120,
    },
})

export default LoginScreen;
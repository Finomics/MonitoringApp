import React from 'react';

import { Image, ScrollView, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen({ navigation }) {

    return (
        <Screen style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <AppForm
                    initialValues={{email:'', password:''}}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize='none' 
                        autoCorrect={false}
                        icon='email'
                        keyboardType='email-address'
                        name='email'
                        placeholder='Email'
                        textContentType='emailAddress' 
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
                    <SubmitButton 
                        title='Login'
                    />
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate('AttendanceScreen')}>
                        <Text>By Pass</Text>
                    </TouchableWithoutFeedback>
                </AppForm>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
    },
    logo:{
        width: 155,
        height: 250,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
})
export default LoginScreen; 
import React from 'react';

import { ScrollView, StyleSheet, View, Image } from 'react-native';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../forms';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password"),
    id: Yup.string().required().min(4).label("Employ ID"),
    number: Yup.string().required().min(4).label("Number"), 
})


function AddEmployeeScreen(props) {


    const handleSubmit=(values)=>{
        console.log(values)
    }


    return (
        <Screen style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image  
                        source={require('../assets/logoName.png')}
                        style={styles.logoName}
                    />
                    <Icon
                        name='account-plus-outline'
                        iconColor={colors.secondary}
                        backgroundColor='transparent'
                        size={150}
                    />    
                </View>
                <AppForm
                    initialValues={{id:'', name:'', number:'', password:''}}
                    onSubmit={(values)=>{handleSubmit(values)}}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize='words' 
                        autoCorrect={false}
                        icon='account-arrow-right-outline'
                        keyboardType='email-address'
                        name='name'
                        placeholder='Name'
                        textContentType='name' 
                    />
                    <AppFormField
                        autoCapitalize='none' 
                        autoCorrect={false}
                        icon='card-account-details-outline'
                        keyboardType= 'default'
                        name='id'
                        placeholder='Employee ID'
                        secureTextEntry={false}
                        textContentType='password' 
                    />
                    <AppFormField
                        autoCapitalize='none' 
                        autoCorrect={false}
                        icon='phone-plus-outline'
                        keyboardType= 'numeric'
                        name='number'
                        placeholder='Number'
                        textContentType='telephoneNumber' 
                    />
                    <AppFormField
                        autoCapitalize='none' 
                        autoCorrect={false}
                        icon='lock-outline'
                        keyboardType='default'
                        name='password'
                        placeholder='Password'
                        secureTextEntry={true}
                        textContentType='password' 
                    />
                    <SubmitButton title='Add Employee'/>
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
    header:{
        alignItems: 'center',
    },
    logoName:{
        width: '100%',
        height: 110,
        marginBottom: -50,
    },
})
export default AddEmployeeScreen;
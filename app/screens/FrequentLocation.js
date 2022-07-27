import React from 'react';
import * as Yup from 'yup';

import { View, StyleSheet, Image, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import { AppForm, AppFormField, SubmitButton } from '../forms';

const validationSchema = Yup.object().shape({
    latitude: Yup.string().required().label("Latitude"),
    longitude: Yup.string().required().label("Longitude"), 
    name: Yup.string().required().label("Name")
})


function FrequentLocation(props) {


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
                        name='map-marker-radius-outline'
                        iconColor={colors.secondary}
                        backgroundColor='transparent'
                        size={150}
                    />    
                </View>
                <AppForm
                    initialValues={{latitude:'', longitude:'', name:''}}
                    onSubmit={(values)=>{handleSubmit(values)}}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize='words' 
                        autoCorrect={false}
                        icon='latitude'
                        keyboardType='numeric'
                        name='latitude'
                        placeholder='Latitude'
                        textContentType='name' 
                    />
                    <AppFormField
                        autoCapitalize='words' 
                        autoCorrect={false}
                        icon='longitude'
                        keyboardType='numeric'
                        name='longitude'
                        placeholder='Longitude'
                        textContentType='name' 
                    />
                    <AppFormField
                        autoCapitalize='words' 
                        autoCorrect={false}
                        icon='map-marker-account-outline'
                        keyboardType='email-address'
                        name='name'
                        placeholder='Location Name'
                        textContentType='name' 
                    />
                    <SubmitButton title='Add Frequent Location'/>
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

export default FrequentLocation;
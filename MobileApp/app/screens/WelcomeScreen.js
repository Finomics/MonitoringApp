import React from 'react';

import { StyleSheet, View, Image } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {
    return (
        <Screen style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.imageContainer}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton 
                    title='Login' 
                    // onPress={()=> {console.log('Login Button Pressed')}}
                    onPress={()=> navigation.navigate('LoginScreen')}
                    color= 'primary'
                />
            <AppButton 
                title='Register'
                // onPress={()=> {console.log('Register Button Pressed')}}
                onPress={()=> navigation.navigate('RegisterScreen')}
                color= 'secondary'
            />
            </View> 
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.bgColor,
    },
    logoContainer:{
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer:{
      flex: 1,
      width: '100%',
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer:{
      width: 290,
      height: 470,
    },
  });

export default WelcomeScreen;
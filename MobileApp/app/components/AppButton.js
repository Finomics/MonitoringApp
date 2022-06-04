import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}] } onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius: 25,
        justfyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        width: '100%',
    },
    text:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
})

export default AppButton;
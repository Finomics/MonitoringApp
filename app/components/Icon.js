import React from 'react';
import { TouchableOpacity, View } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons' 
import AppText from './AppText';

function Icon({name, size=40, backgroundColor='transparent', iconColor='#fff', onPress, title}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                width: size,
                height: size,
                borderRadius: size/2,
                backgroundColor: backgroundColor,
                justifyContent: 'center',
                alignItems: 'center', 

            }}>
                <MaterialCommunityIcons name={name} color={iconColor} size={size*0.75} />
                {title && <AppText>{title}</AppText>}
            </View>
        </TouchableOpacity>
    );
}

export default Icon;
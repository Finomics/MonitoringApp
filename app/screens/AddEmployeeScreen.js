import React, { useState } from 'react';

import { ScrollView, StyleSheet, View, Image } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../forms';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password"),
    id: Yup.string().required().min(4).label("Employ ID"),
    number: Yup.string().required().min(4).label("Number"),
})


function AddEmployeeScreen(props) {

    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now({hour: '2-digit', minute:'2-digit'})));
    const [openList, setOpenList] = useState(false);
    const [name, setName] = useState(null)

    const [list, setList] = useState([
        {label: 'Hassan', value: 'has'},
        {label: 'Hammad', value: 'ham'},
        {label: 'Anas', value: 'ana'},
    ])
    
    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    }

    function showTimePicker() {
        setTimePicker(true);
    }

    const handleEmployee = (item) => {
        console.log("Whole Object", item)
    }

    const handleSubmit = (values) => {
        console.log(values)
        axios({
            method: "post",
            url: "https://attendancepi.herokuapp.com/Empolyes",
            data: {
                EmpolyeCode: values.id,
                EmpolyeName: values.name,
                EmpolyeNumber: values.number,
                EmpolyePassword: values.password,
            }

        }).then((res) => {
            console.log(res.data, "error");
            alert("Empolyee has been created!")
        }).catch((err) => {
            console.log(err, "error");
        })
    }


    return (
        <Screen style={styles.container}>
            {/* <ScrollView> */}
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
                    initialValues={{ id: '', name: '', number: '', password: '' }}
                    onSubmit={(values) => { handleSubmit(values) }}
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
                        keyboardType='default'
                        name='id'
                        placeholder='Employee ID'
                        secureTextEntry={false}
                        textContentType='password'
                    />
                    <AppFormField
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='phone-plus-outline'
                        keyboardType='numeric'
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
                    {timePicker && (
                        <DateTimePicker
                        value={time}
                        mode={"time"}
                        display={Platform.OS === "ios" ? "spinner" : "default"}
                        is24Hour={false}
                        onChange={onTimeSelected}
                        />
                    )}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{ width: '40%', height: 60,}}>
                            <AppButton
                                title={time.toLocaleTimeString({hour: '2-digit', minute:'2-digit'})}
                                onPress={showTimePicker}
                                color="secondary"
                            />
                        </View>
                        <View style={{ width: '50%'}}>
                            <DropDownPicker
                                open={openList}
                                value={name}
                                items={list}
                                setOpen={setOpenList}
                                setValue={setName}
                                setItems={setList}
                                onSelectItem={item => handleEmployee(item)} 
                                style={styles.dropBox}
                            />
                        </View>
                    </View>
                    <SubmitButton title='Add Employee' />
                </AppForm>
            {/* </ScrollView> */}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: colors.bgColor,
    },
    header: {
        alignItems: 'center',
    },
    logoName: {
        width: '100%',
        height: 110,
        marginBottom: -50,
    },
    dropBox: {
        backgroundColor: colors.light,
        borderRadius: 25,
        paddingLeft: 15,
        marginTop: 5,
        // width: "100%",
        // height: '4%',
    },
})
export default AddEmployeeScreen;
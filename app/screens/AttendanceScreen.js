import React from "react";

import Clock from "react-live-clock";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import Icon from "../components/Icon";
import PresentTime from "../components/PresentTime";

import Screen from "../components/Screen";
import Time from "../components/Time";
import colors from "../config/colors";
import { AppForm, AppFormField, SubmitButton } from "../forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function AttendanceScreen({ route, navigation }) {
  let mapInputLocation = route.params;
  console.log(mapInputLocation, "mapInputLocation");

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logoName.png")}
            style={styles.logoName}
          />
          <Icon
            name="account-tie-outline"
            backgroundColor={colors.bgColor}
            iconColor={colors.secondary}
            size={150}
          />
        </View>
        <Time />

        <PresentTime
          title1="Punch-In"
          title2="Punch-Out"
            mapInputLocation={mapInputLocation}
        />
        <AppButton
          title="View Attendance"
          // onPress={()=> {console.log('Register Button Pressed')}}
          onPress={() => navigation.navigate("AttendanceRecordScreen")}
          color="dark"
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
  },
  logoContainer: {
    width: "100%",
    height: 250,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logoName: {
    width: "100%",
    height: 120,
  },
});
export default AttendanceScreen;

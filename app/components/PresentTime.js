import React, { useState, useEffect } from "react";

import * as Device from "expo-device";

import MapView, { Marker } from "react-native-maps";

import firebase from "../firebase";
import { getDatabase, ref, onValue, set, update } from "firebase/database";

import { StyleSheet, Alert, Dimensions, View, Text } from "react-native";
import moment from "moment";
import * as Location from "expo-location";

import Screen from "./Screen";
import AppButton from "./AppButton";
import colors from "../config/colors";
import axios from "axios";

let mapLocation = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.045,
  longitudeDelta: 0.045,
};

function PresentTime({ title1, title2, mapInputLocation }) {
  if (mapInputLocation === undefined) {
    mapInputLocation = {
      latitude: 24.8620336,
      longitude: 67.0790393,
    };
  }

  console.log("new: " + mapInputLocation.latitude);

  const [currentDate, setCurrentDate] = useState();
  const [currentDay, setCurrentDay] = useState();
  const [location, setLocation] = useState(mapLocation);

  useEffect(() => {
    getTime();
    // console.log(currentDate)
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    if (!result.granted) {
      return;
    } else {
      // const { coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    }
  };

  const getTime = () => {
    const date = moment().utcOffset("+05:00").format("hh:mm A");
    const day = moment().utcOffset("+05:00").format("DD-MM ");
    setCurrentDate(date);
    setCurrentDay(day);
  };

  const handlePunchOut = () => {
    console.log(currentDate);
    getTime();
    // const date = await moment().utcOffset('+05:00').format(' hh:mm:ss A');
    // setCurrentDate(date);
    console.log(currentDate);
    getLocation();
    console.log(typeof location.latitude + "," + typeof location.longitude);
    console.log(Device.deviceName);
    // alert('Punch Time is '+ currentDate);

    Alert.alert(
      "Attendance Record",
      "Punch time is" +
        currentDate +
        " at " +
        location.latitude +
        ", " +
        location.longitude +
        " location from " +
        Device.deviceName +
        " device.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed"), handleFirebase("punchOut");
          },
        },
      ]
    );
  };

  const handlePunchIn = () => {
    console.log(currentDate);
    getTime();
    // const date = await moment().utcOffset('+05:00').format(' hh:mm:ss A');
    // setCurrentDate(date);
    console.log(currentDate);
    getLocation();
    console.log(typeof location.latitude + "," + typeof location.longitude);
    console.log(Device.deviceName);
    // alert('Punch Time is '+ currentDate);

    Alert.alert(
      "Attendance Record",
      "Punch time is" +
        currentDate +
        " at " +
        location.latitude +
        ", " +
        location.longitude +
        " location from " +
        Device.deviceName +
        " device.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed"), handleFirebase("punchIn");
          },
        },
      ]
    );
  };

  const handlePress = () => {
    console.log(currentDate);
    getTime();
    // const date = await moment().utcOffset('+05:00').format(' hh:mm:ss A');
    // setCurrentDate(date);
    console.log(currentDate);
    getLocation();
    console.log(typeof location.latitude + "," + typeof location.longitude);
    console.log(Device.deviceName);
    // alert('Punch Time is '+ currentDate);

    Alert.alert(
      "Attendance Record",
      "Punch time is" +
        currentDate +
        " at " +
        location.latitude +
        ", " +
        location.longitude +
        " location from " +
        Device.deviceName +
        " device.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        //   { text: "OK", onPress: () => {console.log("OK Pressed")} }
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed"), handleFirebase();
          },
        },
      ]
    );
  };

  const addAttendanceInformation = (currentDate, currentDay, value) => {
    const db = getDatabase();
    const reference = ref(db, "34387122/" + currentDay + value);
    set(reference, {
      value: currentDate,
      value: value,
    });
  };

  const handleFirebase = (value) => {
    console.log("values", currentDate, value);
    if (value === "punchOut") {
      axios({
        method: "post",
        url: "https://attendancepi.herokuapp.com/Attendance",
        data: {
          Time: currentDate,
          LocationType: "PunchOut",
          LocationName: "ShahFaisal",
          Latitude: location.latitude,
          Longitude: location.longitude,
        },
      })
        .then((res) => {
          console.log(res.data);
          alert("Punch Out Attendance Has Been Submited");
        })
        .catch((err) => {
          console.log(err, "error");
        });
      //   const db = getDatabase();
      //   const reference = ref(db, "34387122/" + currentDay);
      //   update(reference, {
      //     day: currentDay,
      //     punchOut: currentDate,
      //   });
    } else {
      axios({
        method: "post",
        url: "https://attendancepi.herokuapp.com/Attendance",
        data: {
          Time: currentDate,
          LocationType: "PunchIn",
          LocationName: "ShahFaisal",
          Latitude: location.latitude,
          Longitude: location.longitude,
        },
      })
        .then((res) => {
          console.log(res.data);
          alert("Punch IN Attendance Has Been Submited");
        })
        .catch((err) => {
          console.log(err, "error");
        });

      //   const db = getDatabase();
      //   const reference = ref(db, "34387122/" + currentDay);
      //   update(reference, {
      //     day: currentDay,
      //     punchIn: currentDate,
      //   });
    }
  };

  return (
    <Screen>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <View style={{ width: "40%" }}>
          <AppButton title={title1} onPress={handlePunchIn} />
        </View>
        <View style={{ width: "40%" }}>
          <AppButton title={title2} onPress={handlePunchOut} />
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 24.8620336,
            longitude: 67.0790393,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          showsCompass={true}
        >
          <Marker coordinate={location} pinColor={"green"} />
          <Marker
            coordinate={{
              latitude: mapInputLocation.latitude,
              longitude: mapInputLocation.longitude,
            }}
          />
        </MapView>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  mapContainer: {
    marginTop: 5,
    alignSelf: "center",
    borderWidth: 3,
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: colors.secondary,
  },
  map: {
    width: 300,
    height: 250,
  },
});

export default PresentTime;

import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Alert,
} from "react-native";
// import TimePicker from 'react-native-simple-time-picker';

import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import DropDownBox from "../components/DropDownBox";
import axios from "axios";
// import { Picker } from '@react-native-community/picker'

let mapInputLocation = [
  {
    latitude: 24.8620336,
    longitude: 67.0790393,
  },
];

function InputLocationScreen({ navigation }) {
  // let temp = [24.8620336, 67.0790393]

  let [temp, setTemp] = useState({latitude: 24.8620336, longitude: 67.0790393});

  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);
  const [locationData, setlocationData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Location Name");
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Home", value: {latitude: 24.8620336, longitude: 67.0790393} },
    { label: "Hill Park", value: {latitude: 24.87149, longitude: 67.070936} },
    { label: "Ideal Bakery", value: {latitude: 24.8596269, longitude: 67.0819221} },
    { label: "VIP Flag", value: {latitude: 24.8543405, longitude: 67.0089619} },
  ]);

  useEffect(() => {
    fetchCoordinates();
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://attendancepi.herokuapp.com/Location",
    })
      .then((res) => {
        console.log(res.data, "response");
        setlocationData(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);


  // console.log("outside the func", items);

  // console.log(selectedValue, "lll");

  const fetchCoordinates = () => {
    setValue(temp);
    console.log("inside the func", value);
  };

  const handleValue = () => {
    // console.log(value, "single value");
    // console.log(value, "Drop");
    setTemp(value);
  };

  const handleItem = (item) => {
    console.log("Whole Object", item)
  }

  function showTimePicker() {
    setTimePicker(true);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  const handlePress = () => {
    Alert.alert(
      "Prescribed Requirement",
      "Punch time will be " + time + " at " + temp.latitude + ", " + temp.longitude,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");

            console.log(value[0], "single value");
            console.log(value, "Drop");
            console.log(time, "timePicker");
            axios({
              method: "post",
              url: "https://attendancepi.herokuapp.com/Attendance",
              data: {
                LocationName: "Pakistan",
                LocationType: "Target",
                Latitude: value[0],
                Longitude: value[1],
                Time: time,
              },
            })
              .then((res) => {
                console.log(res.data, "response");
                var temp = res.data;
                navigation.navigate("AttendanceScreen", temp);
              })
              .catch((err) => {
                console.log(err, "error");
              });
          },
        },
        // {
        //   text: "OK",
        //   onPress: () => console.log("OK Pressed", temp)
        // }
      ]
    );
  };

  return (
    <Screen>
      <Image
        source={require("../assets/logoName.png")}
        style={styles.logoName}
      />

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: temp.latitude,
            longitude: temp.longitude,
            latitudeDelta: 1 / 5,
            longitudeDelta: 1 / 5,
          }}
          showsCompass={true}
        >
          <Marker
            coordinate={{ latitude: temp.latitude, longitude: temp.longitude }}
            draggable={true}
            // onDragEnd={(e) => {mapInputLocation=e.nativeEvent.coordinate}}
            onDragEnd={(e) => {
              temp;
            }}
          />
        </MapView>
      </View>
      {/* <ScrollView> */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Time = {time.toLocaleTimeString()}</Text>
      </View>
      {timePicker && (
        <DateTimePicker
          value={time}
          mode={"time"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={false}
          onChange={onTimeSelected}
        />
      )}
      {!timePicker && (
        <View style={{ marginTop: 0 }}>
          <AppButton
            title="Pick a Time"
            onPress={showTimePicker}
            color="secondary"
          />
        </View>
      )}

      <View style={styles.container}>
        {/* <Picker
          selectedValue={selectedValue}
          style={styles.dropBox}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {locationData.map((v, i) => {
            return (
              <Picker.Item key={i} label={v.LocationName} value={v} />
            )
          })}
        </Picker> */}

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={() => {
            handleValue();
          }}
          // onSelectItem={item => console.log('Hello',item)} 
          onSelectItem={item => handleItem(item)} 
          style={styles.dropBox}
        />

        <AppButton title="Confirm" onPress={handlePress} color="primary" />
      </View>
      {/* </ScrollView> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    alignSelf: "stretch",
  },
  logoName: {
    width: "100%",
    height: 120,
    marginBottom: -20,
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  dropBox: {
    backgroundColor: colors.light,
    borderRadius: 25,
    paddingLeft: 15,
    marginTop: 5,
    width: "100%",
  },
  mapContainer: {
    width: "90%",
    height: 350,
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: colors.secondary,
  },
});

export default InputLocationScreen;

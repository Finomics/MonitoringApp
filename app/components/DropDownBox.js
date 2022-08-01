import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'

export default function DropDownBox() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const handlePress=(value)=>{
        console.log('hello', value)
    }

  return (
    <View style={styles.container}>
      <DropDownPicker
          open={open}
          value={value}
          items={[
            {label: 'English', value: 'en'},
            {label: 'Deutsch', value: 'de'},
            {label: 'French', value: 'fr'},
        ]}
          setOpen={setOpen}
          setValue={setValue}
          onChangeValue={item => {handlePress(item)}}
          onSelectItem={item => console.log(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

import {
  Button,
  Flex,
  FormControl,
  NativeBaseProvider,
  ScrollView,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import NavBar from '../navBar/navBar';
export default function ViewCars() {
  const [checkDisplay, setCheckDisplay] = useState(null);
  const styles = StyleSheet.create({
    inputContainers: {
      width: '100%',
      marginTop: '3%',
      marginBottom: '3%',
      elevation: 1,
    },
  });
  const handleDisplayNone = view => {
    setCheckDisplay(view);
  };
  return (
    <NativeBaseProvider>
      <Flex flexDirection={'column'}>
        <NavBar checkDisplay={handleDisplayNone} />
        <ScrollView
          style={{
            position: 'relative',
            top: 50,
            display: checkDisplay,
          }}></ScrollView>
      </Flex>
    </NativeBaseProvider>
  );
}

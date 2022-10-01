import {
  Button,
  Flex,
  FormControl,
  Input,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import NavBar from '../navBar/navBar';
export default function manageCars() {
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
          }}>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Car Reg No</FormControl.Label>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Input placeholder="Enter Car Reg No" w={'80%'}></Input>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Car Brand</FormControl.Label>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Input placeholder="Enter Car Brand" w={'80%'}></Input>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Car Price</FormControl.Label>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Input placeholder="Enter Car Price" w={'80%'}></Input>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Previous Buyer</FormControl.Label>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Input placeholder="Enter Car Previous Buyer" w={'80%'}></Input>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Upload Car Images</FormControl.Label>
            </Flex>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'row'}>
              <Input placeholder="Enter Car Previous Buyer" w={'45%'}></Input>
              <Button
                style={{width: '30%', marginLeft: '5%'}}
                onPress={async e => {
                  const result = await launchImageLibrary({
                    mediaType: 'photo',
                    selectionLimit: 13,
                  });
                  let images = result.assets;
                  images.forEach(e => {
                    let fileName = e.fileName;
                    let uri = e.uri;
                  });
                }}>
                Upload
              </Button>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'row'}>
              <Button
                style={{width: '80%', marginLeft: '5%'}}
                onPress={async e => {
                  // fetch('http://192.168.1.100:3000/user', {method: 'GET'})
                  //   .then(res => {
                  //     console.log(res);
                  //   })
                  //   .catch(res => {
                  //     console.log(res);
                  //   });

                  fetch('http://192.168.1.100:3000/user', {
                    method: 'POST',
                    body: JSON.stringify({id: 'asdasdas'}),
                    headers: {
                      'Content-Type': 'application/json;charset=UTF-8',
                    },
                  })
                    .then(res => {
                      console.log(res);
                    })
                    .catch(res => {
                      console.log(res);
                    });
                }}>
                Save
              </Button>
            </Flex>
          </View>
        </ScrollView>
      </Flex>
    </NativeBaseProvider>
  );
}

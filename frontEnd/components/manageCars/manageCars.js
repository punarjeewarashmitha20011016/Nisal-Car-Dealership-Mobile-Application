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
import {Alert, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import NavBar from '../navBar/navBar';
export default function ManageCars() {
  const [carObj, setCarObj] = useState({
    carRegNo: '',
    brand: '',
    price: '',
    previousBuyer: '',
    carImage: '',
  });
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

  const clearFields = () => {
    setCarObj(prevState => {
      return {
        carRegNo: '',
        brand: '',
        price: '',
        previousBuyer: '',
        carImage: '',
      };
    });
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
              <Input
                placeholder="Enter Car Reg No"
                w={'80%'}
                onChangeText={e => {
                  setCarObj(prevState => {
                    return {
                      ...carObj,
                      carRegNo: e,
                    };
                  });
                }}
                value={carObj.carRegNo}></Input>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Car Brand</FormControl.Label>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Input
                placeholder="Enter Car Brand"
                w={'80%'}
                onChangeText={e => {
                  setCarObj(prevState => {
                    return {
                      ...carObj,
                      brand: e,
                    };
                  });
                }}
                value={carObj.brand}></Input>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Car Price</FormControl.Label>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Input
                placeholder="Enter Car Price"
                w={'80%'}
                onChangeText={e => {
                  setCarObj(prevState => {
                    return {
                      ...carObj,
                      price: e,
                    };
                  });
                }}
                value={carObj.price}></Input>
            </Flex>
          </View>
          <View style={styles.inputContainers}>
            <Flex justifyContent={'flex-start'} style={{marginStart: '10%'}}>
              <FormControl.Label>Previous Buyer</FormControl.Label>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Input
                placeholder="Enter Car Previous Buyer"
                w={'80%'}
                onChangeText={e => {
                  setCarObj(prevState => {
                    return {
                      ...carObj,
                      previousBuyer: e,
                    };
                  });
                }}
                value={carObj.previousBuyer}></Input>
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
              <Input
                isDisabled={true}
                placeholder="Enter Car Image Url"
                w={'45%'}
                value={carObj.carImage}></Input>
              <Button
                style={{width: '30%', marginLeft: '5%'}}
                onPress={async e => {
                  const result = await launchImageLibrary({
                    mediaType: 'photo',
                    selectionLimit: 13,
                  });
                  let images = result.assets;
                  images.forEach(e => {
                    let uri = e.uri;
                    console.log(uri);
                    setCarObj(prevState => {
                      return {
                        ...carObj,
                        carImage: uri,
                      };
                    });
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
                colorScheme={'emerald'}
                style={{width: '23.3%', marginLeft: '5%', marginRight: '5%'}}
                onPress={async e => {
                  carObj.carRegNo != ''
                    ? fetch('http://192.168.1.100:3000/car', {
                        method: 'POST',
                        body: JSON.stringify(carObj),
                        headers: {
                          'Content-Type': 'application/json;charset=UTF-8',
                        },
                      })
                        .then(res => {
                          clearFields();
                          console.log(res);
                          Alert.alert('Car Saved Successfully');
                        })
                        .catch(res => {
                          clearFields();
                          console.log(res);
                          Alert.alert('Car Saving is Unsuccessful');
                        })
                    : Alert.alert('Please Fill Relevant Fields');
                }}>
                Save
              </Button>

              <Button
                colorScheme={'info'}
                style={{width: '23.3%', marginLeft: '5%', marginRight: '5%'}}
                onPress={async e => {
                  carObj.carRegNo != ''
                    ? fetch('http://192.168.1.100:3000/car', {
                        method: 'POST',
                        body: JSON.stringify(carObj),
                        headers: {
                          'Content-Type': 'application/json;charset=UTF-8',
                        },
                      })
                        .then(res => {
                          clearFields();
                          console.log(res);
                          Alert.alert('Car Saved Successfully');
                        })
                        .catch(res => {
                          clearFields();
                          console.log(res);
                          Alert.alert('Car Saving is Unsuccessful');
                        })
                    : Alert.alert('Please Fill Relevant Fields');
                }}>
                Update
              </Button>

              <Button
                colorScheme={'error'}
                style={{width: '23.3%', marginLeft: '5%', marginRight: '5%'}}
                onPress={async e => {
                  carObj.carRegNo != ''
                    ? fetch('http://192.168.1.100:3000/car', {
                        method: 'POST',
                        body: JSON.stringify(carObj),
                        headers: {
                          'Content-Type': 'application/json;charset=UTF-8',
                        },
                      })
                        .then(res => {
                          clearFields();
                          console.log(res);
                          Alert.alert('Car Saved Successfully');
                        })
                        .catch(res => {
                          console.log(res);
                          clearFields();
                          Alert.alert('Car Saving is Unsuccessful');
                        })
                    : Alert.alert('Please Fill Relevant Fields');
                }}>
                Delete
              </Button>
            </Flex>
          </View>
        </ScrollView>
      </Flex>
    </NativeBaseProvider>
  );
}

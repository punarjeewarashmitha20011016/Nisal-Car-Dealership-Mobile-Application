import {
  Avatar,
  Box,
  Button,
  FlatList,
  Flex,
  FormControl,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  PixelRatio,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
  const [dataList, setDataList] = useState([]);
  const [resizableBlock, setResiazbleBlock] = useState(40);

  useEffect(() => {
    dataList.splice(0, dataList.length);
    const loadData = async () => {
      let res = await fetch('http://192.168.1.101:3000/car', {method: 'GET'})
        .then(async res => {
          console.log('aaa');
          let arr = await res.json();
          console.log(arr);
          setDataList(arr);
        })
        .catch(async res => {});
    };
    loadData();
  }, []);

  return (
    <NativeBaseProvider>
      <Flex flexDirection={'column'}>
        <NavBar checkDisplay={handleDisplayNone} />
        <FlatList
          style={{position: 'relative', top: 80, display: checkDisplay}}
          data={dataList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#1abc9c',
                position: 'relative',
                borderWidth: 1,
                marginBottom: '5%',
                padding: 5,
                height: PixelRatio.getPixelSizeForLayoutSize(resizableBlock),
              }}
              onLongPress={() => {
                setResiazbleBlock(40);
              }}
              onPress={() => {
                setResiazbleBlock(60);
              }}>
              <Flex
                flexDirection={'row'}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                <Flex
                  flexDirection={'row'}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderWidth: 1,
                    borderColor: 'black',
                  }}>
                  <Flex
                    style={{
                      position: 'relative',
                      width: '50%',
                      height: '100%',
                      borderWidth: 1,
                      borderColor: 'black',
                    }}>
                    <Image
                      resizeMode="stretch"
                      source={{uri: item.carImage}}
                      style={{width: '100%', height: '100%'}}></Image>
                  </Flex>
                  <Flex
                    flexDirection={'column'}
                    style={{
                      width: '50%',
                      height: '100%',
                      borderWidth: 1,
                      borderColor: 'black',
                    }}>
                    <Flex
                      alignItems={'center'}
                      justifyContent={'center'}
                      style={{
                        width: '100%',
                        height: '30%',
                        borderWidth: 1,
                        borderColor: 'white',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'2xl'}
                        style={{marginBottom: 10}}>
                        {item.brand}
                      </Text>
                    </Flex>
                    <Flex
                      alignItems={'center'}
                      justifyContent={'center'}
                      style={{
                        width: '100%',
                        height: '30%',
                        borderWidth: 1,
                        borderColor: 'white',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'2xl'}
                        style={{marginBottom: 10}}>
                        {item.brand}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </TouchableOpacity>
          )}
        />
      </Flex>
    </NativeBaseProvider>
  );
}

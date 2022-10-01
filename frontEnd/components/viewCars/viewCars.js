import {useNavigation} from '@react-navigation/native';
import {Button, FlatList, Flex, NativeBaseProvider, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image, PixelRatio, TouchableOpacity} from 'react-native';
import {carRegNoStore} from '../../store';
import NavBar from '../navBar/navBar';
export default function ViewCars() {
  const [checkDisplay, setCheckDisplay] = useState(null);
  const handleDisplayNone = view => {
    setCheckDisplay(view);
  };
  const [dataList, setDataList] = useState([]);
  const [resizableBlock, setResizableBlock] = useState(40);
  const [displayForResizing, setDisplayForResizing] = useState('none');
  const navigation = useNavigation();
  useEffect(() => {
    dataList.splice(0, dataList.length);
    const loadData = async () => {
      let res = await fetch('http://192.168.1.101:3000/car', {method: 'GET'})
        .then(async res => {
          let arr = await res.json();
          console.log(arr);
          setDataList(arr);
        })
        .catch(async res => {});
    };
    loadData();
  }, []);
  const [checkSelectedCarReg, setCheckSelectedCarReg] = useState(null);
  return (
    <NativeBaseProvider>
      <Flex
        flexDirection={'column'}
        style={{
          backgroundColor: '#f7f1e3',
          height: '100%',
        }}>
        <NavBar checkDisplay={handleDisplayNone} />
        <FlatList
          style={{
            position: 'absolute',
            top: 80,
            display: checkDisplay,
          }}
          data={dataList}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.carRegNo}
              style={{
                backgroundColor: '#1abc9c',
                position: 'relative',
                borderWidth: 1,
                marginBottom: '5%',
                padding: 5,
                height:
                  item.carRegNo === checkSelectedCarReg
                    ? PixelRatio.getPixelSizeForLayoutSize(resizableBlock)
                    : PixelRatio.getPixelSizeForLayoutSize(40),
                display: 'flex',
                flexDirection: 'column',
              }}
              onLongPress={() => {
                setResizableBlock(40);
                setDisplayForResizing('none');
              }}
              onPress={() => {
                setCheckSelectedCarReg(item.carRegNo);
                console.log(item.carRegNo);
                setResizableBlock(60);
                setDisplayForResizing('flex');
              }}>
              <Flex
                flexDirection={'row'}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: PixelRatio.getPixelSizeForLayoutSize(36),
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
                      style={{
                        width: '100%',
                        height: '30%',
                        borderWidth: 1,
                        borderColor: 'white',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'md'}
                        style={{marginBottom: 10, marginLeft: '10%'}}>
                        Brand : {item.brand}
                      </Text>
                    </Flex>
                    <Flex
                      style={{
                        width: '100%',
                        height: '30%',
                        borderWidth: 1,
                        borderColor: 'white',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'md'}
                        style={{marginBottom: 10, marginLeft: '10%'}}>
                        Reg No : {item.carRegNo}
                      </Text>
                    </Flex>
                    <Flex
                      style={{
                        width: '100%',
                        height: '40%',
                        borderWidth: 1,
                        borderColor: 'white',
                        justifyContent: 'center',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'md'}
                        style={{marginBottom: 10, marginLeft: '10%'}}>
                        Price : {item.price}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                flexDirection={'row'}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: PixelRatio.getPixelSizeForLayoutSize(20),
                  display:
                    item.carRegNo === checkSelectedCarReg
                      ? displayForResizing
                      : 'none',
                }}>
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderWidth: 1,
                    borderColor: 'black',
                  }}>
                  <Button
                    fontSize={'sm'}
                    style={{height: '80%'}}
                    variant={'subtle'}
                    onPress={e => {
                      carRegNoStore.carRegNo = item.carRegNo;
                      navigation.navigate('ManageCars');
                    }}>
                    Manage Details
                  </Button>
                </Flex>
              </Flex>
            </TouchableOpacity>
          )}
        />
      </Flex>
    </NativeBaseProvider>
  );
}

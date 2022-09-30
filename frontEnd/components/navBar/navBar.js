import {Button, Flex, NativeBaseProvider, Text, View} from 'native-base';
import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default function navBar(props) {
  const [view, setView] = useState(null);
  return (
    <NativeBaseProvider>
      <View
        shadow={2}
        style={{
          width: '100%',
          height: 50,
          position: 'relative',
          backgroundColor: '#1abc9c',
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Flex
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
          style={{
            marginLeft: '10%',
            width: '100%',
            height: '100%',
          }}>
          <TouchableOpacity
            onPress={e => {
              view == null
                ? setView(
                    <View
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: 610,
                        backgroundColor: '#1abc9c',
                      }}>
                      <Flex
                        alignItems={'center'}
                        justifyContent={'center'}
                        shadow={2}
                        style={{
                          marginTop: '15%',
                          borderColor: 'black',
                          width: '100%',
                          height: '10%',
                        }}>
                        <Text color={'white'} style={{fontSize: 20}}>
                          ManageCars
                        </Text>
                      </Flex>
                      <Flex
                        shadow={2}
                        alignItems={'center'}
                        justifyContent={'center'}
                        style={{
                          marginTop: '5%',
                          borderColor: 'black',
                          width: '100%',
                          height: '10%',
                        }}>
                        <Text color={'white'} style={{fontSize: 20}}>
                          View Cars
                        </Text>
                      </Flex>
                    </View>,
                  ) & props.checkDisplay('none')
                : setView(null) & props.checkDisplay('flex');
            }}
            style={{height: '55%', width: '10%'}}>
            <Image
              source={require('../../assets/icons8-menu-50.png')}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
        </Flex>
      </View>
      {view != null && view}
    </NativeBaseProvider>
  );
}

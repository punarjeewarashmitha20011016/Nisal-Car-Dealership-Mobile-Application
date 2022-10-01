import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Alert,
} from 'react-native';

export default function Login() {
  const navigation = useNavigation();
  const [loginObj, setLoginObj] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/image1.png')}
            style={styles.bgImage}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              position: 'relative',
              width: '100%',
              height: 60,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Welcome !
            </Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email address"
              onChangeText={e => {
                setLoginObj(prevState => {
                  return {
                    ...loginObj,
                    email: e,
                  };
                });
              }}
              value={loginObj.email}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={e => {
                setLoginObj(prevState => {
                  return {
                    ...loginObj,
                    password: e,
                  };
                });
              }}
              value={loginObj.password}
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={async () => {
                // if ((loginObj.email === '') | (loginObj.password === '')) {
                //   Alert.alert('User Login is Unsuccessful');
                // } else {
                //   let res = await fetch(
                //     'http://192.168.1.101:3000/user/loginCheck?email=' +
                //       loginObj.email +
                //       '&password=' +
                //       loginObj.password,
                //     {
                //       method: 'GET',
                //     },
                //   )
                //     .then(async res => {
                //       let bool = await res.json();
                //       console.log(bool);
                //       if (bool === true) {
                //         console.log(bool);
                //         setLoginObj(prevState => {
                //           return {
                //             email: '',
                //             password: '',
                //           };
                //         });
                //         navigation.navigate('ManageCars');
                //       }
                //     })
                //     .catch(async res => {
                //       Alert.alert('User Login is Unsuccessful');
                //     });
                // }
                navigation.navigate('ViewCars');
              }}>
              <Text style={{textAlign: 'center', fontSize: 18, color: '#000'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <View
              style={{
                height: 1,
                backgroundColor: '#ddd',
                width: '100%',
              }}></View>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserAccount');
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1abc9c',
                }}>
                Need an account ? Register here !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
  },
  bgImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    bottom: 30,
  },
  formInput: {
    position: 'relative',
    marginTop: 10,
    padding: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#AEBDCA',
  },
  loginBtn: {
    padding: 15,
    backgroundColor: '#1abc9c',
    borderRadius: 30,
  },
});

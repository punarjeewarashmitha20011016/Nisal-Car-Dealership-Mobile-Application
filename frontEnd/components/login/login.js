import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/image1.png')}
            style={styles.bgImage}
          />
        </View>
        <View style={{padding: 10}}>
          <View style={styles.formInput}>
            <Text
              style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
              Welcome !
            </Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email address"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity>
              <Text
                style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                navigation.navigate('ManageCars');
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
                  color: '#FFCB42',
                  top: 20,
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
  },
  bgImage: {
    width: '100%',
    height: 250,
    bottom: 30,
  },
  formInput: {
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
    backgroundColor: '#FFCB42',
    borderRadius: 30,
  },
});

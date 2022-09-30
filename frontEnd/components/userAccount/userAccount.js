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

import {Button} from 'native-base';

export default function userAccount() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 10}}>
          <View style={styles.formInput}>
            <TextInput style={styles.textInput} placeholder="Enter your Id" />
          </View>
          <View style={styles.formInput}>
            <TextInput style={styles.textInput} placeholder="Enter your Name" />
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
            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => {
                //navigation.navigate('HomePage');
              }}>
              <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
                Save
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.updateBtn}
              onPress={() => {
                //navigation.navigate('HomePage');
              }}>
              <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
                Update
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.deleteBtn}
              c
              onPress={() => {
                //navigation.navigate('HomePage');
              }}>
              <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
                Delete
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
  saveBtn: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#75EEA6',
  },
  updateBtn: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#A9BBB1',
  },
  deleteBtn: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});

import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

export default function UserAccount() {
  const navigation = useNavigation();

  const [userObj, setUserObj] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
  });

  const saveUser = async () => {
    await fetch('http://192.168.1.101:3000/user', {
      method: 'POST',
      body: JSON.stringify(userObj),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
      .then(async res => {
        Alert.alert('User Saved Successfully');
      })
      .catch(async res => {
        Alert.alert('User Saving is Unsuccessful');
      });
  };
  const updateUser = async () => {
    await fetch('http://192.168.1.101:3000/user?id=' + userObj.id, {
      method: 'PUT',
      body: JSON.stringify(userObj),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
      .then(async res => {
        Alert.alert('User Updated Successfully');
      })
      .catch(async res => {
        Alert.alert('User Updating is Unsuccessful');
      });
  };
  const deleteUser = async () => {
    await fetch('http://192.168.1.101:3000/user?id=' + userObj.id, {
      method: 'DELETE',
    })
      .then(async res => {
        Alert.alert('User Deleted Successfully');
      })
      .catch(async res => {
        Alert.alert('User Deleting is Unsuccessful');
      });
  };
  useEffect(() => {
    const loadData = async () => {
      let res = await fetch('http://192.168.1.101:3000/user/generateId', {
        method: 'GET',
      })
        .then(async res => {
          let userId = await res.json();
          console.log(userId);
          setUserObj(prevState => {
            return {
              ...userObj,
              id: userId,
            };
          });
        })
        .catch(async res => {});
    };
    loadData();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 10}}>
          <View style={styles.formInput}>
            <TextInput
              editable={false}
              style={styles.textInput}
              placeholder="Enter your Id"
              onChangeText={e => {
                setUserObj(prevState => {
                  return {
                    ...userObj,
                    id: e,
                  };
                });
              }}
              value={userObj.id}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your Name"
              onChangeText={e => {
                setUserObj(prevState => {
                  return {
                    ...userObj,
                    name: e,
                  };
                });
              }}
              value={userObj.name}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email address"
              onChangeText={e => {
                setUserObj(prevState => {
                  return {
                    ...userObj,
                    email: e,
                  };
                });
              }}
              value={userObj.email}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={e => {
                setUserObj(prevState => {
                  return {
                    ...userObj,
                    password: e,
                  };
                });
              }}
              value={userObj.password}
            />
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.saveBtn}
              onPress={async () => {
                let res = await saveUser();
              }}>
              <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
                Save
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.updateBtn}
              onPress={async e => {
                let res = await updateUser();
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
              onPress={async () => {
                let res = await deleteUser();
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

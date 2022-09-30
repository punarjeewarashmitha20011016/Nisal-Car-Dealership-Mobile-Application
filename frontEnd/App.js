import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/login';
import UserAccount from './screens/userAccount';
import ManageCars from './screens/manageCars';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UserAccount"
          component={UserAccount}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ManageCars"
          component={ManageCars}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

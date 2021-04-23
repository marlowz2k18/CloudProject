import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports';
import HomeScreen from './Screen/HomeScreen';
import DrawbarNavigationScreen from './Screen/DrawbarNavigationScreen';
//import ChartScreen from './Screen/ChartScreen';

Amplify.configure(awsconfig)

const App: () => React$Node =() => {
  const Stack = createStackNavigator();
  return (
    
      <NavigationContainer>
          <Stack.Navigator initialRouteName="SmartHome">
            <Stack.Screen name="DrawerNavigationScreen"
              component={DrawbarNavigationScreen}
              options={{headerShown: false}}
              />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default withAuthenticator (App);

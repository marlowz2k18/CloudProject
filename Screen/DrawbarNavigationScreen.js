import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, createDrawerStack} from '@react-navigation/drawer';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';
//import ChartScreen from './ChartScreen';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation}/>
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        frontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
};
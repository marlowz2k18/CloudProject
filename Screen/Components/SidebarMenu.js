import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import { Auth } from 'aws-amplify';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  const SidebarMenu = (props) => {
      const signOut = async () => {
          try {
              await Auth.signOut({global: true});
          } catch(error) {
              console.log('error signing out:' , error);
          }
      }
      return (
        <View style={stylesSidebar.sideMenuContainer}>
          <View style={stylesSidebar.profileHeader}>
            <Text style={stylesSidebar.profileHeaderText}>
              Smart Home
            </Text>
          </View>
          <View style={stylesSidebar.profileHeaderLine} />
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label={({color}) => 
                <Text style={{color: '#d8d8d8'}}>
                  Logout
                </Text>
              }
              onPress={() => {
                props.navigation.toggleDrawer();
                Alert.alert(
                  'Logout',
                  'Do you want to exit?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {
                        return null;
                      },
                    },
                    {
                      text: 'Confirm',
                      onPress: () => {
                        signOut()
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }}
            />
          </DrawerContentScrollView>
        </View>
      );
  }

  export default SidebarMenu;

  const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#307ecc',
      paddingTop: 40,
      color: 'white',
    },
    profileHeader: {
      flexDirection: 'row',
      backgroundColor: '#307ecc',
      padding: 15,
      textAlign: 'center',
    },
   
    profileHeaderText: {
      color: 'white',
      alignSelf: 'center',
      paddingHorizontal: 10,
      fontWeight: 'bold',
    },
    profileHeaderLine: {
      height: 1,
      marginHorizontal: 20,
      backgroundColor: '#e2e2e2',
      marginTop: 15,
    },
  });
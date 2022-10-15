import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WaitingForUpgrade} from '../screens/WaitingForUpgrade';
import CustomDrawer from '../screens/drawer';
import MyProfileScreen from '../screens/Profile/Information';
import {HomeScreen} from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const OptionsDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={MyProfileScreen} />
      <Drawer.Screen name="Orders" component={WaitingForUpgrade} />
      <Drawer.Screen name="Offer and promo" component={WaitingForUpgrade} />
      <Drawer.Screen name="Privacy policy" component={WaitingForUpgrade} />
      <Drawer.Screen name="Security" component={WaitingForUpgrade} />
    </Drawer.Navigator>
  );
};

export default OptionsDrawer;

const styles = StyleSheet.create({});

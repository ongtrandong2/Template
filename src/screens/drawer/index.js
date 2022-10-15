import {SafeAreaView, Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  IMG_offerAndPromo,
  IMG_ordersIcon,
  IMG_Personal,
  IMG_privacyIcon,
  IMG_profileIcon,
  IMG_securityIcon,
} from '../../assets/images';

const CustomDrawerItem = props => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => props.navigation.navigate(props.component)}>
      <Image source={props.icon} />
      <Text style={styles.itemText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={IMG_Personal} />
      </View>
      <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
        <CustomDrawerItem
          style={styles.itemContainer}
          label={'Profile'}
          icon={IMG_profileIcon}
          navigation={props.navigation}
          component={'MyProfileScreen'}
        />
        <CustomDrawerItem
          style={styles.itemContainer}
          label={'Orders'}
          icon={IMG_ordersIcon}
          navigation={props.navigation}
          component={'MyProfileScreen'}
        />
        <CustomDrawerItem
          style={styles.itemContainer}
          label={'Offer and promo'}
          icon={IMG_offerAndPromo}
          navigation={props.navigation}
          component={'MyProfileScreen'}
        />
        <CustomDrawerItem
          style={styles.itemContainer}
          label={'Privacy policy'}
          icon={IMG_privacyIcon}
          navigation={props.navigation}
          component={'MyProfileScreen'}
        />
        <CustomDrawerItem
          style={[styles.itemContainer, {borderBottomWidth: 0}]}
          label={'Security'}
          icon={IMG_securityIcon}
          navigation={props.navigation}
          component={'MyProfileScreen'}
        />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.signOutContainer}
        onPress={() => props.navigation.navigate('LoginScreen')}>
        <Text style={styles.signOutText}>{'Sign-out'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;

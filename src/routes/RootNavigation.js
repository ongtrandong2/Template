import React from 'react';
import {Onboarding} from '../screens/onboarding';
import {LoginScreen} from '../screens/login';
import {WaitingForUpgrade} from '../screens/WaitingForUpgrade';
import {HomeScreen} from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetailScreen';
import CartScreen from '../screens/Cart';
import PaymentScreen from '../screens/Checkout/PaymentScreen';
import OrdersScreen from '../screens/OrdersScreen';
import NoInternetScreen from '../screens/noInternet';
import MyProfileScreen from '../screens/Profile/Information';
import HistoryScreen from '../screens/History';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeliveryScreen from '../screens/Checkout/DeliveryScreen';
import Payment from '../screens/Profile/PaymentMethod';
import OptionsDrawer from './OptionsDrawer';
import SearchScreen from '../screens/Search';

const stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Onboarding">
        {props => <Onboarding {...props} />}
      </stack.Screen>
      <stack.Screen name="LoginScreen">
        {props => <LoginScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="WaitingForUpgrade">
        {props => <WaitingForUpgrade {...props} />}
      </stack.Screen>
      <stack.Screen name="HomeScreen">
        {props => <HomeScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="ProductDetail">
        {props => <ProductDetail {...props} />}
      </stack.Screen>
      <stack.Screen name="CartScreen">
        {props => <CartScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="DeliveryScreen">
        {props => <DeliveryScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="PaymentScreen">
        {props => <PaymentScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="OptionsDrawer" component={OptionsDrawer} />
      <stack.Screen name="OrdersScreen">
        {props => <OrdersScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="NoInternetScreen">
        {props => <NoInternetScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="MyProfileScreen">
        {props => <MyProfileScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="Payment">
        {props => <Payment {...props} />}
      </stack.Screen>
      <stack.Screen name="HistoryScreen">
        {props => <HistoryScreen {...props} />}
      </stack.Screen>
      <stack.Screen name="SearchScreen">
        {props => <SearchScreen {...props} />}
      </stack.Screen>
    </stack.Navigator>
  );
};

export default RootNavigation;

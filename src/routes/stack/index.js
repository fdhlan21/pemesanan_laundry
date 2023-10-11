// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../pages/splash';
import LoginScreen from '../../pages/login';
import SignupScreen from '../../pages/signup';
import LoginPageScreen from '../../pages/loginpage';
import HomeScreen from '../../pages/home';
import InformasiLaundry from '../../pages/infomrasilaundry';
import AmbilTanpaRibet from '../../pages/ambiltanparibet';
import AmbilTanpaRibet2 from '../../pages/ambiltanparibet/index2';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown:false}}/>
        <Stack.Screen name="loginPageScreen" component={LoginPageScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="InformasiLaudnryScreen" component={InformasiLaundry} options={{headerShown:false}}/>
        <Stack.Screen name="AmbilTanpaRibet" component={AmbilTanpaRibet} options={{headerShown:false}}/>
        <Stack.Screen name="AmbilTanpaRibet2" component={AmbilTanpaRibet2} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default MyStack;
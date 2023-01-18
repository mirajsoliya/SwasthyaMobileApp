import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import HomePage from '../Screen/HomePage';
import Sidebar from './Sidebar';
import About from '../Sidebarpages/About';
import Profile from '../Sidebarpages/Profile';
import Service from '../Sidebarpages/Service';
import Support from '../Sidebarpages/Support';


const Drawer = createDrawerNavigator();

const MainScreen = ({ navigation, user }) => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'yellow',
          elevation: 0,
          shadowOpacity: 0,
          borderWidth: 1
        },

        drawerContent: {

        },
        headerTitle: '',

      }}

      drawerContent={props => <Sidebar {...props} />}>

      <Drawer.Screen
        name='Homepage'>
        {props => <HomePage />}
      </Drawer.Screen>

      <Drawer.Screen
        name='Profile'>
        {props => <Profile />}
      </Drawer.Screen>

      <Drawer.Screen
        name='Service'>
        {props => <Service />}
      </Drawer.Screen>

      <Drawer.Screen
        name='About'>
        {props => <About />}
      </Drawer.Screen>

      <Drawer.Screen
        name='Support'>
        {props => <Support />}
      </Drawer.Screen>

    </Drawer.Navigator>
  )
}

export default MainScreen
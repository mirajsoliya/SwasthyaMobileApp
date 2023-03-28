import { View, Text, useWindowDimensions, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import HomePage from '../Bottom/HomePage';
import Sidebar from './Sidebar';
import About from '../Sidebarpages/About';
import Profile from '../Sidebarpages/Profile';
import Service from '../Sidebarpages/Service';
import Support from '../Sidebarpages/Support';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Welcome = (props) => {
  const navigation = useNavigation();
  const [username, setUserName] = useState("");

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('user');
      if (name) {
        // console.log(JSON.parse(name).fname);
        setUserName(JSON.parse(name).fname);
        // seturl(JSON.parse(name).url)
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, [props.avatarUrl])


  return (
    <>
      <View className="flex flex-row items-center ml-6 space-x-2">
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={{ uri: props.avatarUrl }} className="h-12 w-12 rounded-full" />
        </TouchableOpacity>
        <View className="flex">
          <Text className="font-medium text-xs">Welcome back</Text>
          <Text className="font-medium text-2xl">{username}</Text>
        </View>
      </View>
    </>
  )
}

const MainScreen = (props) => {

  const [avatarUrl, setAvatarUrl] = useState("");


  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const getData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAvatarUrl(JSON.parse(user).url);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          height: 120,
          elevation: 0,
          shadowOpacity: 0,
        },
        drawerPosition: "right",
        headerTitle: "",


        headerRight: () => (

          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>

            <Image source={require("../../Icons/menu.png")} className="mr-6 w-8 h-8" />

          </TouchableOpacity>

        ),
        headerLeft: () => (
          <Welcome avatarUrl={avatarUrl} />
        )

      }}

      drawerContent={props => <Sidebar {...props} />}>

      <Drawer.Screen name='Homepage'>{props => <HomePage />}</Drawer.Screen>
      <Drawer.Screen name='Profile'>{props => <Profile />}</Drawer.Screen>
      <Drawer.Screen name='Service'>{props => <Service />}</Drawer.Screen>
      <Drawer.Screen name='About'>{props => <About />}</Drawer.Screen>
      <Drawer.Screen name='Support'>{props => <Support />}
      </Drawer.Screen>

    </Drawer.Navigator>
  )
}

export default MainScreen;
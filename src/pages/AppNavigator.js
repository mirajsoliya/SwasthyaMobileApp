import React, { useState, useEffect, useRef } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { BackHandler } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loginpage from './Loginpage';
import Introslider from './Introslider';

import MainScreen from '../Screens/MainScreen';
import Home from '../Screen/Home';
import BookAppoinment from '../Screen/BookAppoinment';
import Prescription from '../Screen/Prescription';
const AppNavigator = ({ }) => {

    const Stack = createNativeStackNavigator();
    const [user, setUser] = useState({})
    const navigationRef = useRef(null);
    const MyTheam = {
        dark: false,
        colors: {
            background: 'white',
        }
    }

    useEffect(() => {
        const backAction = () => {
            if (navigationRef.current?.getCurrentRoute().name === "Login") {
                BackHandler.exitApp();
                return true;
            }
            else if (navigationRef.current?.getCurrentRoute().name === "Home") {
                BackHandler.exitApp();
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [navigationRef]);



    return (
        <NavigationContainer theme={MyTheam} ref={navigationRef}>

            <Stack.Navigator initialRouteName='Intro'
                screenOptions={{
                    headerShown: false,
                }}>

                <Stack.Screen name='Intro' component={Introslider} />


                <Stack.Screen name='Login' >
                    {props => <Loginpage />}
                </Stack.Screen>

                <Stack.Screen name='Home' >
                    {props => <Home />}
                </Stack.Screen>

                <Stack.Screen name='MainScreen'>
                    {props => <MainScreen />}
                </Stack.Screen>

                <Stack.Screen name='BookAppoinment'>
                    {props => <BookAppoinment />}
                </Stack.Screen>
                <Stack.Screen name='Prescription'>
                    {props => <Prescription />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;

const styles = StyleSheet.create({

});

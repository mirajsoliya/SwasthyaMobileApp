import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loginpage from './Loginpage';
import Introslider from './Introslider';

import MainScreen from '../Screens/MainScreen';
import Home from '../Screen/Home';
import BookAppoinment from '../Screen/BookAppoinment';
import Prescription from '../Screen/Prescription';

const AppNavigator = ({ }) => {

    const MyTheam = {
        dark: false,
        colors: {
            background: 'white',
        }
    }

    const Stack = createNativeStackNavigator();
    const [user, setUser] = useState({})

    return (
        <NavigationContainer theme={MyTheam}>

            <Stack.Navigator initialRouteName='Intro'
                screenOptions={{
                    headerShown: false,
                }}>

                <Stack.Screen name='Intro' component={Introslider} />


                <Stack.Screen name='Login'>
                    {props => <Loginpage />}
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

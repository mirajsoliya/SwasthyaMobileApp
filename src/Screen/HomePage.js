import { NavigationContainer, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Bottom/Home";
import BookAppoinment from "./BookAppoinment";
import Prescription from "./Prescription";
import Notification from "./Notification";
import { View, StyleSheet, Text, Touchable } from "react-native";
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const HomePage = () => {
    const navigation = useNavigation();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ tabBarStyle: { display: "none" } }}
                />
                <Tab.Screen
                    name="BookAppoinment"
                    component={BookAppoinment}
                    options={{ tabBarStyle: { display: "none" } }}
                />
                <Tab.Screen
                    name="Prescription"
                    component={Prescription}
                    options={{ tabBarStyle: { display: "none" } }}
                />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{ tabBarStyle: { display: "none" } }}
                />
            </Tab.Navigator>

            <View className="bg-gray-200 flex flex-row justify-between py-3 px-10 rounded-t-3xl bottom-0 w-full h-16">

                <View className="items-center justify-center">
                    <TouchableOpacity className="items-center" onPress={() => { navigation.navigate("Home") }}>
                        <FontAwesome name="home" size={20} color={"#6561D2"} />
                        {/* <Text className="text-[#6561D2]  text-xs mt-2 ">Home</Text> */}
                    </TouchableOpacity>
                </View>
                <View className="items-center  justify-center">
                    <TouchableOpacity className="items-center" onPress={() => { navigation.navigate("BookAppoinment") }}>
                        <AntDesign name="calendar" size={20} color={"#6561D2"} />
                        {/* <Text className="text-[#6561D2] text-xs mt-2 ">Appoinment</Text> */}
                    </TouchableOpacity>
                </View>
                <View className="items-center  justify-center">
                    <TouchableOpacity className="items-center" onPress={() => { navigation.navigate("Prescription") }}>
                        <Fontisto name="prescription" size={20} color={"#6561D2"} />
                        {/* <Text className="text-[#6561D2] text-xs mt-2">Prescription</Text> */}
                    </TouchableOpacity>
                </View>
                <View className="items-center  justify-center">
                    <TouchableOpacity className="items-center" onPress={() => { navigation.navigate("Notification") }}>
                        <AntDesign name="notification" size={20} color={"#6561D2"} />
                        {/* <Text className="text-[#6561D2] text-xs mt-2">Notification</Text> */}
                    </TouchableOpacity>
                </View>

            </View>

        </>
        // <Tab.Navigator

        //     activeColor="#808080"
        //     barStyle={{
        //         // backgroundColor: '#808080',

        //     }}
        //     headerShown={false}
        //     gestureHandler={true}
        //     shifting={true}
        //     tabBarColor='red'
        //     screenOptions={({ route }) => ({
        //         headerShown: false,
        //         tabBarIcon: ({ color, sized, focused }) => {
        //             let iconname;
        //             if (route.name == 'Home') {
        //                 iconname = focused ? 'home' : 'home-outline';
        //             }
        //             else if (route.name == 'Appoinment') {
        //                 iconname = focused ? 'calendar-month' : 'calendar-month-outline';
        //             }
        //             else if (route.name == 'Prescription') {
        //                 iconname = focused ? 'book-edit' : 'book-edit-outline';
        //             }
        //             else if (route.name == 'Notification') {
        //                 iconname = focused ? 'alarm-light' : 'alarm-light-outline';
        //             }
        //             return <Icon name={iconname} size={25} color='#68a0cf' />;
        //         },



        //     })}

        //     tabBarOptions={{
        //         style: { backgroundColor: "#000000", },
        //     }}

        // >
        //     <Tab.Screen name="Home" >
        //         {props => <Home />}
        //     </Tab.Screen>
        //     <Tab.Screen name="Appoinment" >
        //         {props => <BookAppoinment />}
        //     </Tab.Screen>
        //     <Tab.Screen name="Prescription" >
        //         {props => <Prescription />}
        //     </Tab.Screen>
        //     <Tab.Screen name="Notification" >
        //         {props => <Notification />}
        //     </Tab.Screen>
        // </Tab.Navigator>

    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2E39',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3,
        paddingHorizontal: 10,
        width: '100%',
    },


});


export default HomePage;
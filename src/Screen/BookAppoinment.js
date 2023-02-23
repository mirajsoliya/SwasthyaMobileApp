import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Image, Pressable, ScrollView, Button, TouchableHighlight } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from "@expo/vector-icons";
import Carousel from "./Carousel";
import { dummydata } from "./Data";

const BookAppoinment = ({ user, navigation }) => {
    const dayArr = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thr",
        "Fri",
        "Sat",
    ];
    const dateobj = {
        day: dayArr[new Date().getDay()],
        date: new Date().toLocaleDateString()
    }
    const date = [{
        day: dayArr[new Date(Date.now() + (86400000 * 0)).getDay()],
        date: new Date().toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000 * 1)).getDay()],
        date: new Date(Date.now() + (86400000 * 1)).toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000 * 2)).getDay()],
        date: new Date(Date.now() + (86400000 * 2)).toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000 * 3)).getDay()],
        date: new Date(Date.now() + (86400000 * 3)).toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000 * 4)).getDay()],
        date: new Date(Date.now() + (86400000 * 4)).toLocaleDateString()
    }]

    const time = [
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
        "19:00 - 20:00",
        "20:00 - 20:30",
    ]

    const postData = () => {
        console.log("clicked");
    }

    const [date1, setDate] = useState("");
    const [time1, setTime] = useState("");

    return (
        <SafeAreaView>
            <ScrollView>
                <View className="m-4 mt-2">
                    <Carousel data={dummydata} />

                    <View className="my-4">
                        <Text className="text-lg font-medium">Schedules</Text>
                        <View className="flex flex-row space-x-4 justify-between my-2">
                            {
                                date.map((val, idx) => {
                                    return (
                                        <TouchableOpacity key={idx} onPress={() => setDate(val.day)} className={`shadow-black shadow-2xl flex-1 flex items-center justify-center basis-1/5 p-2 rounded-lg ${date1 === val.day ? "bg-blue-700" : "bg-gray-100"}`}>
                                            <Text className={`font-medium ${date1 === val.day ? "text-white" : "text-black"}`}>{val.day}</Text>
                                            <Text className={`font-medium ${date1 === val.day ? "text-white" : "text-black"}`}>{val.date.substring(3, 5)}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>

                        <Text className="text-lg font-medium mb-4">Choose Time</Text>
                        <View className="flex flex-row flex-wrap gap-4">
                            {
                                time.map((val, idx) => {
                                    return (
                                        <TouchableOpacity key={idx} onPress={() => setTime(val)} style={[styles.button, time1 === val && styles.selected]}>
                                            <Text style={[styles.buttonLabel, time1 === val && styles.selectedLabel]}>{val}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <TouchableHighlight onPress={postData} className="rounded-xl"><View className="p-2 rounded-xl bg-blue-700"><Text className="font-semibold text-white text-lg text-center">Book Appoinment</Text></View></TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    selected: {
        backgroundColor: '#1d4ed8',
        borderWidth: 0,
    },
    selectedLabel: {
        color: 'white',
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: '#f3f4f6',
        alignSelf: 'flex-start',
        textAlign: 'center',
    },

});


export default BookAppoinment;
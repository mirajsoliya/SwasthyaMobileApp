import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
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


    return (
        <ScrollView>
            <View className="m-4 mt-2">
                <Carousel data={dummydata} />

                <View className="my-4">
                    <Text className="text-lg font-medium">Schedules</Text>
                    <View className="flex flex-row justify-center space-x-4">
                        {
                            date.map((val, idx) => {
                                return (
                                    <View key={idx} className="bg-white shadow-black shadow-lg flex-1 flex justify-center items-center p-2 rounded-lg">
                                        <Text>{val.day}</Text>
                                        <Text>{val.date.substring(3, 5)}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    <Text className="text-lg font-medium">Choose Time</Text>
                    <View>
                        {
                            time.map((val, idx) => {
                                return (
                                    <View key={idx} className="shadow-lg">
                                        <Text>{val}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }

});


export default BookAppoinment;
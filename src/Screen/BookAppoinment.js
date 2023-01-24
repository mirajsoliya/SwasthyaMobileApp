import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from "@expo/vector-icons";

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
        day: dayArr[new Date(Date.now() + (86400000*0)).getDay()],
        date: new Date().toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000*1)).getDay()],
        date: new Date(Date.now() + (86400000*1)).toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000*2)).getDay()],
        date: new Date(Date.now() + (86400000*2)).toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000*3)).getDay()],
        date: new Date(Date.now() + (86400000*3)).toLocaleDateString()
    },
    {
        day: dayArr[new Date(Date.now() + (86400000*4)).getDay()],
        date: new Date(Date.now() + (86400000*4)).toLocaleDateString()
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
      <View className="p-4 bg-blue-700 rounded-3xl">
        <View className="flex flex-row space-x-6">
            <Image source={require("../../images/avatar.jpg")} className="rounded-md w-20 h-28"/>
            <View className="">
                <Text className="font-medium text-white mb-1">Dr. Ronak Shah</Text>
                <Text className="font-medium text-gray-200 text-sm">Neurologist</Text>
                <Text className="font-medium text-gray-200 text-sm mb-2">Los Angeles, US</Text>
                    <View className="p-2 bg-white rounded-lg flex flex-row space-x-2 items-center">
                    <AntDesign name="star" size={18} color="#eab308" />
                        <Text className="text-md text-blue-700 font-medium">5 Star</Text>
                    </View>
            </View>
        </View>
        <View className="flex flex-row justify-between my-4 mb-2">
            <View>
                <Text className="font-medium text-white">100</Text>
                <Text className="font-medium text-gray-300">Reviews</Text>
            </View>
            <View>
                <Text className="font-medium text-white">10</Text>
                <Text className="font-medium text-gray-300">Years exp</Text>
            </View>
            <View>
                <Text className="font-medium text-white">1550</Text>
                <Text className="font-medium text-gray-300">Patients</Text>
            </View>
        </View>
      </View>

      <View className="my-4">
        <Text className="text-lg font-medium">Schedules</Text>
        <View className="flex flex-row justify-center space-x-4">
            {
                date.map((val,idx) => {
                    return(
                    <View key={idx} className="bg-white shadow-black shadow-lg flex-1 flex justify-center items-center p-2 rounded-lg">
                        <Text>{val.day}</Text>
                        <Text>{val.date.substring(3,5)}</Text>
                    </View>
                    )
                })
            }
        </View>

        <Text className="text-lg font-medium">Choose Time</Text>
        <View>
            {
                time.map((val,idx) => {
                    return(
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
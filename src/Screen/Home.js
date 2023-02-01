import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  // const [user, setUser] = useState({})

  // const getData = async () => {
  //     try {
  //         const jsonValue = await AsyncStorage.getItem('user')
  //         setUser(JSON.parse(jsonValue))

  //     } catch (e) {
  //         // error reading value
  //     }
  // }

  // useEffect(() => {
  //     getData()
  // }, [])

  return (
    <ScrollView>
      <View className="my-2 mx-6 mt-0">
        <View>
          <Text className="font-semibold text-lg">Upcoming consultations</Text>
          <View className="bg-blue-700 p-4 rounded-3xl mt-2 mb-4 flex flex-row">
            <View className="w-1/2">
              <View className="flex flex-row justify-between">
                <View className="rounded-full border-2 border-white overflow-hidden">
                  <Image
                    className="w-10 h-10"
                    source={require("../../images/avatar.jpg")}
                  />
                </View>
                <View>
                  <Text className="text-white font-medium text-sm">
                    10:00 AM
                  </Text>
                  <Text className="text-white font-medium text-sm">Jan 31</Text>
                </View>
              </View>
              <Text className="mt-4 text-white font-medium text-xl w-24">
                Michael Simpson
              </Text>
            </View>
            <View className="w-1/2 opacity-30">
              <Image
                className="h-32 w-full object-contain"
                source={require("../../images/stethoscope.png")}
              />
            </View>
          </View>
        </View>


        <View>
          <Text className="font-semibold text-lg">
            What are you looking for?
          </Text>
          <View className="flex flex-row justify-between space-x-4 mt-2">
            <TouchableOpacity className="p-4 border-2 border-sky-400 flex-1 flex basis-1/2 items-center rounded-2xl">
              <Image
                className="h-14 w-14"
                source={require("../../images/appointment.png")}
              />
              <Text className="mt-4 text-md font-semibold">Doctor</Text>
              <Text className="text-md text-slate-700 font-medium">
                Book Appoinment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 border-2 border-sky-400 flex flex-1 basis-1/2 items-center rounded-2xl">
              <Image
                className="h-14 w-14"
                source={require("../../images/diagnostic.png")}
              />
              <Text className="mt-4 text-md font-semibold">Diagnostics</Text>
              <Text className="text-md text-slate-700 font-medium">
                Check Prescription
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View>
            <Text>Your today's goal</Text>
            <View>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

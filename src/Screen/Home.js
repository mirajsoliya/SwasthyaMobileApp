import { View, Text, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { schedulePushNotification } from '../NotificationSche';
import moment from "moment"

import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  //for user data....

  const [user, setUser] = useState({})
  const [pres, setPres] = useState({});


  const getPrescribedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      const PID = JSON.parse(jsonValue).PID;
      const res = await fetch(
        "http://192.168.239.37:8000/getLatestPrescription",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ PID }),
        }
      );

      const data = await res.json();
      if (res.status === 422 || !data) {
        console.log("data not found");
      } else {
        setPres(data);
        const jsonValue = JSON.stringify(data)
        console.log(data);
        console.log(pres.Medicines.length);
        await AsyncStorage.setItem('userpres', jsonValue)
      }

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPrescribedData()
  }, [])


  //for notification.....

  const [userpres, setuserpres] = useState({})

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];


  const handleNotification = async () => {
    try {
    //   const jsonValue = await AsyncStorage.getItem('userpres')
      console.log("data on home");
    //   console.log(jsonValue);
      setuserpres(pres);

    } catch (e) {
      console.log(e);
    }


    const noofday = userpres.no_of_days;
    let dateIndex = moment(userpres.date).day();
    const d = moment(new Date(userpres.date).toDateString());
    const nowdate = moment(new Date().toDateString());

    // console.log(d);
    // console.log(nowdate);

    const duration = moment.duration(nowdate.diff(d)).humanize(true)
      .split(" ");
    const totalday = parseInt(duration[1]);

    const loopnumber = noofday - totalday;
    console.log(userpres.Medicines[0].name);

    if (loopnumber >= 0) {
      // userpres.Medicines.map(async (item, index) => {
      //   for (let i = 0; i < loopnumber; i++) {
      //     if (userpres.Medicines[index].morning === true) {
      //       let hours = 8;
      //       let minutes = 0;
      //       await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
      //     }
      //     if (userpres.Medicines[index].afternoon === true) {
      //       let hours = 12;
      //       let minutes = 0;
      //       await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
      //     }
      //     if (userpres.Medicines[index].evening === true) {
      //       let hours = 19;
      //       let minutes = 0;
      //       await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
      //     }
      //     if (userpres.Medicines[index].night === true) {
      //       let hours = 22;
      //       let minutes = 0;
      //       await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
      //     }

      //   }
      // })
    }
  }

  useEffect(() => {
    handleNotification()
  }, [])



  return (
    <ScrollView>
      <View className="my-2 mx-6 mt-0">
        <View>
          <Text className="font-semibold text-lg">Upcoming consultations</Text>
          <View className="bg-blue-700 relative p-4 rounded-3xl mt-2 mb-4">
            <View className="-z-50">
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
            <View className="absolute right-4 top-4 z-50">
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

            <TouchableOpacity onPress={() => navigation.navigate("BookAppoinment")} className="p-4 border-2 border-sky-400 flex-1 flex basis-1/2 items-center rounded-2xl">
              <Image
                className="h-14 w-14"
                source={require("../../images/appointment.png")}
              />
              <Text className="mt-4 text-md font-semibold">Doctor</Text>
              <Text className="text-md text-slate-700 font-medium">
                Book Appoinment
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Prescription")} className="p-4 border-2 border-sky-400 flex flex-1 basis-1/2 items-center rounded-2xl">
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

        <View className="p-2">
          <Text className="font-semibold text-lg">
            Your Today Medicine...
          </Text>

          <View className=" bg-gray-300 p-4 rounded-3xl mt-2 mb-4  ">
            {Object.keys(pres).length > 0 ? 
            
               pres.Medicines.map((item, index) => (
                <Text className="font-semibold text-lg" key={index}>{item.name}</Text>
              )) 
            : <Text>No Medicine</Text>}
          </View>


        </View>


      </View>





    </ScrollView>
  )
}

export default Home
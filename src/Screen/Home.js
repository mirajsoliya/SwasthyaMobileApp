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
        "https://swasthya.onrender.com/getLatestPrescription",
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
      console.log("inide")
    }
  }
  const [appoint, setAppoint] = useState({});
  const getLatestAppoint = async () => {
    console.log("nfj");
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      const PID = JSON.parse(jsonValue).PID;
      const res = await fetch("https://swasthya.onrender.com/latestAppoint", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({ PID })
      })
      const data = await res.json();
      if (data) {
        setAppoint(data);
      } else {
        console.log("No data found");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPrescribedData();
    getLatestAppoint();
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
      userpres.Medicines.map(async (item, index) => {
        for (let i = 0; i < loopnumber; i++) {
          if (userpres.Medicines[index].morning === true) {
            let hours = 8;
            let minutes = 0;
            await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
          }
          if (userpres.Medicines[index].afternoon === true) {
            let hours = 12;
            let minutes = 0;
            await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
          }
          if (userpres.Medicines[index].evening === true) {
            let hours = 19;
            let minutes = 0;
            await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
          }
          if (userpres.Medicines[index].night === true) {
            let hours = 22;
            let minutes = 0;
            await schedulePushNotification("Your Today's Medicines", item.name, "", hours, minutes, days[dateIndex++ % 7]);
          }

        }
      })
    }
  }

  useEffect(() => {
    handleNotification()
  }, [])



  return (
    <ScrollView>
      <View className="my-2 mb-20 mx-6 mt-0">
        <View>
          <Text className="font-semibold text-lg">Upcoming consultations</Text>
          <View className="bg-blue-700 p-4 relative rounded-3xl mt-2 mb-4">
            {Object.keys(appoint).length > 0 ?
              <>
                <View className="flex justify-between">
                  <View className="flex flex-row justify-between">
                    <View className="rounded-full border-2 border-white overflow-hidden">
                      <Image
                        className="w-14 h-14"
                        source={require("../../images/avatar.jpg")}
                      />
                    </View>
                    <View>
                      <Text className="text-white font-medium text-sm">
                        {appoint.time}
                      </Text>
                      <Text className="text-white font-medium text-sm">{appoint.date}</Text>
                    </View>
                  </View>
                  <Text className="mt-4 text-white font-medium text-xl">
                    {appoint.drname}
                  </Text>
                </View>
                <View className="w-1/2 z-50 absolute right-20 -top-1 opacity-30 -rotate-45">
                  <Image
                    className=""
                    source={require("../../images/stethoscope.png")}
                  />
                </View>
              </> : <><Text>No Appoinment</Text></>
            }
          </View>
        </View>

        <View>
          <Text className="font-semibold text-lg">
            What are you looking for?
          </Text>
          <View className="flex flex-row justify-between space-x-4 my-2">

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
          <View className="flex flex-row justify-between space-x-4 mt-2">

            <TouchableOpacity onPress={() => navigation.navigate("Notification")} className="p-2 pt-4 border-2 border-sky-400 flex-1 flex basis-1/2 items-center rounded-2xl">
              <Image
                className="h-14 w-14"
                source={require("../../images/pneumonia.png")}
              />
              <Text className="mt-4 text-md font-semibold">Disease Predictor</Text>
              <Text className="text-md text-slate-700 font-medium">
                Predict your disease
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")} className="p-4 border-2 border-sky-400 flex flex-1 basis-1/2 items-center rounded-2xl">
              <Image
                className="h-16 w-16"
                source={require("../../images/man.png")}
              />
              <Text className="mt-4 text-md font-semibold">Profile</Text>
              <Text className="text-md text-slate-700 font-medium">
                View profile
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
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

const Prescription = ({ navigation, setRootName }) => {
  const [pres, setPres] = useState({});
  const [daily, setdaily] = useState(0);
  const [progress, setprogress] = useState(0);
  const [predate, setpredate] = useState(0);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userpres')
      // console.log(JSON.parse(jsonValue));
      setPres(await JSON.parse(jsonValue));
      console.log(pres);
    } catch (e) {
      console.log(e);
    }
  }

  const setData = async () => {

    const date = new Date().getHours();
    var date1 = moment(pres.date).add(pres.no_of_days, "days");
    var date2 = moment()
    var finaldate = date1.diff(date2) / (1000 * 60 * 60 * 24);

    setpredate(Math.ceil(finaldate));

    if (date < 12) {
      setdaily(1);
    }
    else if (date >= 12 && date < 19) {
      setdaily(2);
    }
    else if (date >= 19 && date < 22) {
      setdaily(3);
    }
    else if (date >= 22) {
      setdaily(4);
    }

    const p = ((pres.no_of_days - predate) / pres.no_of_days) * 100;
    if (p === 100) {
      setPres({});
    }
    // console.log(p);
    setprogress(p);


  }

  useEffect(() => {
    getData() // for latest prescription
    setData()
  }, [])




  return (
    <ScrollView>
      <View className="m-4 mt-2 mb-20">
        <View className="">
          <Text className="text-2xl text-slate-900 font-semibold">
            {/* {user.PID} */}
            Your drug cabinet
          </Text>
          <View className="h-48 w-full flex flex-row items-center p-4 bg-gray-200 mt-4 rounded-3xl">
            <Image
              source={require("../../images/med.png")}
              className="h-full basis-1/2 flex-1"
            ></Image>
            <View className="basis-1/2">
              <Text className="font-semibold text-lg">
                Track your progress, medications and everything...
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row item my-4 rounded-xl space-x-2">
          <View className="basis-1/2 flex-1 p-4  flex space-y-3 bg-gray-100 mr-2 rounded-xl">
            <View className="flex flex-row items-center justify-between">
              <Text className="w-20 font-medium">Daily Meds Taken</Text>
              <Text className="text-2xl font-semibold">{daily}/4</Text>
            </View>
            <View className="mb-2">
              <View className="h-2 w-full rounded-full bg-gray-200 absolute top-0 left-0"></View>
              <View className={`h-2 rounded-full ${daily === 4 ? "w-full" : `w-${daily}/4`} bg-sky-400 absolute top-0 left-0`}></View>
            </View>
          </View>
          <View className="basis-1/2 flex-1 flex space-y-3 p-4 ml-2 bg-gray-100 rounded-xl">
            <View className="flex flex-row items-center justify-between">
              <Text className="w-20 font-medium">Treatment progress</Text>
              <Text className="text-2xl font-semibold">{progress}%</Text>
            </View>
            <View className="mb-2">
              <View className="h-2 w-full rounded-full bg-gray-200 absolute top-0 left-0"></View>
              <View className={`h-2 ${progress === 100 ? "w-full" : `w-${predate}/${pres.no_of_days}`} rounded-full bg-red-400 absolute top-0 left-0`}></View>
            </View>
          </View>
        </View>

        {Object.keys(pres).length > 0 ? (
          <>
            <Text className="font-semibold text-2xl mt-2">
              Daily Review
            </Text>
            <View className="flex flex-row">
              <Text className="font-medium text-sm text-slate-500">Today: </Text>
              <Text className="text-sm text-slate-700 font-medium"> {pres.Medicines.length} Medicines</Text>
              {/* {pres.Medicines.length} */}
            </View>
            <View className="flex space-y-4 my-4">
              {pres.Medicines.map((val, idx) => {
                return (
                  <View key={idx} className="rounded-xl bg-gray-50 p-4">
                    <MedicineWidget val={val} idx={idx} />

                  </View>
                );
              })}
            </View>
          </>) : <></>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    width: "80%",
    height: 200,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C8B3E9",
    borderColor: "#C8B3E9",
    shadowColor: "gray",
    elevation: 15,
  },
  shadowProp: {},
});

const MedicineWidget = (props) => {
  return (
    <>

      <View className="flex flex-row items-center gap-x-2">
        <Image
          className="h-8 w-8"
          source={require("../../Icons/medicine.png")}
        />
        <Text className="capitalize text-xl font-semibold">
          {props.val.name}
        </Text>
      </View>
      <View className="flex flex-row justify-center space-x-2 my-4">
        <View className="p-4 basis-1/2 flex-1 bg-gray-300 rounded-xl items-center flex flex-row justify-start space-x-2">
          <AntDesign name="doubleleft" size={18} color="black" />
          <Text
            className={`font-medium ${props.val.beaf ? "line-through" : ""}`}
          >
            {/*  */}
            Before Eating
          </Text>
        </View>
        <View className="p-4 basis-1/2 flex-1 bg-gray-300 rounded-xl flex items-center flex-row justify-end space-x-2">
          <Text
            className={`font-medium ${!props.val.beaf ? "line-through" : ""}`}
          >
            {/*  */}
            After Eating
          </Text>
          <AntDesign name="doubleright" size={18} color="black" />
        </View>
      </View>
      {/* <Text>{}</Text>s */}
      <View className="flex flex-row justify-between flex-wrap space-x-2">
        {props.val.morning && (
          <View className="flex flex-col items-center flex-1 px-1 py-4 basis-1/4 rounded-xl bg-gray-300">
            <Image className="w-12 h-12" source={require("../../Icons/breakfast.png")} />
            <Text className="font-medium">Breakfast</Text>
          </View>
        )}
        {props.val.afternoon && (
          <View className="flex flex-col items-center p-4 flex-1 rounded-xl basis-1/4  bg-gray-300">
            <Image className="w-12 h-12" source={require("../../Icons/fried-rice.png")} />
            <Text className="font-medium">Lunch</Text>
          </View>
        )}
        {props.val.evening && (
          <View className="flex flex-col items-center py-4 px-2.5 flex-1 rounded-xl basis-1/4 bg-gray-300">
            <Image className="w-12 h-12" source={require("../../Icons/snack.png")} />
            <Text className="font-medium">Snacks</Text>
          </View>
        )}
        {props.val.night && (
          <View className="flex flex-col items-center p-4 rounded-xl flex-1 bg-gray-300 basis-1/4">
            <Image className="w-12 h-12" source={require("../../Icons/dinner.png")} />
            <Text className="font-medium">Dinner</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Prescription;

import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text,TextInput, StyleSheet, Image, Button } from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";


const Prescription = ({ navigation, setRootName }) => {
    const[PID,setPID] = useState("");
    const [pres,setPres] = useState({});
    const postData = async (e) => {
        e.preventDefault();
        try{
            if(PID == null){
                return;
            }
            const res = await fetch("http://192.168.118.37:8000/getLatestPrescription", {
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
                },
                body:JSON.stringify({PID})
            })
            const data = await res.json();
            if(res.status === 422 || !data){
                console.log("data not found");
            }else{
                console.log(data);
                setPres(data);
            }
        }catch(err){
            console.log(err);
        }
    }
  return (
    <ScrollView>
      <View className="m-4">
      <View className="">
        <Text className="text-2xl text-violet-600 font-semibold">Your drug cabinet</Text>
        <View className="h-40 w-full flex flex-row items-center p-4 bg-violet-200 mt-4 rounded-2xl">
            <Image source={require("../../images/med.png")} className="h-full w-1/2 object-contain"></Image>
            <View className="w-1/2 px-4">
                <Text className="font-semibold text-lg text-violet-700">All your latest prescription at one place</Text>
            </View>
        </View>
      </View>
        <View className="flex justify-center flex-row gap-x-4 m-4 items-center">
            <Text>Enter pid</Text>
          <TextInput className="border w-20 border-black" placeholder="enter pid" onChangeText={newText => setPID(newText)}/>
            <Button onPress={postData} title="Search"/>
        </View>
        { Object.keys(pres).length > 0 ?
            <>
            <View className="flex flex-row items-center gap-x-2">
                <Text className="font-bold text-xl text-violet-700">Problem:</Text>
                <Text className="font-medium text-violet-700 text-lg">{pres.problem}</Text>
            </View>
            <View className="flex flex-row gap-x-2">
                <Text className="font-bold text-xl text-violet-700">Diagnosis:</Text>
                <Text className="font-medium text-lg text-violet-700">{pres.diagnosis}</Text>
            </View>
            <Text className="font-semibold text-emerald-700 text-xl mt-2">List of prescribed medicines...</Text>
            <View>
                {pres.Medicines.map((val,idx) => {
                    return(
                        <>
                            <View key={idx} className="my-2 p-4 rounded-xl bg-yellow-100">
                            <View className="flex flex-row items-center gap-x-2">
                                <Image className="h-8 w-8" source={require("../../Icons/medicine.png")}/>
                                <Text className="capitalize text-xl font-semibold text-red-700">{val.name}</Text>
                            </View>
                                <Text className="text-md font-medium mt-2">When to take?</Text>
                                <View className="flex flex-row gap-x-1">
                                    <View className="p-2 w-1/2 bg-blue-200 rounded-lg flex flex-row">
                                    <AntDesign name="leftcircleo" size={24} color="black" />
                                    <Text className={`font-medium text-center ${val.beaf ? 'line-through' : ""}`}>Before</Text>
                                    </View>
                                    <View className="p-2 w-1/2 bg-blue-200 rounded-lg flex flex-row">
                                    <Text className={`font-medium text-center ${!val.beaf ? 'line-through' : ""}`}>After</Text>
                                    <AntDesign name="rightcircleo" size={24} color="black" />
                                    </View>
                                </View>
                                {/* <Text>{}</Text>s */}
                                <View className="flex flex-wrap flex-row justify-between gap-y-2">
                                <View className="flex flex-row gap-x-2 w-full">
                                    {val.morning ? <View className="flex flex-row justify-between items-center w-1/2 rounded-lg bg-blue-200"><Image source={require("../../Icons/breakfast.png")}/><Text>Breakfast</Text></View> :<></> }
                                    {val.afternoon ? <View className="flex flex-row justify-between items-center w-1/2 rounded-lg bg-blue-200"><Image source={require("../../Icons/lunch-time.png")}/><Text>Lunch</Text></View> : <></> }
                                </View>
                                <View className="flex flex-row gap-x-2 w-full">
                                    {val.evening ? <View className="flex flex-row justify-between items-center w-1/2 rounded-lg bg-blue-200"><Image source={require("../../Icons/snack.png")}/><Text>Snacks</Text></View> : <></> }
                                    {val.night ? <View className="flex flex-row justify-between items-center w-1/2 rounded-lg bg-blue-200"><Image source={require("../../Icons/christmas-dinner.png")}/><Text>Dinner</Text></View> : <></> }
                                </View>
                                </View>
                            </View>
                        </>
                    )
                })}
            </View>
            </>
             :
            <></>
        }
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({

  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    width: '80%',
    height: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8B3E9',
    borderColor: '#C8B3E9',
    shadowColor: 'gray',
    elevation: 15,
  },
  shadowProp: {

  }
});


export default Prescription;
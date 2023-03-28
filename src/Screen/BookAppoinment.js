import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Image, Pressable, ScrollView, Button, Modal, TouchableHighlight } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from "@expo/vector-icons";
import Carousel from "./Carousel";
import { dummydata } from "./Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookAppoinment = ({ user, navigation }) => {
    const dayArr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
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

    const [modalVisible, setModalVisible] = useState(false);

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

    const postData = async () => {
        const { day, date } = date1;
        const name = await AsyncStorage.getItem('user');
        const { PID, fname, lname, mobile } = JSON.parse(name);
        const time = time1;
        console.log(date + " " + time);
        try {
            const res = await fetch("http://192.168.55.3:8000/bookapp", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({ PID, fname, lname, mobile, day, date, time })
            })
            console.log('g');
            const data = await res.json();
            if (!data || res.status === 400 || res.status === 404) {
                console.log("Error: Appointment not booked");
            } else {
                console.log("Appointment booked successfully");
                setModalVisible(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const [date1, setDate] = useState({});
    const [time1, setTime] = useState("");

    return (
        <SafeAreaView>
            <ScrollView>
                <View className="m-4 mt-2 mb-20">
                    <Carousel data={dummydata} />

                    <View className="my-4">
                        <Text className="text-lg font-medium">Schedules</Text>
                        <View className="flex flex-row space-x-2 justify-between my-2">
                            {
                                date.map((val, idx) => {
                                    return (
                                        <View key={idx} className="flex-1 basis-1/5">
                                            <TouchableOpacity onPress={() => setDate(val)} className={`p-2 rounded-lg ${date1.day === val.day ? "bg-blue-700 shadow-black shadow-2xl" : "bg-gray-100"}`}>
                                                <Text className={`font-medium text-center ${date1.day === val.day ? "text-white" : "text-black"}`}>{val.day.substring(0, 3)}</Text>
                                                <Text className={`font-medium text-center ${date1.day === val.day ? "text-white" : "text-black"}`}>{val.date.substring(3, 5)}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>

                        <Text className="text-lg font-medium mb-4">Choose Time</Text>
                        <View className="flex flex-row flex-wrap gap-4">
                            {
                                time.map((val, idx) => {
                                    return (
                                        <TouchableOpacity key={idx} onPress={() => setTime(val)} className={`p-2 rounded-lg ${time1 === val ? "bg-blue-700 shadow-black shadow-2xl" : "bg-gray-100"}`}>
                                            <Text className={`font-medium text-center ${time1 === val ? "text-white" : "text-black"}`}>{val}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <TouchableHighlight onPress={postData} className="rounded-xl"><View className="p-2 rounded-xl bg-blue-700"><Text className="font-semibold text-white text-lg text-center">Book Appoinment</Text></View></TouchableHighlight>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Appoinment Booked successfully</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => {
                                            setModalVisible(!modalVisible)
                                        }
                                        }>
                                        <Text style={styles.textStyle}>ok</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,


    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 35,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});


export default BookAppoinment;
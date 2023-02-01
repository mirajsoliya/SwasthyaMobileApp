import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { schedulePushNotification } from '../NotificationSche';
import moment from "moment"
const Home = ({ navigation }) => {

    //for user data....

    const [user, setUser] = useState({})

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            setUser(JSON.parse(jsonValue));

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
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
            const jsonValue = await AsyncStorage.getItem('userpres')
            // console.log(jsonValue);
            setuserpres(JSON.parse(jsonValue));

        } catch (e) {
            console.log(e);
        }

        const noofday = userpres.no_of_days;
        let dateIndex = moment(userpres.date).day();
        let time;

        userpres.Medicines.map(async (item, index) => {
            for (let i = 0; i < noofday; i++) {
                if (userpres.Medicines[index].morning === true) {
                    let hours = 8;
                    let minutes = 0;
                    await schedulePushNotification(item.name, "bhai sabb", "success", hours, minutes, days[dateIndex++ % 7]);
                }
                if (userpres.Medicines[index].afternoon === true) {
                    let hours = 12;
                    let minutes = 0;
                    await schedulePushNotification(item.name, "bhai sabb", "success", hours, minutes, days[dateIndex++ % 7]);
                }
                if (userpres.Medicines[index].evening === true) {
                    let hours = 19;
                    let minutes = 0;
                    await schedulePushNotification(item.name, "bhai sabb", "success", hours, minutes, days[dateIndex++ % 7]);
                }
                if (userpres.Medicines[index].night === true) {
                    let hours = 22;
                    let minutes = 0;
                    await schedulePushNotification(item.name, "bhai sabb", "success", hours, minutes, days[dateIndex++ % 7]);
                }

            }
        })

    }

    useEffect(() => {
        handleNotification()
    }, [])




    // const handleNotification = async () => {
    //     const data = //api 
    //         await AsyncStorage.setItem('userPres', data)

    //     const nuofDaya = 1;
    //     let title, des, status;
    //     data.map(async () => {
    //         if (morning) {
    //             time[1] = 8;
    //         }
    //         else if (evning) {
    //             time = 7;
    //         }

    //         count = 3;
    //         for (let index = 0; index < nuofDaya; index++) {
    //             await schedulePushNotification(title, des, status, time, day[index]);
    //         }
    //     })
    // }







    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            {/* <Text>{user.fname}</Text> */}
            <Text>hello</Text>
            {/* <Text>{userpres.fname}</Text> */}
        </View>
    )
}

export default Home
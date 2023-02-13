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
            console.log("data on home");
            console.log(jsonValue);
            setuserpres(JSON.parse(jsonValue));

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            {/* <Text>{user.fname}</Text> */}
            <Text>hello</Text>
            {/* <Text>{userpres.fname}</Text> */}
        </View>
    )
}

export default Home
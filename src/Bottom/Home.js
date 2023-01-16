import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <View style={{ flex: 1 }}>
            {/* <Text>{user.fname}</Text> */}
            <Text>home</Text>
        </View>
    )
}

export default Home
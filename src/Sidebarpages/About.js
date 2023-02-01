import { View, Text, Image } from 'react-native'
import React from 'react'
import stethoscope from '../../images/stethoscope.png'
import message from '../../images/message.png'
import coral_reef from '../../images/coral-reef.png'
import success from '../../images/success.png'
import { ScrollView } from 'react-native-gesture-handler'

const About = () => {
    return (
        <ScrollView>
            <View className="m-3">
                <View className="pb-2">
                    <Image source={stethoscope} className="w-7 h-7" />
                </View>
                <View >
                    <Text className="font-semibold text-xl">More experience</Text>
                </View>
                <View className="mt-4 border-b-2 pb-4">
                    <Text className="text-base">The million patients we treat each year prepares us to treat the one who matters most — you.</Text>
                </View>
            </View>

            <View className="m-3">
                <View className="pb-2">
                    <Image source={message} className="w-7 h-7" />
                </View>
                <View >
                    <Text className="font-semibold text-xl">The right answers</Text>
                </View>
                <View className="mt-4 border-b-2 pb-4">
                    <Text className="text-base">Count on our experts to deliver an accurate diagnosis and the right plan for you the first time.</Text>
                </View>
            </View>
            <View className="m-3">
                <View className="pb-2">
                    <Image source={coral_reef} className="w-7 h-7" />
                </View>
                <View >
                    <Text className="font-semibold text-xl">You come first</Text>
                </View>
                <View className="mt-4 border-b-2 pb-4">
                    <Text className="text-base">Treatment at Mayo Clinic is a truly human experience. You're cared for as a person first</Text>
                </View>
            </View>
            <View className="m-3">
                <View className="pb-2">
                    <Image source={success} className="w-7 h-7" />
                </View>
                <View >
                    <Text className="font-semibold text-xl">Innovation with impact</Text>
                </View>
                <View className="mt-4 border-b-2 pb-4">
                    <Text className="text-base">All of our patient care, education and research are driven to make discoveries that can help heal you.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default About
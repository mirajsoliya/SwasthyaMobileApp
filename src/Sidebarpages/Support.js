import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Support = () => {
    return (
        <View className="m-3">
            <View>
                <Text className="font-bold text-xl">We're here to help:</Text>
            </View>
            <View className="p-5">
                <View className="flex flex-row p-1">
                    <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
                    <Text className="text-base">Find the right solution for you</Text>
                </View>
                <View className="flex flex-row p-1">
                    <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
                    <Text className="text-base">Understand options for demos and pricing</Text>
                </View>
                <View className="flex flex-row p-1">
                    <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
                    <Text className="text-base">Get product support</Text>
                </View>
                <View className="flex flex-row p-1">
                    <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
                    <Text className="text-base">Submit general inquires</Text>
                </View>

            </View>
            <View>
                <Text className="font-bold text-xl">Contact Support</Text>
            </View>
            <View className="m-5">
                <View className="flex flex-row">
                    <Text className="text-base font-semibold">Phone No:</Text>
                    <Text className="text-base mx-2">+91 9852378545</Text>
                </View>
                <View className="flex flex-row">
                    <Text className="text-base font-semibold">Email:</Text>
                    <Text className="text-base mx-2">customer.swasthaya@gmail.com</Text>
                </View>
            </View>
            <View>
                <Text className="font-bold text-xl">Address :</Text>
            </View>
            <View className="p-5 flex flex-row">
                <Text className="text-base">Charakdanga Rd, Shantinagar, Uttarpara Kotrung , West Bengal .</Text>
            </View>
        </View>
    )
}

export default Support
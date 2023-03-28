import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Service = () => {
    return (
        <View >
            <ScrollView>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Appointment Management</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">For hospitals having their own site, appointment widgets will be integrated onto the site. Patients visiting the hospital’s website can book online appointments with ease.</Text>
                    </View>
                </View>

                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Billing Management</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">Integrated Billing with treatments, Lab and Radiology. Alerts will be sent on Discount Authorisation. Automatic due capture, Option to bill before and after consultation.</Text>
                    </View>
                </View>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Prescription Management</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">Manage commonly and recently used medicines. Option to show medicines available in the pharmacy. SMS prescriptions to Patients.</Text>
                    </View>
                </View>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Discharge Summary</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">Template based Discharge Summary. ICD10 integration. Option to prevent discharge summary till IP bill is closed.</Text>
                    </View>
                </View>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Operation Theatre Management</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">Automatic notification can be sent to customers on test results. Lab notifications like email, SMS of the test reports sent from the Automated Lab notification module.</Text>
                    </View>
                </View>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Pharmacy Management</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">Comprehensive Pharmacy Management handles stock, Prescription Integration, Ward Request, Stock Management, Stock Moment and intelligent reports.</Text>
                    </View>
                </View>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Lab Management</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">Comprehensive Lab Management handles complete order management, Custom Reports, Smart Notifications, Credit Settlement, detailed MIS Reports, Analytics and App for Phlebotomist.</Text>
                    </View>
                </View>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Manage Multiple Locations</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">Any number of branches can be added and managed using a single account.

                        </Text>
                    </View>
                </View>
                <View className="m-3">
                    <View >
                        <Text className="font-semibold text-xl">Cost Effective:</Text>
                    </View>
                    <View className="mt-4 border-b-2 pb-4">
                        <Text className="text-base">HMS not only saves time in the hospital but also is cost-effective in decreasing the number of people working on the system of manual entry of data and paperwork. The implementation of His will decrease the human intervention into the system thereby avoiding human-caused errors.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Service
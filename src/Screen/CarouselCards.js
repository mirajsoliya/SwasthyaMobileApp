import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const CarouselCards = ({ item }) => {
  return (
    <View className="bg-blue-700 mx-4 w-80 rounded-3xl p-6">
      <View className="flex flex-row justify-between space-x-8">
        <View className="basis-1/3">
          <Image
            source={require("../../images/avatar.jpg")}
            className="rounded-md w-full h-28"
          />
        </View>
        <View className="flex-1 basis-2/3">
          <Text className="font-medium text-white mb-1">{item.doctor}</Text>
          <Text className="font-medium text-gray-200 text-sm">
            {item.specialist}
          </Text>
          <Text className="font-medium text-gray-200 text-sm mb-2">
            {item.place}
          </Text>
          <View className="p-2 bg-white rounded-lg flex flex-row space-x-2 items-center">
            <AntDesign name="star" size={18} color="#eab308" />
            <Text className="text-md text-blue-700 font-medium">
              {item.star}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between my-4 mb-2">
        <View>
          <Text className="font-medium text-white">100</Text>
          <Text className="font-medium text-gray-300">Reviews</Text>
        </View>
        <View>
          <Text className="font-medium text-white">10</Text>
          <Text className="font-medium text-gray-300">Years exp</Text>
        </View>
        <View>
          <Text className="font-medium text-white">1550</Text>
          <Text className="font-medium text-gray-300">Patients</Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselCards;

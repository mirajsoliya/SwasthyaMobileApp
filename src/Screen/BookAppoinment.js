import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler'

const BookAppoinment = ({ user, navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <Text>appoinment</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  }

});


export default BookAppoinment;
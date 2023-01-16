import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const Prescription = ({ navigation, setRootName }) => {

  return (
    <ScrollView>
      <View style={styles.shadowProp}>
        <View style={styles.container}>
          <Text>hello</Text>
        </View>
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
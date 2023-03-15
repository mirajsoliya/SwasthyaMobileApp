import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Sidebar = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('user');
      if (name) {
        console.log(JSON.parse(name));
        setUserName(JSON.parse(name).fname);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: '#2563eb' }}>

      <Image
        source={require('../../images/avatar.jpg')}
        style={{ marginTop: 50, borderRadius: 50, alignSelf: 'center', width: 80, height: 80 }}

      />
      <Text style={{ fontSize: 20, fontWeight: '600', alignSelf: 'center', marginTop: 20 }}>{username}</Text>

      <View style={{ marginTop: 50, width: '100%' }}>
        <FlatList style={{ marginHorizontal: 20 }}
          data={[
            { icon: require('../../Icons/account.png'), title: 'Profile', },
            { icon: require('../../Icons/service.png'), title: 'Service' },
            { icon: require('../../Icons/about.png'), title: 'About' },
            { icon: require('../../Icons/support.png'), title: 'Support' },
          ]}

          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style=
                {{
                  width: '100%', flexDirection: 'row', alignItems: 'center', height: 55, marginTop: 12, borderRadius: 12, backgroundColor: "#3b82f6"


                }}
                onPress={() => {
                  navigation.closeDrawer();
                  navigation.navigate(item.title)
                }}
              >
                <Image source={item.icon} style={{ marginLeft: 15, width: 24, height: 24 }}></Image>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: 15 }}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
        />

      </View>
    </View>

  )
}

export default Sidebar
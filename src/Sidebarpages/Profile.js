import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image, TextInput, Text, ScrollView, Pressable, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Userimg from '../../Icons/user.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyProfile = () => {


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

    return (
        <ScrollView style={{ marginTop: 0 }}>
            <View style={{ alignItems: 'center', margin: 5 }}>
                <Text style={styles.header}>My Profile</Text>
            </View>
            <View style={styles.ProfContainer}>
                <Image source={Userimg} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10 }} />
                <TouchableOpacity><Text style={{ color: '#68a0cf', marginVertical: 10 }}>Change Profile Photo</Text></TouchableOpacity>
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Name :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Name"
                        selectionColor={'black'}
                        defaultValue={user.fname}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Mobile No :</Text>
                    <TextInput
                        textContentType='telephoneNumber'
                        style={styles.textfield}
                        placeholder=" Mobile No"
                        selectionColor={'black'}
                        defaultValue={user.mobile}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Email Id :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Email Id"
                        selectionColor={'black'}
                        defaultValue={user.email}
                        editable={false}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Address :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Address"
                        selectionColor={'black'}
                        defaultValue={user.address}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Blood group :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Blood group"
                        selectionColor={'black'}
                        defaultValue={user.bgroup}
                        editable={false}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Gender :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Gender"
                        selectionColor={'black'}
                        defaultValue={user.gender}
                        editable={false}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Age :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Age"
                        selectionColor={'black'}
                        defaultValue={user.age}
                        editable={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
}
export default MyProfile;
const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: '500',
    },
    ProfContainer: {
        alignItems: "center",
    },
    textfield: {
        fontSize: 15,
        width: '95%',
        borderWidth: 1,
        borderRadius: 8,
        height: 35,
        padding: 5,
        backgroundColor: '#e4e4e7',
        borderColor: '#e4e4e7',
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
        // borderWidth: 1,
        // marginVertical: 10,
    },
    iconStyle: {
        color: '#68a0cf',
        marginHorizontal: 10,
    },
    text: {
        marginRight: 10,
    },
    uploadFile: {
        marginLeft: 20,
    },
    textinput: {
        fontSize: 18,
        fontWeight: '400'
    },
    textcontainer: {
        margin: 6,
        justifyContent: 'center',
        // textAlign: 'center',

        // flexDirection: 'row'
    }
});
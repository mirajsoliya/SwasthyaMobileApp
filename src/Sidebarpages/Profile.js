import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image, TextInput, Text, ScrollView, Pressable, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Userimg from '../../Icons/user.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";

const MyProfile = () => {


    return (
        <ScrollView style={{ marginTop: 0 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.header}>My Profile</Text>
            </View>
            <View style={styles.ProfContainer}>
                <Image source={Userimg} style={{ width: 130, height: 130, borderRadius: 100, marginTop: 10 }} />
                <TouchableOpacity><Text style={{ color: '#68a0cf', marginVertical: 10 }}>Change Profile Photo</Text></TouchableOpacity>
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Name :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Name"
                        selectionColor={'black'}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Mobile No :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Mobile No"
                        selectionColor={'black'}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Email Id :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Email Id"
                        selectionColor={'black'}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Address :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Address"
                        selectionColor={'black'}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Blood group :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder="Blood group"
                        selectionColor={'black'}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>age :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder="age"
                        selectionColor={'black'}
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
        width: '80%',
        borderBottomWidth: 1,
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
        marginLeft: 10,
        justifyContent: 'center',
        marginTop: 10,
        flexDirection: 'row'
    }
});
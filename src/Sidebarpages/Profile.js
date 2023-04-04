import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image, TextInput, Text, ScrollView, Pressable, Touchable, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Userimg from '../../Icons/user.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker/src/ImagePicker";

const MyProfile = () => {

    const [user, setUser] = useState({})

    const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.canceled === true) {
            return;
        }
        let newFile = {
            uri: pickerResult.assets[0].uri,
            type: `test/${pickerResult.assets[0].type}`,
            name: `test.${pickerResult.assets[0].name}`,
        };
        setSelectedImage({ localUri: pickerResult.assets });
        console.log(newFile);
        // console.log(pickerResult.assets);

        // await handleUpload(pickerResult.assets)
        await handleUpload(newFile)
        // console.log("image uri");
    };
    const baseUrl = "https://api.cloudinary.com/v1_1/dqhqtw1uz/image/upload"
    const preset = "swathya"
    let finalData;
    const [url, setUrl] = useState("");
    const handleUpload = async (image) => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", preset);
        data.append("cloud_name", "dqhqtw1uz");

        try {
            let response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: data,
            });

            let json = await response.json();
            console.log(json.secure_url);
            ImageStore(json.secure_url);
            setUrl(json.secure_url)
            //setUrl(res.data.secure_url);
        } catch (err) {
            console.log("err is err", err);
        }
    };
    const ImageStore = async (url) => {
        try {
            const res = await fetch(
                "http://192.168.1.100:8000/imageUpload",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json",
                    },
                    body: JSON.stringify({ id: user._id, url }),
                }
            );
            const data = await res.json();
            console.log(data.data);
            setUser(data.data)
            // setUser(JSON.parse(res.json()))
        } catch (err) {
            console.log(err);
        }
    }
    // useEffect(() => {
    //     ImageStore(url);
    // }, [url])
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            console.log("data profile..........");
            console.log(JSON.parse(jsonValue));
            setUser(JSON.parse(jsonValue));
            console.log(user);

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
                <Image source={{ uri: user?.url }} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10 }} />
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <Text style={{ fontSize: 17, margin: 5, color: '#2563eb' }}>Change your Photo </Text>
                </TouchableOpacity>

            </View>
            <View className="mx-2">
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Name :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Name"
                        selectionColor={'black'}
                        defaultValue={user?.fname}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Mobile No :</Text>
                    <TextInput
                        textContentType='telephoneNumber'
                        style={styles.textfield}
                        placeholder=" Mobile No"
                        selectionColor={'black'}
                        defaultValue={user?.mobile}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Email Id :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Email Id"
                        selectionColor={'black'}
                        defaultValue={user?.email}
                        editable={false}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Address :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Address"
                        selectionColor={'black'}
                        defaultValue={user?.address}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Blood group :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Blood group"
                        selectionColor={'black'}
                        defaultValue={user?.bgroup}
                        editable={false}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Gender :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Gender"
                        selectionColor={'black'}
                        defaultValue={user?.gender}
                        editable={false}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textinput}>Age :</Text>
                    <TextInput
                        style={styles.textfield}
                        placeholder=" Age"
                        selectionColor={'black'}
                        defaultValue={user?.age}
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
        width: '100%',
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
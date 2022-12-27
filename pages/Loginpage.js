import React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, Pressable, ScrollView } from "react-native";

import img from '../images/login1.gif'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";

const Loginpage = () => {
    const [passSet, setPassSet] = useState(false);  
    const [pid,setPID] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState({});
    const postData = async (e) => {
        e.preventDefault();
        const PatientID = pid;
        const password1 = password;
        const res = await fetch("http://192.168.1.12:8000/login", {
            method:"POST",
            headers:{
                "Content-Type" :"Application/json"
            },
            credentials:"include",
            body: JSON.stringify({PatientID,password1})
        });
        const data = await res.json();
        if(res.status === 400 || !data){
            console.log("Invalid details");
        }else{
            setUser(data);
        }
    }
    var passEye;
    if (passSet) {
        passEye = <Icon name="visibility" style={{ marginTop: -38, marginRight: 10, marginLeft: 'auto' }} size={20} onPress={() => setPassSet(false)} />;
    } else {
        passEye = <Icon name="visibility-off" style={{ marginTop: -38, marginRight: 10, marginLeft: 'auto' }} size={20} onPress={() => setPassSet(true)} />
    }
    return (
       <ScrollView style={{width:'100%'}}>
            <Text style={styles.heading}>Swasthya</Text>
            <View style={{ width: '100%',marginTop:50}}>
                <View style={styles.imgContainer}>

                    <Image
                        source={img}
                        style={styles.img}
                    />
                </View>
                <View style={styles.maincontainer}>

                    <View style={styles.inputcontainer}>
                        <TextInput style={styles.inputstyle} placeholder="UserName" onChangeText={newText => setPID(newText)}/>
                    </View>
                    <View style={styles.inputcontainer} >
                        <TextInput style={styles.inputstyle} placeholder="Password" onChangeText={newText => setPassword(newText)} autoCapitalize="none" autoCorrect={false}  secureTextEntry={!passSet}/>
                    </View>
                    {passEye}
                    <Pressable
                        style={styles.submit}
                        onPress={postData}
                        underlayColor='#fff'
                        android_ripple={{ color: '#fff' }}>
                        <Text style={styles.submitText}>Log in</Text>
                    </Pressable>
                    <Text>{user.fname}</Text>
                </View>
            </View>
        </ScrollView>
     
    );
}

export default Loginpage;

const styles = StyleSheet.create({
    main: {
        marginBottom: '50%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 'auto',
        textAlign:'center',
    },
    imgContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    img: {

        height: 200,
        width: 200,

    },
    maincontainer: {
        width: "80%",
        padding: 10,
        paddingTop: -100,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    },

    inputcontainer:
    {
        margin: 10,
        borderRadius: 15,
        padding: 5,
        backgroundColor: '#E7E6E0',
        elevation: 8,
        width: '100%',
    },
    buttonstyle: {
        margin: 10,
        padding: 5,

    },
    inputstyle: {
        // color: '#fff',
    },
    submit: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '80%',
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1481D0',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
});
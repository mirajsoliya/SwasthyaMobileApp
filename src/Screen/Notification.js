import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, StyleSheet } from 'react-native';
import * as Device from 'expo-device';
import { schedulePushNotification } from "../NotificationSche";

const Notification = ({ navigation, setRootName }) => {

    // const handelNotification = async () => {
    //     await schedulePushNotification("Hello", "bhai sabb", "success", Date.now(), "Sunday");
    // }

    // useEffect(() => {
    //     handelNotification()
    // }, [])

    return (
        <View style={styles.container}>
            {/* <Text>Your expo push token: {expoPushToken}</Text> */}
            {/* <View style={styles.notify}>
                <Text className={"font-semibold"}>{notification && notification.request.content.title} </Text>
                <Text>{notification && notification.request.content.body}</Text>
                <Text>{notification && JSON.stringify(notification.request.content.data)}</Text>
            </View> */}
            <Button
                title="Press to schedule a notification"

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    notify: {
        // alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: '90%',
        borderRadius: 15,
        borderColor: '#e7e5e4',
        backgroundColor: '#e7e5e4',
        padding: 10
    },
});


export default Notification;


import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screen/Home';
import BookAppoinment from '../Screen/BookAppoinment';
import Prescription from "../Screen/Prescription";
import Notification from "../Screen/Notification";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, Touchable, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { color } from 'react-native-reanimated';

const Tabarr = [
    { route: 'Home', label: 'Home', type: Icon.MaterialCommunityIcons, activeIcon: 'home-variant', inActiveIcon: 'home-outline', component: Home },
    { route: 'BookAppoinment', label: 'BookAppoinment', type: Icon.MaterialCommunityIcons, activeIcon: 'calendar-month', inActiveIcon: 'calendar-month-outline', component: BookAppoinment },
    { route: 'Prescription', label: 'Prescription', type: Icon.MaterialCommunityIcons, activeIcon: 'book-open', inActiveIcon: 'book-open-outline', component: Prescription },
    { route: 'Notification', label: 'Notification', type: Icon.MaterialCommunityIcons, activeIcon: 'clipboard-plus', inActiveIcon: 'clipboard-plus-outline', component: Notification },

];


const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: .5 }, 1: { scale: 1.5 } })
        }
        else {
            viewRef.current.animate({ 0: { scale: 1.5}, 1: { scale: 1} })
        }
    }, [focused])

    return (
        <Pressable
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                ref={viewRef}
                duration={1500}
                style={styles.container}>
                <Icon type={item.type} name={item.activeIcon} style={focused ? { color: '#2563eb', borderRadius: 50, padding: 5, textAlign: 'center', backgroundColor: '#bfdbfe' } : { color: '#2563eb' }} size={20} />
            </Animatable.View>
        </Pressable>
    )
}

function HomePage() {
    return (
        <Tab.Navigator

            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    right: 16,
                    borderRadius: 16,
                    backgroundColor: '#f3f4f6',
                    borderColor: '#f3f4f6'
                }
            }}>

            {Tabarr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            // tabBarLabel: item.label,
                            tabBarIcon: ({ color, focused }) => (
                                <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color='#68a0cf' size={25} />
                            ),
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}

                    />
                )
            })}

        </Tab.Navigator>
    );
}
export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
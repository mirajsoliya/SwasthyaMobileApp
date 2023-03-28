import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import AppNavigator from './src/pages/AppNavigator';
import { LogBox } from 'react-native';



const App = () => {
    useEffect(() => {
//Ignore all log notifications
LogBox.ignoreAllLogs();

    },[])
  return (<AppNavigator />
  )
};

export default App;

const styles = StyleSheet.create({

});

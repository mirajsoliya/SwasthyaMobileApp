import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
// import { Icon } from 'react-native-vector-icons/Icon';
import Loginpage from './pages/Loginpage'
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const  buttonLabel =(label)=>{
    return(
      <View style={{
        padding :12
      }}>
      <Text style={{
        color:'black',
        fontWeight:'600',
        fontSize:18,
      }}>{label}</Text>
      </View>
    );
  }

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
        <Loginpage />
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          dotStyle={{
            backgroundColor:'#E7E6E0',
            width:18,}}
          activeDotStyle={{backgroundColor:'#808080'}}
          // renderNextButton={()=>buttonLabel("Next")}
          renderNextButton ={()=>{
            return(
            <View style={{marginTop:10}} >
              <Icon name='navigate-next' size={30} ></Icon>
            </View>)
          }}
          renderSkipButton={()=>buttonLabel("Skip")}
          renderDoneButton={()=>buttonLabel("Let's go")}
        />
      )}
        {/* comment in miraj branch */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  introImageStyle: {
    width: 270,
    height: 270,
  },
  introTextStyle: {
    fontSize:23,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
    width:'52%',
    marginBottom:30,
  },
  introTitleStyle: {
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
    marginTop:40,
    fontWeight:'bold',

  },
});

const slides = [
  {
    key: 's1',
    text: 'Choose what brother you and we will provide the solution',
    title: 'Personal Treatment Plan',
   image:require('./images/treatment1.gif'),
  },
  {
    key: 's2',
    title: 'Notification reminder',
    text: 'plan ahead and we will remind you about your monthly or annual check-up',
    image:require('./images/notification1.gif'),
  },
  {
    key: 's3',
    title: 'Online Appoiment',
    text: 'Swasthya is a Digital India initiative aims to provide online access to hospital services for for patient.',
    image:require('./images/appoinment.gif'),
  },
 
];

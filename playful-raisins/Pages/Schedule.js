import * as React from 'react';
import { useState } from 'react';
import { Text, View, Switch, StyleSheet, TouchableHighlight, Image, Button, SafeAreaView, Alert, StatusBar, Platform } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
    
    const [isEnabled1, setIsEnabled1] = useState (false);
    const toggleSwitch1 = () => (setIsEnabled1(previousState1 => !previousState1));
    const [isEnabled2, setIsEnabled2] = useState (false);
    const toggleSwitch2 = () => (setIsEnabled2(previousState2 => !previousState2));
    

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerText}> Schedule Your Breating </Text>
    </View>
    <View style={styles.switchOneView}>
    <Switch style={styles.switchOne} trackColor={{ false: "grey" , true: "deepskyblue"}} thumbColor={isEnabled1 ? "grey" : "deepskyblue"} ios_backgroundColor='white' onValueChange={toggleSwitch1} value= {isEnabled1}/>
    </View>
    <View style={styles.switchOneView}>
    <Switch style={styles.switchOne} trackColor={{ false: "grey" , true: "deepskyblue"}} thumbColor={isEnabled2 ? "grey" : "deepskyblue"} ios_backgroundColor='white' onValueChange={toggleSwitch2} value= {isEnabled2}/>
    </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1 ,
    // backgroundColor: 'white',
    justifyContent: '',
    alignItems: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  switchOneView: {
    height: "10%",
    width: "100%",
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  switchOne: {
    backgroundColor: 'white',
    justifyContent: 'right',
    alignItems: 'center',
  },
  header: {
    height: "10%",
    width: "100%",
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: "white",
    fontFamily: "serif",
    fontSize: 20
  }
  
});



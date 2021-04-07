import React from "react";
import {ImageBackground , StyleSheet} from "react-native";
import Navigate from "./Pages/Navigate";

export default function App() {
  return <Navigate/>;
}

//dynamically add buttons
// import React, { Component } from 'react';
// import {Button , ImageBackground , View, Text, Platform, StyleSheet, TouchableOpacity, Animated, ScrollView, Image } from 'react-native';

// export default class App extends Component<{}>
// {
//     constructor()
//     {
//         super();

//         this.state = { valueArray: [], disabled: false }

//         this.index = 0;

//         this.animatedValue = new Animated.Value(0);
//     }

//     addMore = () =>
//     {
//     this.animatedValue.setValue(0);

//     let newlyAddedValue = { index: this.index }

//     this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
//     {
//         Animated.timing(
//             this.animatedValue,
//             {
//                 toValue: 1,
//                 duration: 500,
//                 useNativeDriver: true
//             }
//         ).start(() =>
//         {
//             this.index = this.index + 1;
//             this.setState({ disabled: false });
//         }); 
//     });              
// }

//     render()
//     {
//     const animationValue = this.animatedValue.interpolate(
//     {
//         inputRange: [ 0, 1 ],
//         outputRange: [ -59, 0 ]
//     });

//     let newArray = this.state.valueArray.map(( item, key ) =>
//     {
//         if(( key ) == this.index)
//         {
//             return(
//                 <Animated.View key = { key } style = {[ styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
//                     <Button style={styles.text} title = {item.index} color = "white" />
//                 </Animated.View>
//             );
//         }
//         else
//         {
//             return(
//                 <View key = { key } style = { styles.viewHolder }>
//                     <Button style={styles.text} title = "Time {item.index}" color = "white" />
//                 </View>
//             );
//         }
//     });

//     return(
//         <View style = { styles.container }>
//             <ScrollView>
//                 <View style = {{ flex: 1, padding: 4 }}>
//                 {
//                     newArray
//                 }
//                 </View>
//             </ScrollView>

//             <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } disabled = { this.state.disabled } onPress = { this.addMore }>
//                 <Image source = { require('./assets/plus.png') } style = { styles.btnImage }/>
//             </TouchableOpacity>
//         </View>
//     );
// }
// }

// const styles = StyleSheet.create(
// {
//     container:
//     {
//         flex: 1,
//         backgroundColor: '#eee',
//         justifyContent: 'center',
//         paddingTop: (Platform.OS == 'ios') ? 20 : 0
//     },

//     viewHolder:
//     {
//         height: 55,
//         backgroundColor: 'grey',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 4
//     },

//     text:
//     {
//         color: 'white',
//         fontSize: 25
//     },

//     btn:
//     {
//         position: 'absolute',
//         right: 25,
//         bottom: 25,
//         borderRadius: 30,
//         width: 60,
//         height: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '',
//         padding: 15,
//     },

//     btnImage:
//     {
//         resizeMode: 'contain',
//         width: '100%',
//         tintColor: 'white'
//     }
// });
////////////////////////////////////////////////////////////////////////////////////////
////WelcomePage/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
import React from "react";
import {ImageBackground , StyleSheet , View , Image, Text, Button, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen(props) {
    const navigation = useNavigation();
    function navigateToSchedule() {
        navigation.navigate("Schedule");}
    function navigateToAbout() {
        navigation.navigate("About");}
    function navigateToBreatheNow() {
        navigation.navigate("BreatheNow");}

    return(
        <ImageBackground
        style={styles.Background}
        source={require("./assets/toms_thumb2.jpg")}>
        <View style={styles.LogoContainter}>
        <Image 
        style={styles.Logo}
        source={require("./assets/logo.png")}>
        </Image>
        <Text style={styles.TagLine}> Taking back your life one breath at a time </Text>
        </View>
        <View style={styles.BreatheNowButton}>
          <Button style={styles.BreatheNowButtonText} title = "Breathe Now" color = "white" onPress= {()=>navigateToBreatheNow()}></Button>
        </View>
        <View style={styles.AboutButton}>
          <Button style={styles.AboutButtonText} title = "About" color = "white" onPress= {()=>navigateToAbout()}></Button>
        </View>
        <View style={styles.ScheduleButton}>
          <Button style={styles.ScheduleButtonText} title = "Schedule" color = "white" onPress= {()=>navigateToSchedule()}></Button>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    Logo:{
      width: "100%",
      height: 100,
      alignItems: "Center"
    },
    TagLine:{
      color: "white",
      fontFamily: "serif"
    },
    LogoContainter:{
      position: "absolute" ,
      top: 20,
      alignItems: "center"
    },
    BreatheNowButton:{
      width: "100%",
      height: 40,
      backgroundColor: "deepskyblue" ,
      alignItems: "center" ,
      justifyContent: "center",
    },
    AboutButton:{
      width: "100%",
      height: 40,
      backgroundColor: "grey" ,
      alignItems: "center" ,
      justifyContent: "center",
    },
    ScheduleButton:{
      width: "100%",
      height: 40,
      backgroundColor: "deepskyblue" ,
      alignItems: "center" ,
      justifyContent: "center",
    },
})
export default WelcomeScreen;



// import React from "react";
// import {ImageBackground , StyleSheet , View , Image, Text, Button, Alert} from "react-native";
// import { useNavigation } from '@react-navigation/native';

// function WelcomeScreen(props) {
    
//     const navigation = useNavigation();

//     function navigateToSchedule() {
//         navigation.navigate("Schedule");
//     }
    
//     return(
//         <ImageBackground
//         style={styles.Background}
//         source={require("./assets/toms_thumb2.jpg")}>
//         <View style={styles.LogoContainter}>
//         <Image 
//         style={styles.Logo}
//         source={require("./assets/logo.png")}>
//         </Image>
//         <Text style={styles.TagLine}> Taking back your life one breath at a time </Text>
//         </View>
//         <View style={styles.SignUpButton}>
//           <Button style={styles.SignUpButtonText} title = "Begin" color = "white" onPress= {()=>navigateToSchedule()}></Button>
//         </View>
//         </ImageBackground>
//     );
// }

// const styles = StyleSheet.create({
//     Background:{
//         flex: 1,
//         justifyContent: "flex-end",
//         alignItems: "center"
//     },
//     Logo:{
//       width: "100%",
//       height: 100,
//       alignItems: "Center"
//     },
//     TagLine:{
//       color: "white",
//       fontFamily: "serif"
//     },
//     LogoContainter:{
//       position: "absolute" ,
//       top: 20,
//       alignItems: "center"
//     },
//     SignUpButton:{
//       width: "100%",
//       height: 60,
//       backgroundColor: "deepskyblue" ,
//       alignItems: "center" ,
//       justifyContent: "center",
//     },
//     SignUpButtonText:{
      
//     },
    

// })

// export default WelcomeScreen;


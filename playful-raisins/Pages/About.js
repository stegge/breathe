import React from "react";
import {ImageBackground , StyleSheet , View , Image, Text, Button, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';

function About(props) {
    
    const navigation = useNavigation();

    function navigateToSchedule() {
        navigation.navigate("Schedule");
    }
    
    return(
        <ImageBackground
        style={styles.Background}
        source={require("./assets/breatheAbout.jpg")}>
        <View style={styles.Mission}>
        <View style={styles.Paragraph}>
        <Text style={styles.ParagraphText}> 
        The infinite scroll of social media has taken over our lives. It sometimes makes us even forget to breathe. We aim to help you take back your life one breath at a time.    
        </Text>
      </View>
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
      fontFamily: "serif",
    },
    LogoContainter:{
      position: "absolute" ,
      top: 20,
      alignItems: "center"
    },
    Mission: {
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center' ,
  },
    Paragraph: {
    width: "70%",
    height: "50%",
    justifyContent: 'flex-start',
    alignItems: 'center' ,
    
  },
    ParagraphText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    enum: 'center'
  }
})

export default About;
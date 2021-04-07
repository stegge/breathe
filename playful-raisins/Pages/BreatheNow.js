import React from "react";
import {ImageBackground , StyleSheet , View , Image, Text, Button, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';

function BreatheNow(props) {
    return (

    <View style={styles.container}>
      <Text style={styles.paragraph}>
        You have been scrolling for a while
      </Text>
      <Text style={styles.paragraph}>
        Take one minute to breath
      </Text>
      <Text style={styles.paragraph}>
        Breathe in deeply 
      </Text>
      <Text style={styles.paragraph}>
        Breathe out slowly
      </Text>
      <Text style={styles.paragraph}>
        Just be
      </Text>
      <Text style={styles.paragraph}>
        Here
      </Text>
      <Text style={styles.paragraph}>
        Right now
      </Text>
      <Text style={styles.paragraph}>
        In this breath
      </Text>
      <Text style={styles.paragraph}>
        And now the next breath
      </Text>
      <Text style={styles.paragraph}>
        Now you're in control of what you do
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F8F8FF',
    textAlign: 'center',
  }
});

export default BreatheNow;
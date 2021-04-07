import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "../Pages/WelcomeScreen";
import Schedule from "../Pages/Schedule";
import About from "../Pages/About";
import BreatheNow from "../Pages/BreatheNow";

const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <AppStack.Screen name="Schedule" component={Schedule} />
    <AppStack.Screen name="About" component={About} />
    <AppStack.Screen name="BreatheNow" component={BreatheNow} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreens from "../screens/LoginScreens";
import ForgotPassword from "../screens/ForgotPassword";
import HomeScreen from "../screens/HomeScreen";
import CastScreen from "../screens/CastScreen";
import BottomTabNavigator from "./BottomTabNavigator";


const Stack = createNativeStackNavigator();

const AppNavigator = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreens} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
                <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown: false}} />
                <Stack.Screen name="Forgot" component={ForgotPassword} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

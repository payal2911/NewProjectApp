
import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../screens/LoginScreens";
import ForgotPassword from "../screens/ForgotPassword";
import LoginScreens from "../screens/LoginScreens";


const Stack = createNativeStackNavigator();

const AuthStack = () =>{

    return(

            <Stack.Navigator >
                <Stack.Screen name="Login" component={LoginScreens} />
                <Stack.Screen name="Login" component={ForgotPassword} />
            </Stack.Navigator>

    )
}

export default AuthStack;

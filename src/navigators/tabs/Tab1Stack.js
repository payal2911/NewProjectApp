
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../../screens/LoginScreens";
import RegisterScreen from "../../screens/RegisterScreen";


const Stack = createNativeStackNavigator();

const Tab1Stack = () =>{

    return(
<NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={RegisterScreen} />
            </Stack.Navigator>
</NavigationContainer>

    )
}

export default Tab1Stack;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../../screens/LoginScreens";
import RegisterScreen from "../../screens/RegisterScreen";
import HomeScreen from "../../screens/HomeScreen";


const Stack = createNativeStackNavigator();

const Tab1Navigator = () =>{

    return(

            <Stack.Navigator >
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />

                {/*<Stack.Screen name="Home" component={RegisterScreen} />*/}
            </Stack.Navigator>

    )
}

export default Tab1Navigator;

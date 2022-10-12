
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../../screens/LoginScreens";
import RegisterScreen from "../../screens/RegisterScreen";
import HomeScreen from "../../screens/HomeScreen";
import MovieDetailScreen from "../../screens/MovieDetailScreen";


const Stack = createNativeStackNavigator();

const TabOneNavigator = () =>{

    return(

            <Stack.Navigator >
                {/*<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />*/}

                <Stack.Screen name="Home" component={MovieDetailScreen} />
            </Stack.Navigator>

    )
}

export default TabOneNavigator;

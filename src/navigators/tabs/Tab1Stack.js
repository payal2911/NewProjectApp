
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../../screens/LoginScreens";
import RegisterScreen from "../../screens/RegisterScreen";
import MovieDetailScreen from "../../screens/MovieDetailScreen";
import CastScreen from "../../screens/CastScreen";
import TVShowDetailScreen from "../../screens/TVShowDetailScreen";
import HomeScreen from "../../screens/HomeScreen";


const Stack = createNativeStackNavigator();

const Tab1Stack = () =>{

    return(

            <Stack.Navigator >
                <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}} />
                <Stack.Screen name="MovieDetails" component={MovieDetailScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Cast" component={CastScreen} options={{headerShown: false}} />
                <Stack.Screen name="TVShow" component={TVShowDetailScreen} options={{headerShown: false}}  />
            </Stack.Navigator>


    )
}

export default Tab1Stack;

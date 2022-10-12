
import {StyleSheet} from 'react-native';
import AppNavigator from "./src/navigators/AppNavigator";
import {StatusBar} from "expo-status-bar";
import * as React from "react";
import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";
import TabOneStack from "./src/navigators/tabs/TabOneStack";


export default function App() {


        const [fontsLoaded] = useFonts({
            "GothamBold": require("./assets/Fonts/GothamBold.ttf"),
            "GothamBoldItalic": require("./assets/Fonts/GothamBoldItalic.ttf"),
            "GothamBook": require("./assets/Fonts/GothamBook.ttf"),
            "GothamBookItalic": require("./assets/Fonts/GothamBookItalic.ttf"),
            "GothamLight": require("./assets/Fonts/GothamLight.ttf"),
            "GothamLightItalic": require("./assets/Fonts/GothamLightItalic.ttf"),
            "GothamMedium": require("./assets/Fonts/GothamMedium.ttf"),
            "GothamMediumItalic": require("./assets/Fonts/GothamMediumItalic.ttf"),

        });



  return (
      <>
          <StatusBar style="Light"/>
        <AppNavigator/>
        {/*  <BottomTabNavigator/>*/}



      </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

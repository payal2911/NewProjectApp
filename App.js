
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from "./src/navigators/AppNavigator";
import {StatusBar} from "expo-status-bar";
import * as React from "react";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";
import Tab1Stack from "./src/navigators/tabs/Tab1Stack";


export default function App() {
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

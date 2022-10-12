import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import TabOneNavigator from "./tabs/TabOneNavigator";
import DownloadScreen from "../screens/DownloadScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {Entypo, Ionicons} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import TabOneStack from "./tabs/TabOneStack";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (<>

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#FFB01c",

                tabBarStyle: {
                    //postion: "absolute",
                    //elevation: 0,
                    //height: 50,
                    backgroundColor: "#0d0d0d",
                    // borderTopWidth: 1,
                    borderTopColor: "#191919",
                    //color: "red",
                },
            }}>
            <Tab.Screen name="Home" component={TabOneStack } options={{
                headerShown: false, tabBarIcon: ({color}) => (
                    <Entypo
                        name="home"
                        size={30}
                        color={color}/>
                ),
            }}
            />
            <Tab.Screen name="Search" component={SearchScreen} options={{
                headerShown: false, tabBarIcon: ({color}) => (
                    <Ionicons
                        name="search"
                        size={30}
                        color={color}/>
                ),
            }}/>

            <Tab.Screen name="Download" component={DownloadScreen} options={{
                headerShown: false, tabBarIcon: ({color}) => (
                    <Ionicons
                        name="download-outline"
                        size={30}
                        color={color}/>
                ),
            }}
            />

            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false, tabBarIcon: ({color}) => (
                    <Ionicons
                        name="person"
                        size={30}
                        color={color}/>
                ),
            }}
            />
        </Tab.Navigator>
    </>);
}

export default BottomTabNavigator

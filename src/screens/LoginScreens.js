
import {useNavigation} from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
//import { ScrollView } from 'react-native-gesture-handler';

import { pixelNormalize } from '../constants/Size';

const LoginScreens = (props) => {
    const [input, setInput] = useState("");
const navigation = useNavigation();

    return (
        <>

            <StatusBar style="light" />
            <ScrollView style={styles.container}>
                <SafeAreaView>
                    <View>
                        <ImageBackground style={styles.mainImage} source={require("../../assets/Images/mainImage.png")} />
                        <Image style={styles.logoContainer} source={require("../../assets/Images/Logo.png")} />
                    </View>

                    <View style={styles.emailView}>
                        <Text style={styles.textContainer}>EMAIL</Text>
                        <TextInput style={styles.inputText} placeholder="email here" placeholderTextColor="#4b4b48"></TextInput>
                    </View>
                    <View style={styles.passwordView}>
                        <Text style={styles.textPassward}>PASSWORD</Text>
                    </View>

                    <View style={styles.viewContainer}>
                        <TextInput style={styles.inputText} placeholder="password here" placeholderTextColor="#4b4b48">

                        </TextInput>
                        {/*<TouchableOpacity onPress={() => props.navigation.navigate("ForgotPassward")}>*/}
                            <TouchableOpacity onPress={()=>{
                                navigation.push('Forgot'); }}>
                            <Text style={styles.textForgot}>FORGOT?</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity onPress={()=>{
                        navigation.push('BottomTabNavigator'); }}>
                        <View>
                            <View style={styles.innerViewContainer}>
                                <Text style={styles.innerText}>LOGIN</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <View style={styles.socialView}>
                        <Text style={styles.textSocial}>──────  Social Logins  ──────</Text>
                        <View style={styles.innerImageContainer}>
                            <TouchableOpacity>
                                <View style={styles.facebookView} >
                                    <Image source={require("../../assets/Images/Facebookbutton.png")} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.facebookView}>
                                    <Image source={require("../../assets/Images/Googlebutton.png")} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View>

                        <Text style={styles.textAccount}>Don't have an account?</Text>
                    </View>

                    {/*<TouchableOpacity onPress={() => props.navigation.navigate("Register")}>*/}
                    <TouchableOpacity onPress={()=>{
                navigation.navigate('Register');
            }}>
                        <Text style={styles.textRegister}>REGISTER</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>

        </>
    );
}



export default LoginScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%"
    },
    mainImage: {
        width: pixelNormalize(870),
        height: pixelNormalize(450),
        zIndex: pixelNormalize(1)
    },
    logoContainer: {
        position: "absolute",
        marginTop: pixelNormalize(154),
        width: pixelNormalize(108),
        height: pixelNormalize(122),
        alignSelf: 'center',
        zIndex: pixelNormalize(2),

    },
    emailView: {
        width: pixelNormalize(285),
        height: pixelNormalize(62),
        marginLeft: pixelNormalize(45),
        marginRight: pixelNormalize(45),
        opacity: 1,
        marginTop: pixelNormalize(331),
        position: "absolute",
        zIndex: pixelNormalize(2),



    },
    textContainer: {
        color: "white",
        fontSize: pixelNormalize(12),
        fontFamily: "GothamBold",
        zIndex: pixelNormalize(2),
    },
    inputText: {
        backgroundColor: '#212121',
        color: "white",
        marginTop: pixelNormalize(10),
        borderRadius: pixelNormalize(10),
        paddingLeft: pixelNormalize(17),
        width: pixelNormalize(285),
        height: pixelNormalize(42),
        fontSize: pixelNormalize(17),
        fontFamily: "GothamBook",
    },
    passwordView: {
        width: pixelNormalize(285),
        height: pixelNormalize(62),
        marginLeft: pixelNormalize(45),
        marginRight: pixelNormalize(45),
        marginTop: pixelNormalize(435),
        position: "absolute",
        zIndex: pixelNormalize(2),
        opacity: 1,

    },
    textPassward: {
        color: "white",
        fontSize: pixelNormalize(12),
        zIndex: pixelNormalize(3),
        position: "absolute",
        fontFamily: "GothamBold",
    },
    viewContainer: {
        flexDirection: 'row',
        marginTop: pixelNormalize(10),
        marginLeft: pixelNormalize(45),
        marginRight: pixelNormalize(45)
    },
    textForgot: {
        color: "white",
        right: pixelNormalize(80),
        marginTop: pixelNormalize(25),
        fontSize: pixelNormalize(11),
        fontFamily: "GothamBold",
    },
    innerViewContainer: {
        backgroundColor: "#FFB01c",
        height: pixelNormalize(44),
        marginLeft: pixelNormalize(45),
        marginRight: pixelNormalize(45),
        width: pixelNormalize(285),
        borderRadius: pixelNormalize(14),
        marginTop: pixelNormalize(21),

    },
    innerText: {
        textAlign: "center",
        padding: pixelNormalize(12),
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBold",

    },
    socialView: {
        width: pixelNormalize(285),
        height: pixelNormalize(74),
        marginTop: pixelNormalize(33),
        marginLeft: pixelNormalize(45),
        marginRight: pixelNormalize(45),
        alignItems: "center"
    },
    textSocial: {
        color: "white",
        marginTop: pixelNormalize(15),
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBold",
        alignItems: "center"
    },
    textAccount: {
        color: "white",
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBook",
        marginTop: pixelNormalize(50),
        alignSelf: "center",
    },
    textRegister: {
        color: "white",
        alignSelf: "center",
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBold",
        marginTop: pixelNormalize(8),
        marginBottom: pixelNormalize(73)
    },
    innerImageContainer: {
        flexDirection: "row",
        marginTop: pixelNormalize(20),
        alignSelf: "center"

    },

    facebookView: {
        borderRadius: pixelNormalize(43),
        height: pixelNormalize(43),
        width: pixelNormalize(43),
        // backgroundColor: "#FFB01c",
        alignSelf: "center",
        color: "black",
        marginRight: pixelNormalize(20)
    },
});


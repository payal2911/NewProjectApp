import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { pixelNormalize } from '../constants/Size';

const ForgotPassword = (props) => {
    return (
        <>
            <StatusBar style="Light"/>
            <View style={styles.container}>
                <SafeAreaView>
                    <Image style={styles.logoContainer} source={require("../../assets/Images/Logo.png")} />

                    <Text style={styles.textContainer}>FORGOT PASSWORD</Text>
                    <View style={styles.enterView}>
                        <Text style={styles.innerText}>  Enter the email address you used to reate your account and we will email you a link to reset your passward</Text>
                    </View>

                    <View style={styles.emailView}>
                        <Text style={styles.emailText}>EMAIL</Text>
                        <TextInput style={styles.inputText} placeholder="email here" placeholderTextColor="#4b4b48"></TextInput>
                    </View>


                    <TouchableOpacity>
                        <View style={styles.innerViewContainer}>
                            <Text style={styles.saveEmailText}>SEND EMAIL</Text>
                        </View>

                    </TouchableOpacity>
                </SafeAreaView>
            </View>

        </>
    );
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: 'center',
        height:"100%",
        //justifyContent: 'center',

    },
    logoContainer: {
        width: pixelNormalize(108),
        height: pixelNormalize(122),
        marginTop: pixelNormalize(159),
        alignSelf: "center"
        // backgroundColor: "white"
        // position:"absolute"
    },

    textContainer: {
        color: "white",
        marginTop: pixelNormalize(42),
        fontSize: pixelNormalize(13),
        fontFamily: "GothamBold",
        alignSelf: "center"
        // fontWeight: "bold"
    },
    enterView:{
        marginTop: pixelNormalize(14),
        textAlign:"center",
        marginLeft:pixelNormalize(62),
        marginRight:pixelNormalize(62)
    },
    innerText: {
        color: "white",
        textAlign: "center",
        fontSize: pixelNormalize(15),
        fontFamily: "GothamBook",


    },
    emailView: {
        width: pixelNormalize(285),
        height: pixelNormalize(62),
        opacity: 1,
        marginTop: pixelNormalize(37),
        marginLeft: pixelNormalize(45),
        marginRight: pixelNormalize(45)

    },

    emailText: {
        color: "white",
        fontSize: pixelNormalize(12),
        fontFamily: "GothamBold",


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
    innerViewContainer: {
        backgroundColor: "#FFB01c",
        height: pixelNormalize(44),
        width: pixelNormalize(285),
        borderRadius: pixelNormalize(10),
        marginTop: pixelNormalize(25),
        marginLeft: pixelNormalize(45),
        marginRight: pixelNormalize(45)
    },
    saveEmailText: {
        color: "black",
        textAlign: "center",
        marginTop: pixelNormalize(15),
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBold"

    }

});


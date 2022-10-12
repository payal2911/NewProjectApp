import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView, SafeAreaView } from "react-native";
import { pixelNormalize } from "../constants/Size";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = (props) => {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar style="light" />
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.mainContainer}>

                        <View style={{ width: pixelNormalize(122), height: pixelNormalize(135) }}>
                            <View style={styles.viewContainer}>
                                <Image style={styles.imageContainer} source={require("../../assets/Images/userProfile.png")} />
                            </View>

                        </View>

                        <Text style={styles.textContainer}>Add profile picture</Text>


                        <View style={styles.firstView}>
                            <Text style={styles.innerText}>FIRST NAME</Text>
                            <TextInput style={styles.inputText} placeholder="first name here" placeholderTextColor="#4b4b48"></TextInput>
                        </View>

                        <View style={styles.lastView}>
                            <Text style={styles.lastText}>LAST NAME</Text>
                            <TextInput style={styles.inputText} placeholder="last name here" placeholderTextColor="#4b4b48"></TextInput>
                        </View>


                        <View style={styles.emailView}>
                            <Text style={styles.emailText}>EMAIL</Text>
                            <TextInput style={styles.inputText} placeholder="email here" placeholderTextColor="#4b4b48"></TextInput>
                        </View>

                        <View style={styles.passwordView}>
                            <Text style={styles.passwordText}>PASSWORD</Text>
                            <TextInput style={styles.inputText} placeholder="password here" placeholderTextColor="#4b4b48"></TextInput>
                        </View>

                        <View style={styles.confirmView}>
                            <Text style={styles.confirmPasswordText}>CONFIRM PASSWORD</Text>
                            <TextInput style={styles.inputText} placeholder="confirem password here" placeholderTextColor="#4b4b48"></TextInput>
                        </View>



                        {/*<TouchableOpacity onPress={() =>props.navigation.navigate("BottomTabNavigator")}>*/}
                        <TouchableOpacity onPress={()=>{
                navigation.push('Login');
            }}>
                            <View style={styles.innerViewContainer}>
                                <Text style={styles.registerText}>REGISTER</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

export default RegisterScreen;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        height: "100%"
        //width:900
    },
    viewContainer: {
        borderRadius: pixelNormalize(100),
        height: pixelNormalize(100),
        width: pixelNormalize(100),
        backgroundColor: "#212121",
        alignSelf: "center",
        color: "black",
        //marginRight: 20
        marginTop: pixelNormalize(74)
    },

    imageContainer: {
        alignSelf: "center",
        marginTop: pixelNormalize(20),
        width: pixelNormalize(42),
        height: pixelNormalize(55)
    },
    textContainer: {
        color: "white",
        fontSize: pixelNormalize(15),
        fontFamily: "GothamMedium",
        marginTop: pixelNormalize(45)
    },
    firstView: {
        width: pixelNormalize(285),
        height: pixelNormalize(62),
        marginTop: pixelNormalize(49),
    },

    innerText: {
        color: "white",
        fontSize: pixelNormalize(12),
        fontFamily: "GothamBold"
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
    lastText: {
        color: "white",
        fontSize: pixelNormalize(12),
        // fontWeight: "bold",
        fontFamily: "GothamBold"
    },
    emailText: {
        color: "white",
        fontSize: pixelNormalize(12),
        // fontWeight: "bold",
        fontFamily: "GothamBold"
    },
    passwordText: {
        color: "white",
        fontSize: pixelNormalize(12),
        // fontWeight: "bold",
        fontFamily: "GothamBold"
    },
    confirmPasswordText: {
        color: "white",
        fontSize: pixelNormalize(12),
        // fontWeight: "bold",
        fontFamily: "GothamBold"
    },
    lastView: {
        width: pixelNormalize(285),
        height: pixelNormalize(62),
        marginTop: pixelNormalize(29),
    },
    emailView: {
        width: pixelNormalize(285),
        height: pixelNormalize(62),
        marginTop: pixelNormalize(29),
    },
    passwordView: {
        width: pixelNormalize(285),
        height: pixelNormalize(62),
        marginTop: pixelNormalize(29),
    },
    confirmView: {
        width: pixelNormalize(285),
        height: pixelNormalize(66),
        marginTop: pixelNormalize(29),
    },
    innerViewContainer: {
        backgroundColor: "#FFB01c",
        height: pixelNormalize(44),
        width: pixelNormalize(285),
        borderRadius: pixelNormalize(14),
        marginTop: pixelNormalize(21),
        marginBottom: pixelNormalize(63)
    },
    registerText: {
        color: "black",
        //textAlign: "center",
        alignSelf: "center",
        //justifyContent:"center",
        paddingTop: pixelNormalize(15),
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBold"

    }

});

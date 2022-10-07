import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { pixelNormalize } from "../constants/Size";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = (props) => {

    return (
        <>
            <StatusBar style="light" />
            <ScrollView style={styles.container}>

                <SafeAreaView>
                    <Image style={styles.imageContainer} source={require("../../assets/Images/doraImage.png")} />

                    <View style={{ alignItems: "center" }}>

                        <Text style={styles.textContainer}>4.0</Text>

                        <View style={{ flexDirection: "row", alignSelf: 'center' }} >
                            <View style={styles.innerImageContainer} >
                                <Ionicons name="star" size={20} color="#FFB01c" />
                            </View>
                            <View style={styles.innerImageContainer} >
                                <Ionicons name="star" size={20} color="#FFB01c" />
                            </View>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star-outline" size={20} color="#FFB01c" />
                            </View>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star-outline" size={20} color="#FFB01c" />
                            </View>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star-outline" size={20} color="#FFB01c" />
                            </View>
                        </View>
                        <View styles={{ flexDirection: "row" }}>

                            <Text style={styles.movieText}>Movie   |   Advanture   |   Comedy   |   Family</Text>

                        </View>

                        <View style={styles.watchingView}>

                            <Text style={styles.watchingText}>Watching</Text>


                            <View style={styles.imageView}>
                                <View>

                                    <Image style={styles.girlImage} source={require("../../assets/Images/manImage.png")} />
                                </View>

                                <View>
                                    <Image style={styles.girlImage} source={require("../../assets/Images/girlImage.png")} />
                                </View>

                                <View>
                                    <Image style={styles.girlImage} source={require("../../assets/Images/girlsimage.png")} />
                                </View>
                            </View>
                        </View>


                    </View>
                </SafeAreaView>
            </ScrollView>

        </>

    );
}

export default Home;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%"
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    imageContainer: {
        width: pixelNormalize(375),
        height: pixelNormalize(516),
        // position: "absolute",
        opacity: 1
    },

    textContainer: {
        color: "white",
        alignSelf: "center",
        fontSize: pixelNormalize(33),
        fontFamily: "GothamBook",


    },
    innerImageContainer: {
        marginTop: pixelNormalize(10),
        width: pixelNormalize(30),
    },
    movieText: {
        color: "white",
        marginTop: pixelNormalize(18),
        fontSize: pixelNormalize(12),
        fontFamily: "GothamMedium",
        alignSelf: "center"
    },
    watchingText: {
        color: "white",
        marginTop: pixelNormalize(28),
        marginLeft: pixelNormalize(16),
        textAlign: "left",
        fontSize: pixelNormalize(15),
        fontFamily: "GothamBold"
    },
    imageView: {
        flexDirection: "row",
        marginLeft: pixelNormalize(16),
        marginRight: pixelNormalize(16),
        marginBottom: pixelNormalize(20)
    },

    watchingView: {
        width: pixelNormalize(359),
        height: pixelNormalize(155),
        marginTop: pixelNormalize(16)
    },

    girlImage: {
        width: pixelNormalize(96),
        height: pixelNormalize(120),
        marginRight: pixelNormalize(20),
        marginTop: pixelNormalize(13),


    },


});
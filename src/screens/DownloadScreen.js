import { View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { pixelNormalize } from "../constants/Size";
import { SafeAreaView } from "react-native-safe-area-context";

const Download = (props) => {
    return (
        <>
            <StatusBar style="light" />
            <ScrollView style={styles.container}>
                <SafeAreaView>
                    <View>
                        <View style={styles.viewContainer}>
                            <View>
                                <Image style={styles.imageMainContainer} source={require("../../assets/Images/Narcoss.png")} />
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.mainText}>Narcos</Text>
                                <Text style={styles.gbTexts}>4 Episodes | 5.02 GB</Text>
                            </View>
                        </View>

                        <View style={styles.netflixImage}>
                            <View >
                                <Image style={styles.imageMainContainer} source={require("../../assets/Images/Netflix.png")} />
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.mainText}>Sacred Games</Text>
                                <Text style={styles.gbTexts}>3 Episodes | 2.02GB</Text>
                            </View>
                        </View>


                        <View style={styles.netflixImage}>
                            <View>
                                <Image style={styles.imageMainContainer} source={require("../../assets/Images/Princess.png")} />
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.mainText}>Toy Story 4</Text>
                                <Text style={styles.gbTexts}>3.45GB</Text>
                            </View>
                        </View>


                        <View style={styles.netflixImage}>
                            <View >
                                <Image style={styles.imageMainContainer} source={require("../../assets/Images/Shazam.png")} />
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.mainText}>Shazam</Text>
                                <Text style={styles.gbTexts}>2.32GB</Text>
                            </View>
                        </View>


                        <View style={styles.netflixImage}>
                            <View>
                                <Image style={styles.imageMainContainer} source={require("../../assets/Images/AlitaImage.png")} />
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.mainText}>Alita Battle Angel</Text>
                                <Text style={styles.gbTexts}>1.45GB</Text>
                            </View>
                        </View>

                        <View style={styles.gothamImage}>
                            <View>
                                <Image style={styles.imageMainContainer} source={require("../../assets/Images/GothamImage.png")} />
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.mainText}>Gotham</Text>
                                <Text style={styles.gbTexts}>8 Episodes | 10.04 GB</Text>
                            </View>
                        </View>


                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

export default Download;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%"
        //alignItems: 'center',
        // justifyContent: 'center',
    },
    imageMainContainer: {
        height: pixelNormalize(100),
        width: pixelNormalize(150)
    },
    viewContainer: {
        flexDirection: "row",
        marginTop: pixelNormalize(63),
        marginLeft: pixelNormalize(16)
    },
    netflixImage: {
        flexDirection: "row",
        marginTop: pixelNormalize(26),
        marginLeft: pixelNormalize(16)
    },
    gothamImage: {
        flexDirection: "row",
        marginTop: pixelNormalize(26),
        marginBottom: pixelNormalize(10),
        marginLeft: pixelNormalize(16)
    },
    textView: {
        marginLeft: pixelNormalize(16)
    },
    mainText: {
        color: "white",
        fontSize: pixelNormalize(22),
        marginTop: pixelNormalize(30)
    },
    gbTexts: {
        color: "white",
        fontSize: pixelNormalize(15),
        marginTop: pixelNormalize(4)
    },

});
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
//import { TouchableOpacity } from "react-native-gesture-handler";

import { pixelNormalize } from "../constants/Size";

const Cast = (props) => {
    return (
        <>
            <StatusBar style="light" />
            <SafeAreaView>
                <ScrollView >
                    <View style={styles.container}>
                        <View>
                            <View style={styles.ellipseContainer}>
                                <Image style={styles.ellipseImage} source={require("../../assets/Images/Ellipse.png")} />
                                <Image style={styles.imagePerson} source={require("../../assets/Images/IsabelaMoner.png")} />

                            </View>
                        </View>
                        <View>
                            <Text style={styles.textMichael}>Michael</Text>
                            <Text style={styles.penaText}>Pena</Text>
                        </View>
                        <View>
                            <Text style={styles.mainText}>Michael Pena was born and raised in Chhicago, to Nicolasa, a social worker, and Eleuterio Pena, who worked at a button factory. His parents were oroginally from Mexico.</Text>
                        </View>
                        <View>
                            <Text style={styles.knownText}>Known for</Text>
                        </View>

                        <View style={styles.mainView}>
                            <View style={styles.image}>

                                <Image source={require("../../assets/Images/antMan.png")} />
                            </View>

                            <View style={styles.image}>
                                <Image source={require("../../assets/Images/hustle.png")} />
                            </View>

                            <View style={styles.image}>
                                <Image source={require("../../assets/Images/movie.png")} />
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default Cast;

const styles = StyleSheet.create({
    //mainContainer
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        height: "100%"

    },
    ellipseContainer: {
        width: pixelNormalize(320),
        marginTop: pixelNormalize(36),

    },
    ellipseImage: {
        alignSelf: "center",
        zIndex: 1,
        height: pixelNormalize(320),
        width: pixelNormalize(320),
        marginTop: pixelNormalize(36)

    },

    imagePerson: {
        position: "absolute",
        alignSelf: "center",
        height: pixelNormalize(303),
        width: pixelNormalize(268),
        marginTop: pixelNormalize(86),
        marginLeft: pixelNormalize(26),
        marginRight: pixelNormalize(26),
        zIndex: pixelNormalize(2),
        top: 0,
        left: 0,
    },
    textMichael: {
        color: 'white',
        fontSize: 37,
        fontFamily: "GothamMedium",
        zIndex: 2
    },
    penaText: {
        color: 'white',
        fontSize: 25,
        fontFamily: "GothamMedium",
        textAlign: 'center',
        marginTop: pixelNormalize(8)
    },
    mainText: {
        color: 'white',
        fontSize: pixelNormalize(15),
        fontFamily: 'GothamBook',
        marginTop: pixelNormalize(28),
        textAlign: 'left',
        marginLeft: pixelNormalize(16),
        marginRight: pixelNormalize(16),
        marginBottom: pixelNormalize(18),
    },
    knownText: {
        color: "white",
        fontSize: pixelNormalize(25),
        marginRight: pixelNormalize(212),
        marginTop: pixelNormalize(13)
    },
    mainView: {
        flexDirection: "row",
        marginTop: pixelNormalize(20)
    },
    image: {
        marginRight: pixelNormalize(6),
        marginLeft: pixelNormalize(6),
        marginBottom:pixelNormalize(50)

    }
});
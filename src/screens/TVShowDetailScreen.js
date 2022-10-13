import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView} from "react-native";
import {withOrientation} from "react-navigation";
import {Ionicons} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';
import {pixelNormalize} from '../constants/Size';

const TVShowDetail = (props) => {
    return (
        <>
            <StatusBar style="light"/>
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.container}>
                        <Image style={styles.mainImage} source={require("../../assets/Images/narcos.png")}/>
                        <Image style={styles.innerImage} source={require("../../assets/Images/playButton.png")}/>
                        <Text style={styles.textContainer}>Narcos</Text>
                        <View styles={{flexDirection: "row"}}>
                            <Text style={styles.movieText}>Drama | Biographical | Crime Film | Crime Fiction</Text>
                        </View>
                        <Text style={styles.innertextContainer}>9.0</Text>

                        <View style={{flexDirection: "row", alignSelf: "center"}}>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star" size={20} color="#FFB01c"/>
                            </View>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star" size={20} color="#FFB01c"/>
                            </View>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star" size={20} color="#FFB01c"/>
                            </View>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star" size={20} color="#FFB01c"/>
                            </View>
                            <View style={styles.innerImageContainer}>
                                <Ionicons name="star-outline" size={20} color="#FFB01c"/>
                            </View>
                        </View>
                        <Text style={styles.netflixText}>Netflix chronicles the rise of the cocaine trade in Colombia
                            and the gripping real-life stories of drug kingpina of the late '80s in this raw, gritty
                            original series.</Text>
                        <TouchableOpacity>
                            <View style={styles.innerViewContainer}>
                                <Text style={styles.textNow}>WATCH NOW</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.castText}>Episodes</Text>

                        <View style={{marginBottom: pixelNormalize(40), marginLeft: pixelNormalize(16)}}>
                            <View style={{flexDirection: "row"}}>
                                <Image style={styles.kingpinImage} source={require("../../assets/Images/Kingpin.png")}/>
                                <View style={{flexDirection: "column"}}>
                                    <Text style={styles.kingpinText}>1. The Kingpin Strategy</Text>
                                    <Text style={styles.kingpinMin}> 54 min</Text>
                                    <TouchableOpacity>
                                        <View style={{flexDirection: "row"}}>
                                            <View style={styles.downloadIcon}>
                                                <Ionicons name="download-outline" size={28} color="#FFB01c"/>
                                            </View>
                                            <Text style={styles.downloadText}>Download</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <Image style={styles.caliImage} source={require("../../assets/Images/CaliKBG.png")}/>
                                <View style={{flexDirection: "column"}}>
                                    <Text style={styles.caliText}>2. The Cali KBG</Text>
                                    <Text style={styles.kingpinMin}> 49 min</Text>
                                    <TouchableOpacity>
                                        <View style={{flexDirection: "row"}}>
                                            <View style={styles.downloadIcon}>
                                                <Ionicons name="download-outline" size={28} color="#FFB01c"/>
                                            </View>
                                            <Text style={styles.downloadText}>Download</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}


export default TVShowDetail;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // alignItems: 'center',
        height: "100%"
        //justifyContent: 'center',
    },
    mainImage: {
        width: pixelNormalize(430),
        height: pixelNormalize(300),

    },
    innerImage: {
        width: pixelNormalize(60),
        height: pixelNormalize(60),
        alignSelf: "center",
        position: "absolute",
        marginTop: pixelNormalize(135)
    },
    textContainer: {
        color: "white",
        fontSize: pixelNormalize(19),
        fontFamily: "GothamMedium",
        marginLeft: pixelNormalize(16),
        // fontWeight: "bold",
        //marginTop: 100,
        bottom: pixelNormalize(60),
        // marginBottom:normalize (40),
        //marginRight:pixelNormalize (250)
    },
    movieText: {
        color: "white",
        bottom: pixelNormalize(60),
        marginTop: pixelNormalize(14),
        fontSize: pixelNormalize(12),
        fontFamily: "GothamMedium",
        // fontWeight: "bold",
        marginLeft: pixelNormalize(16),
        //marginHorizontal:normalize (12)
        //marginRight: pixelNormalize(10)
    },
    innertextContainer: {
        color: "white",
        alignSelf: "center",
        bottom: pixelNormalize(45),
        fontSize: pixelNormalize(33),
        fontFamily: "GothamBook",
        marginTop: pixelNormalize(28)
        //fontWeight: "bold"
    },
    innerImageContainer: {
        bottom: pixelNormalize(40),
        width: pixelNormalize(30),

    },
    netflixText: {
        color: "white",
        fontSize: pixelNormalize(15),
        // fontFamily: "GothamBook",
        marginTop: pixelNormalize(28),
        marginLeft: pixelNormalize(16),
        marginRight: pixelNormalize(16),
        bottom: pixelNormalize(30)
    },
    innerViewContainer: {
        backgroundColor: "#FFB01c",
        height: pixelNormalize(35),
        width: pixelNormalize(155),
        marginTop: pixelNormalize(20),
        alignSelf: "center",
        borderRadius: pixelNormalize(10),
        bottom: pixelNormalize(25)
    },
    textNow: {
        color: "black",
        //textAlign: "center",
        alignSelf: "center",
        top: pixelNormalize(8),
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBold",
        // fontWeight: "bold"
    },
    castText: {
        color: "white",
        bottom: pixelNormalize(20),
        fontSize: pixelNormalize(15),
        fontFamily: "GothamBold",
        // fontWeight: "bold",
        marginLeft: pixelNormalize(16)
        // paddingRight: pixelNormalize(240),
    },
    kingpinImage: {
        width: pixelNormalize(160),
        height: pixelNormalize(90),
    },
    kingpinText: {
        color: "white",
        fontSize: pixelNormalize(15),
        fontFamily: "GothamMedium",
        // fontWeight: "bold",
        marginLeft: pixelNormalize(8),
        marginTop: pixelNormalize(5)
    },
    kingpinMin: {
        color: "white",
        fontSize: pixelNormalize(13),
        fontFamily: "GothamBook",
        //fontWeight: "bold",
        marginLeft: pixelNormalize(8),
        marginTop: pixelNormalize(5)
    },
    downloadIcon: {
        marginLeft: pixelNormalize(8),
        marginTop: pixelNormalize(5)
    },
    downloadText: {
        color: "#FFB01c",
        fontSize: pixelNormalize(15),
        marginTop: pixelNormalize(10),
        marginLeft: pixelNormalize(8),
    },
    caliImage: {
        width: pixelNormalize(160),
        height: pixelNormalize(90),
        top: pixelNormalize(30)
    },
    caliText: {
        color: "white",
        fontSize: pixelNormalize(15),
        fontFamily: "GothamMedium",
        // fontWeight: "bold",
        marginLeft: pixelNormalize(8),
        marginTop: pixelNormalize(30)
    }
});
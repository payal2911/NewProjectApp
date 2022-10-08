import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {pixelNormalize} from "../constants/Size";
import {SafeAreaView} from "react-navigation";
import {useNavigation} from "@react-navigation/native";

const Movie = (props) => {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar style="light"/>
            <SafeAreaView>
                <ScrollView style={styles.container}>
                    <View>
                        <Image style={styles.imageContainer} source={require("../../assets/Images/image.png")}/>
                        <Image style={styles.innerImage} source={require("../../assets/Images/playButton.png")}/>

                        <Text style={styles.textContainer}>Dora and the lost city of gold</Text>
                        <Text style={styles.movieText}>Movie | Advanture | Comedy | Family</Text>
                    </View>

                    <View>
                        <Text style={styles.innertextContainer}>4.0</Text>
                    </View>

                    <View style={{flexDirection: "row", alignSelf: 'center'}}>
                        <View style={styles.innerImageContainer}>
                            <Ionicons name="star" size={20} color="#FFB01c"/>
                        </View>
                        <View style={styles.innerImageContainer}>
                            <Ionicons name="star" size={20} color="#FFB01c"/>
                        </View>
                        <View style={styles.innerImageContainer}>
                            <Ionicons name="star-outline" size={20} color="#FFB01c"/>
                        </View>
                        <View style={styles.innerImageContainer}>
                            <Ionicons name="star-outline" size={20} color="#FFB01c"/>
                        </View>
                        <View style={styles.innerImageContainer}>
                            <Ionicons name="star-outline" size={20} color="#FFB01c"/>
                        </View>
                    </View>

                    <Text style={styles.doraText}>Having spent most of her life exploring the jungle, nothing could
                        prepare Dora for her most dangerousadventure yet - high school.</Text>

                    <TouchableOpacity onPress={()=>{
                        navigation.push('Cast');
                    }}>
                        <View style={styles.innerViewContainer}>
                            <Text style={styles.textNow}>WATCH NOW</Text>
                        </View>
                    </TouchableOpacity>


                    <Text style={styles.castText}>Cast</Text>


                    <View style={styles.imageViewContainer}>

                        <View style={{flexDirection: 'column'}}>
                            <Image style={styles.image} source={require("../../assets/Images/Michael.png")}/>
                            <Text style={styles.monerText}>Isabela Moner</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <TouchableOpacity>
                                <Image style={styles.image} source={require("../../assets/Images/Michael.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.monerText}>Michael Pena</Text>
                        </View>
                        <View>
                            <Image style={styles.image} source={require("../../assets/Images/EvaLongoria.png")}/>
                            <Text style={styles.monerText}>Eva Longoria</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );

}

export default Movie;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: 'black',
        height: "100%",
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imageContainer: {
        width: pixelNormalize(375),
        height: pixelNormalize(307),
        zIndex: pixelNormalize(1),

    },
    innerImage: {
        width: pixelNormalize(60),
        height: pixelNormalize(60),
        position: "absolute",
        alignSelf: "center",
        marginTop: pixelNormalize(135),
        zIndex: pixelNormalize(2)
    },
    textView: {
        width: pixelNormalize(375),
        height: pixelNormalize(122)
    },
    textContainer: {
        color: "white",
        marginTop: pixelNormalize(253),


        marginLeft: pixelNormalize(16),
        fontSize: pixelNormalize(19),
        zIndex: pixelNormalize(2),
        position: "absolute",
        fontFamily: "GothamMedium"

    },
    movieText: {
        color: "white",
        flexDirection: "row",
        fontSize: pixelNormalize(12),
        fontFamily: "GothamMedium",
        marginLeft: pixelNormalize(16),
        marginTop: pixelNormalize(290),
        zIndex: pixelNormalize(2),
        position: "absolute",

    },
    innertextContainer: {
        color: "white",
        alignSelf: "center",
        marginTop: pixelNormalize(28),
        fontSize: pixelNormalize(33),
        fontFamily: "GothamBook",

    },
    viewContainer: {
        flexDirection: "row",
    },
    innerImageContainer: {
        marginTop: pixelNormalize(10),
        width: pixelNormalize(30),
    },
    doraText: {
        marginTop: pixelNormalize(28),
        color: "white",
        textAlign: "center",
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBook",
        padding: pixelNormalize(5),
        marginLeft: pixelNormalize(16),
        marginRight: pixelNormalize(16)
    },
    innerViewContainer: {
        backgroundColor: "#FFB01c",
        alignSelf: "center",
        height: pixelNormalize(35),
        marginTop: pixelNormalize(19),
        width: pixelNormalize(155),
        borderRadius: pixelNormalize(12),
    },
    textNow: {
        color: "black",
        textAlign: "center",
        paddingTop: pixelNormalize(8),
        fontSize: pixelNormalize(14),
        fontFamily: "GothamBold"

    },
    castText: {
        color: "white",
        marginTop: pixelNormalize(19),
        marginLeft: pixelNormalize(16),
        fontSize: pixelNormalize(15),
        fontFamily: "GothamBold",

    },
    imageViewContainer: {
        flexDirection: "row",
        marginLeft: pixelNormalize(16),
        marginRight: pixelNormalize(16),
    },
    image: {
        width: pixelNormalize(96),
        height: pixelNormalize(127),
        backgroundColor: "#707070",
        marginTop: pixelNormalize(13),
        marginRight: pixelNormalize(26)
    },
    imageView: {
        flexDirection: "row",

    },

    monerText: {
        color: "white",
        fontSize: pixelNormalize(12),
        marginLeft: pixelNormalize(10),
        marginTop: pixelNormalize(6),
        marginBottom: pixelNormalize(20)

    },

});


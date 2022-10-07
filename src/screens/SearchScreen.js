import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { pixelNormalize } from "../constants/Size";
import { SafeAreaView } from "react-navigation";
import { StatusBar } from "expo-status-bar";
//import { TouchableOpacity } from "react-native-gesture-handler";

const Search = (props) => {
    return (
        <>
            <StatusBar style="light"/>
            <View style={styles.container}>
                <SafeAreaView>
                    <View>
                        <TextInput style={styles.inputText}></TextInput>
                    </View>
                    <View style={styles.iconContainer}>
                        <Ionicons name="search" size={28} color="white" />
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ flexDirection: 'row', }}>

                            <Text style={styles.showText}>TV SHOWS</Text>
                            <View style={styles.divider} />
                        </View>

                        <Image style={styles.imageContainer} source={require("../../assets/Images/girlImage.png")} />

                    </View>
                    <View style={styles.mainView}>
                        <View style={{ flexDirection: 'row', marginTop: pixelNormalize(30) }}>

                            <Text style={styles.movieText}>MOVIES</Text>
                            <View style={styles.divider} />
                        </View>



                        <View style={{ flexDirection: "row" }}>
                            <Image style={styles.streetImage} source={require("../../assets/Images/Street.png")} />

                            <Image style={styles.fighterImage} source={require("../../assets/Images/StreetFighter.png")} />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

export default Search;

const styles = StyleSheet.create({
    //mainContainer
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%"
    },

    inputText: {
        backgroundColor: '#212121',
        color: "white",
        alignContent: "center",
        marginTop: pixelNormalize(59),
        marginLeft: pixelNormalize(38),
        marginRight: pixelNormalize(38),
        borderRadius: pixelNormalize(10),
        paddingLeft: pixelNormalize(55),
        width: pixelNormalize(300),
        height: pixelNormalize(42),
        fontSize: pixelNormalize(19),
    },
    iconContainer: {
        bottom: pixelNormalize(35),
        marginLeft: pixelNormalize(50)

    },
    showText: {
        marginLeft: pixelNormalize(19),
        fontSize: 15,
        color: "white"
    },
    imageContainer: {
        width: pixelNormalize(120),
        height: pixelNormalize(150),
        marginTop: pixelNormalize(20),
        marginLeft: pixelNormalize(19)
        // marginRight: pixelNormalize(190)
    },
    movieText: {
        marginLeft: pixelNormalize(19),
        fontSize: 15,
        color: "white"
    },
    streetImage: {
        width: pixelNormalize(120),
        height: pixelNormalize(150),
        marginTop: pixelNormalize(20),
        marginLeft: pixelNormalize(19)


    },
    fighterImage: {
        width: pixelNormalize(120),
        height: pixelNormalize(150),
        marginTop: pixelNormalize(20),
        marginLeft: pixelNormalize(40)
    },
    mainView: {
        width: pixelNormalize(337),
        height: pixelNormalize(163),
        marginTop: pixelNormalize(30)
    },
    divider: {
        backgroundColor: 'grey',
        height: pixelNormalize(2),
        flex: 1,
        alignSelf: 'center',
        marginRight: pixelNormalize(5),
        marginLeft: pixelNormalize(19)
    },

});
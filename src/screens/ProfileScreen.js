import { View, Text, StyleSheet, Image, ScrollView,StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { pixelNormalize } from "../constants/Size";
import { SafeAreaView } from "react-navigation";

const Profile = (props) => {
    return (
        <>
            <StatusBar style="light" />
            <ScrollView  style={styles.container}>
                <SafeAreaView>
                    <View>
                        <Image style={styles.imageConatainer} source={require("../../assets/Images/Profile.png")} />
                        <Text style={styles.textContainer}>Tasun Prasad</Text>
                        <Text style={styles.premimumText}>Premium</Text>
                        <View style={{marginBottom:pixelNormalize(70)}}>
                            <View style={styles.personIcon}>
                                <View>
                                    <Ionicons name="person" size={24} color="white" />
                                </View>
                                <Text style={styles.iconText}>Account</Text>
                            </View>
                            <View style={styles.dividerView}>
                                <View style={styles.divider} />
                            </View>

                            <View  style={styles.notificationIcon}>
                                <View>
                                    <Ionicons name="ios-notifications" size={24} color="white" />
                                </View>
                                <Text style={styles.notificationText}>Notifications</Text>
                            </View>
                            <View style={styles.dividerView}>

                                <View style={styles.divider} />
                            </View>


                            <View  style={styles.notificationIcon}>
                                <View>
                                    <Ionicons name="ios-settings-sharp" size={24} color="white" />
                                </View>
                                <Text style={styles.iconText}>Settings</Text>
                            </View>
                            <View style={styles.dividerView}>

                                <View style={styles.divider} />
                            </View>

                            <View style={styles.notificationIcon}>
                                <View>
                                    <Ionicons name="information-circle-sharp" size={24} color="white" />
                                </View>
                                <Text style={styles.helpText}>Help</Text>
                            </View>
                            <View style={styles.dividerView}>
                                <View style={styles.divider} />
                            </View>

                            <View style={styles.notificationIcon}>
                                <View>
                                    <Ionicons name="log-out" size={24} color="white" />
                                </View>
                                <Text style={styles.iconText}>Logout</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );

}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%",
    },
    imageConatainer: {
        alignSelf: "center",
        marginTop: pixelNormalize(83),
        width: pixelNormalize(141),
        height: pixelNormalize(141),
        borderRadius: pixelNormalize(141)
    },
    textContainer: {
        color: "white",
        alignSelf: "center",
        fontSize: pixelNormalize(27),
        marginTop: pixelNormalize(26)
    },
    premimumText: {
        color: "#FFB01c",
        alignSelf: "center",
        fontSize: pixelNormalize(16),
        marginTop: pixelNormalize(5)
    },

    iconText: {
        color: "white",
        marginLeft: pixelNormalize(20),
        fontSize: pixelNormalize(20),
        textAlign: "center",
    },
    notificationText: {
        color: "white",
        fontSize: pixelNormalize(20),
        marginLeft: pixelNormalize(20),
        textAlign: "center",
    },

    helpText: {
        color: "white",
        fontSize: pixelNormalize(20),
        marginLeft: pixelNormalize(20),
        textAlign: "center",
    },
    personIcon:{
        flexDirection: "row",
        marginTop: pixelNormalize(61),
        marginLeft: pixelNormalize(48),
    },
    notificationIcon:{
        flexDirection: "row",
        marginTop: pixelNormalize(20),
        marginLeft: pixelNormalize(48)
    },
    dividerView:{
        flexDirection: 'row',
        marginTop: pixelNormalize(20)
    },
    divider:{
        backgroundColor: 'grey',
        height:pixelNormalize (1),
        flex: 1,
        alignSelf: 'center',
        marginLeft:pixelNormalize (20)
    },

});
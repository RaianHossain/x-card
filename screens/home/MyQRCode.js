//import liraries
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GeneralButton from '../../components/GeneralButton';
import QRCODE from '../../components/Qrcode';
import { COLORS } from '../../constants';

// create a component
const MyQRCode = () => {
    
    const [productQRref, setProductQRref] = useState();
    return (
        <View style={styles.container}>
            <View elevation={4} style={styles.box}>
                <View style={styles.countInfoBox}>
                    <View style={styles.eachBox}>
                        {/* <View> */}
                            <Ionicons name="wallet" size={32} color={"#4189E7"} />
                        {/* </View> */}
                        <View style={styles.textBox}>
                            <Text style={styles.counterStyle}>100</Text>
                            <Text style={styles.counterLabelStyle}>Check</Text>
                        </View>
                    </View>
                    <View style={styles.eachBox}>
                        <Ionicons name="wallet" size={32} color={'#E7C341'} />
                        <View style={styles.textBox}>
                            <Text style={styles.counterStyle}>200</Text>
                            <Text style={styles.counterLabelStyle}>Check</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.qrcode}>
                <QRCODE 
                    value={JSON.stringify({
                    name: "Raian",
                    email: "raiansanil@gmail.com"
                    })}
                    getRef={(c) => setProductQRref(c)}/>
                </View>
                <Text style={styles.infoText}>Automativally generated qrcode by the system.</Text>
                <View style={styles.buttonContainer}>
                    <GeneralButton title={"Save To Gallary"} icon={"download"} onPress={() => alert("check")}></GeneralButton>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.offwhiteBackground,
    },
    box: {
        height: '85%',
        width: '88%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginTop: 20,
        //border
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        }
    },
    countInfoBox: {
        flexDirection: "row",
        width: "90%",
        // backgroundColor: 'yellow',
        height: 80,
        alignItems: "center",
        alignSelf: "center",
        marginTop:15
    },
    eachBox: {
        flexDirection: "row",
        width: "50%",
        // backgroundColor: 'blue',
        alignItems: "center",
        paddingLeft: 25
    },
    counterLabelStyle: {
        fontSize: 17,
        color: COLORS.gray
    },
    counterStyle: {
        fontSize: 23,
        fontWeight: "900",
        color: COLORS.primary
    },
    textBox: {
        marginLeft: 15
    },
    qrcode: {
        alignSelf: 'center',
        marginTop: 50
    },
    infoText: {
        alignSelf: 'center',
        marginTop: 20,
        color: COLORS.gray
    },
    buttonContainer: {
        width: "70%",
        alignSelf: 'center',
        marginTop: 50
    }
});

//make this component available to the app
export default MyQRCode;

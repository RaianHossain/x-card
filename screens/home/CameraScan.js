//import liraries
import { useRoute } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, ROUTES } from '../../constants';
import colors from '../../constants/colors';


// create a component
const CameraScan = ({navigation}) => {
    const route = useRoute();
    const renderHeader = () => {
        return (
            <View style={styles.renderHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="close" color={colors.dark} size={33} />
                </TouchableOpacity > 
                <Text style={styles.headerTitle}>{route.name}</Text>
            </View>
        );
    }
    //scanner
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        // navigation.pop();
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        navigation.goBack();
        setTimeout(() => {navigation.navigate(ROUTES.CARDPROFILE, JSON.parse(data));}, 1000);
        // navigation.navigate(ROUTES.CARDPROFILE, JSON.parse(data));
    };
    // useEffect(() => {
    //     async function getBarCodeScannerPermission() {
    //         try {
    //           const { status } = await Camera.requestCameraPermissionsAsync();
    //           setHasPermission(status === PermissionStatus.GRANTED);
    //         } catch(error) {
    //           console.log(error);
    //         }
    //     };
    //     getBarCodeScannerPermission();
    //   }, []);
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    //endscanner
    
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <View style={{flex: 1}}>                
                <Camera
                    // onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    key={scanned ? 1 : 2}
                    barCodeScannerSettings={{
                        barcodeTypes: [ // You still need the expo-barcode-scanner module for the BarCodeScanner constants
                        BarCodeScanner.Constants.BarCodeType.qr // Specify what types you'd like to scan here
                        ]
                    }}
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                    // flashMode={flashOn ? FlashMode.torch : FlashMode.off}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                {/* <Text>CameraScan</Text> */}
                {/* { hasPermission && scanned &&
                <Camera
                    style={StyleSheet.absoluteFillObject}
                    key={scanned ? 1 : 2}
                    barCodeScannerSettings={{
                        barcodeTypes: [ // You still need the expo-barcode-scanner module for the BarCodeScanner constants
                        BarCodeScanner.Constants.BarCodeType.qr // Specify what types you'd like to scan here
                        ]
                    }}
                    onBarCodeScanned={handleBarCodeScanned}
                    flashMode={flashOn ? FlashMode.torch : FlashMode.off}
                />
                } */}
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#2c3e50',
        // marginTop: StatusBar.currendHeight
    },
    renderHeader: {
        height: '8%',
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingTop: '3%',
        paddingLeft: '2%',
    }, 
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingTop: '1%',
        marginLeft: '4%'
    }
});

//make this component available to the app
export default CameraScan;

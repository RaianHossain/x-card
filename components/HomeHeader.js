import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, ROUTES } from '../constants';


const HomeHeader = (props) => {
    const navigation = useNavigation();
    const toggleDrawerButton = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    const openQRCode = () => {
        navigation.navigate(ROUTES.QRCODE)
    }
    return (
        <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={toggleDrawerButton}>
                    <Ionicons name="reorder-three" size={32} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.title}>{props.title}</Text>
                    
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={openQRCode}>
                        <Ionicons name="barcode" size={32} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // height: 110,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 7,        
    },
    title: {
        marginLeft: 7,
        fontSize: 23,
        fontWeight: '800',
        color: COLORS.white
    },
    headerRight: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    
});

//make this component available to the app
export default HomeHeader;

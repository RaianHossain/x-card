//import liraries
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import { COLORS } from '../../constants';

// create a component
const MyCard = () => {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <HomeHeader title={route.name}></HomeHeader>
            <Text>MyCard</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.grayLight,
        // marginTop:StatusBar.currentHeight
    },
});

//make this component available to the app
export default MyCard;

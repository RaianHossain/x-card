//import liraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const CardProfile = ({route, navigation}) => {
    const {name, email} = route.params;
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default CardProfile;

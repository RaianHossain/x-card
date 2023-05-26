//import liraries
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import super_card from '../../assets/images/cards/super_card.jpg';
// create a component
const SuperCard = (props) => {
    const {id, name, email, phone, address, designation, logo, institute} = props.connection;
    return (
        <View style={styles.container}>
            <ImageBackground source={super_card} style={styles.image}>
                <Text>{name}</Text>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    image: {
        height: 200,
    },
});

//make this component available to the app
export default SuperCard;
